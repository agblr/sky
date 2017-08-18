package org.takeback.util.params;

import org.takeback.util.params.support.MemeryParamLoader;

public class ParamUtils{

    /**
     * default storage in memery
     * @return
     */
    private static ParamLoader paramLoader = new MemeryParamLoader();

    public static void setParamLoader(ParamLoader paramLoader) {
        ParamUtils.paramLoader = paramLoader;
    }

    public static String getParam(String parName, String defaultValue, String paramalias) {
        return paramLoader.getParam(parName, defaultValue, paramalias);
    }

    public static String getParam(String parName, String defaultValue) {
        return paramLoader.getParam(parName, defaultValue);
    }

    public static String getParam(String parName) {
        return paramLoader.getParam(parName);
    }

    /**
     * 如果null，则返回空串""
     * @param parName
     * @return
     */
    public static String getParamSafe(String parName) {
        return getParam(parName) == null ? "" : getParam(parName);
    }

    public static void setParam(String parName, String value) {
        paramLoader.setParam(parName, value);
    }

    public static void removeParam(String parName) {
        paramLoader.removeParam(parName);
    }

    public static void reload(String parName) {
        paramLoader.reload(parName);
    }
}
