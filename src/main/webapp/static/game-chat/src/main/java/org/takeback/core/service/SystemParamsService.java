package org.takeback.core.service;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.exception.CodedBaseRuntimeException;
import org.takeback.util.params.Param;
import org.takeback.util.params.ParamUtils;

import java.io.Serializable;
import java.util.Map;

@Service("systemParamsService")
public class SystemParamsService extends MyListService {


    @Override
    protected void beforeSave(Object obj) {
        Param p = (Param) obj;
        ParamUtils.reload(p.getParamname());
    }

    @Override
    public void delete(Map<String, Object> req) {
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
        Param p = dao.get(entityName, id);
        if(p != null){
            ParamUtils.reload(p.getParamname());
            dao.delete(entityName, id);
        }
    }
}
