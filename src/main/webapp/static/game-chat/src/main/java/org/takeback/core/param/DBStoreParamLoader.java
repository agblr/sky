package org.takeback.core.param;

import org.springframework.beans.factory.annotation.Autowired;
import org.takeback.service.BaseService;
import org.takeback.util.params.Param;
import org.takeback.util.params.support.MemeryParamLoader;

public class DBStoreParamLoader extends MemeryParamLoader {

    @Autowired
    private BaseService baseService;

    @Override
    public String getParam(String parName, String defaultValue, String paramalias) {
        Param p = params.get(parName);
        if(p != null){
            return p.getParamvalue();
        }
        p = baseService.getUnique(Param.class, "paramname", parName);
        if(p != null){
            params.put(parName, new Param(parName, p.getParamvalue(), p.getParamalias()));
            return p.getParamvalue();
        }
        if(defaultValue == null){
            return null;
        }
        p = new Param(parName, defaultValue, paramalias);
        params.put(parName, p);
        baseService.save(Param.class, p);
        return defaultValue;
    }


    @Override
    public void setParam(String parName, String value) {
        super.setParam(parName, value);
        Param param= baseService.getUnique(Param.class, "paramname",parName);
        if(null == param){
            baseService.save(Param.class, new Param(parName,value));
        }else{
            param.setParamvalue(value);
            baseService.update(Param.class, param);
        }

    }

    @Override
    public void removeParam(String parName) {
        super.removeParam(parName);
        Param p = baseService.getUnique(Param.class, "paramname", parName);
        if(p != null){
            baseService.delete(Param.class, p);
        }
    }
}
