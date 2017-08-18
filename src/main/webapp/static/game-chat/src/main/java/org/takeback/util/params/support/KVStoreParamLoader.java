package org.takeback.util.params.support;

import org.takeback.util.kvstore.KVStore;
import org.takeback.util.kvstore.KVStoreFactory;
import org.takeback.util.params.Param;

public class KVStoreParamLoader extends MemeryParamLoader {

    private String storeName = "paramsStore";
    private KVStore kvStore;

    public KVStoreParamLoader(){
        kvStore = KVStoreFactory.instance().get(storeName);
    }

    public KVStoreParamLoader(String storeName){
        kvStore = KVStoreFactory.instance().get(storeName);
    }

    @Override
    public String getParam(String parName, String defaultValue, String paramalias) {
        Param p = params.get(parName);
        if(p != null){
            return p.getParamvalue();
        }
        String value = kvStore.get(parName);
        if(value != null){
            params.put(parName, new Param(parName, value, paramalias));
            return value;
        }
        if(defaultValue == null){
            return null;
        }
        p = new Param(parName, defaultValue, paramalias);
        params.put(parName, p);
        kvStore.put(parName, defaultValue);
        return defaultValue;
    }

    @Override
    public void setParam(String parName, String value) {
        super.setParam(parName, value);
        kvStore.put(parName, value);
    }

    @Override
    public void removeParam(String parName) {
        super.removeParam(parName);
        kvStore.remove(parName);
    }
}
