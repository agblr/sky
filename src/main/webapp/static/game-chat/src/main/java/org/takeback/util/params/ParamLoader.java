package org.takeback.util.params;

public interface ParamLoader {

    /**
     * 获得对应的参数，没有则返回第二参数默认值
     * @param parName
     * @param defaultValue
     * @param paramalias    参数描述
     * @return
     */
    String getParam(String parName, String defaultValue, String paramalias);

    String getParam(String parName, String defaultValue);

    String getParam(String parName);

    void setParam(String parName, String value);

    /**
     * 删除参数，包括持久化存储
     * @param parName
     */
    void removeParam(String parName);

    /**
     * 清空缓存里的参数
     * @param parName
     */
    void reload(String parName);

}
