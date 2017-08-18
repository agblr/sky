package org.takeback.util.params.support;

import com.google.common.collect.Maps;
import org.takeback.util.params.Param;
import org.takeback.util.params.ParamLoader;

import java.util.Map;

public class MemeryParamLoader implements ParamLoader {

    protected Map<String,Param> params = Maps.newConcurrentMap();

    @Override
    public String getParam(String parName, String defaultValue, String paramalias) {
        Param p = params.get(parName);
        if(p != null){
            return p.getParamvalue();
        }
        if(defaultValue == null){
            return null;
        }
        p = new Param(parName, defaultValue, paramalias);
        params.put(parName, p);
        return defaultValue;
    }

    @Override
    public String getParam(String parName, String defaultValue) {
        return getParam(parName, defaultValue, null);
    }

    @Override
    public String getParam(String parName) {
        return getParam(parName, null, null);
    }

    @Override
    public void setParam(String parName, String value) {
        Param p = new Param(parName, value);
        params.put(parName, p);
    }

    @Override
    public void removeParam(String parName) {
        reload(parName);
    }

    @Override
    public void reload(String parName) {
        params.remove(parName);
    }
}
