package org.takeback.core.service;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.exception.CodedBaseRuntimeException;

import java.util.Map;

@Service("bannerService")
public class BannerService extends MyListService{

    private String bannerPath = "/content/images/banner";

    @Transactional
    public Object save1(Map<String, Object> req){
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
            return obj;
        } catch (ClassNotFoundException e) {
            throw new CodedBaseRuntimeException(510, "parse class["+entityName+"] failed");
        }
    }


}
