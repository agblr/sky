package com.xmbl.ops.enumeration;
//-房源   0,有效，1成交，2失效
public enum EnumHouseIsstatus {
	ORDINARY (0,"有效"),
	DEAL (1,"成交"),
	RECOMMENDED (2,"失效");
	
	private EnumHouseIsstatus(int id, String desc){
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