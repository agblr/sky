package com.xmbl.ops.enumeration;

public enum EnumCustomerStatus {
	EFFECTIVE		(0, "有效客户"),
	POTENTIAL 	        (1, "潜在客户"),
	SIGNED 	        (2, "已签约"),
	INVALID 	        (3, "失效用户"),
	LOCK 	        (4, "锁定用户");

    private EnumCustomerStatus(int id, String desc) {
        this.id = id;
        this.desc = desc;
    }

    private int id;
    private String desc;

    public int getId() {
        return id;
    }
    public String getDesc() {
        return desc;
    }
}
