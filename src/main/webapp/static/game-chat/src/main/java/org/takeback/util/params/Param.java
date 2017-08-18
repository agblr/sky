package org.takeback.util.params;

public class Param {

    private Long id;
    private String paramname;
    private String paramvalue;
    private String paramalias;
    private String remark;

    public Param(){}

    public Param(String name, String value){
        this.paramname = name;
        this.paramvalue = value;
    }

    public Param(String name, String value, String description){
        this.paramname = name;
        this.paramvalue = value;
        this.remark = description;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getParamname() {
        return paramname;
    }

    public void setParamname(String paramname) {
        this.paramname = paramname;
    }

    public String getParamvalue() {
        return paramvalue;
    }

    public void setParamvalue(String paramvalue) {
        this.paramvalue = paramvalue;
    }

    public String getParamalias() {
        return paramalias;
    }

    public void setParamalias(String paramalias) {
        this.paramalias = paramalias;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
}
