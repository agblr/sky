package org.takeback.core.service;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.takeback.dao.BaseDAO;
import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.exception.CodedBaseRuntimeException;
import org.takeback.util.exp.ExpressionProcessor;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("myListService")
public class MyListService {

    @Autowired
    protected BaseDAO dao;
    protected static String CMD = "cmd";
    protected static String PAGE = "page";
    protected static String START = "start";
    protected static String LIMIT = "limit";
    protected static String ID = "id";
    protected static String CND = "cnd";
    protected static String ORDERINFO = "orderInfo";
    public static String ENTITYNAME = "entityName";


    @Transactional(readOnly = true)
    public Map<String, Object> list(Map<String, Object> req) {
        String entityName = (String) req.get(ENTITYNAME);
        if (StringUtils.isEmpty(entityName)) {
            throw new CodedBaseRuntimeException(404, "missing entityName");
        }
        int limit = (int) req.get(LIMIT);
        int page = (int) req.get(PAGE);
        List<?> cnd = (List<?>) ConversionUtils.convert(req.get(CND), List.class);
        String filter = null;
        if(cnd != null){
            filter = ExpressionProcessor.instance().toString(cnd);
        }
        String orderInfo = (String) req.get(ORDERINFO);
        List<?> ls = dao.query(entityName, filter, limit, page, orderInfo);
        afterList(ls);
        long count = dao.totalSize(entityName, filter);
        Map<String, Object> result = new HashMap<>();
        result.put("totalSize", count);
        result.put("body", ls);
        return result;
    }

    @Transactional(readOnly = true)
    public Object load(Map<String, Object> req){
        String entityName = (String) req.get(ENTITYNAME);
        if (StringUtils.isEmpty(entityName)) {
            throw new CodedBaseRuntimeException(404, "missing entityName");
        }
        Object pkey = req.get("id");
        Serializable id = null;
        if(pkey instanceof Integer){
            id = ConversionUtils.convert(pkey, Long.class);
        }else{
            id = ConversionUtils.convert(pkey, String.class);
        }
        Object entity = dao.get(entityName, id);
        afterLoad(entity);
        return entity;
    }

    @Transactional
    public void delete(Map<String, Object> req){
        String entityName = (String) req.get(ENTITYNAME);
        if (StringUtils.isEmpty(entityName)) {
            throw new CodedBaseRuntimeException(404, "missing entityName");
        }
        Object pkey = req.get("id");
        Serializable id = null;
        if(pkey instanceof Integer){
            id = ConversionUtils.convert(pkey, Long.class);
        }else{
            id = ConversionUtils.convert(pkey, String.class);
        }
        dao.delete(entityName, id);
    }

    @Transactional
    public void save(Map<String, Object> req){
        String entityName = (String) req.get(ENTITYNAME);
        if (StringUtils.isEmpty(entityName)) {
            throw new CodedBaseRuntimeException(404, "missing entityName");
        }
        Map<String, Object> data = (Map<String, Object>) req.get("data");
        beforeProcessSaveData(data);
        try {
            Class<?> cls = Class.forName(entityName);
            Object obj = ConversionUtils.convert(data, cls);
            beforeSave(obj);
            dao.getSession().saveOrUpdate(obj);
        } catch (ClassNotFoundException e) {
            throw new CodedBaseRuntimeException(510, "parse class["+entityName+"] failed");
        }
    }

    protected void beforeProcessSaveData(Map<String, Object> data){}

    protected void beforeSave(Object obj){}

    protected void afterList(List<?> ls){}

    protected void afterLoad(Object entity){}

}
