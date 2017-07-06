package com.xmbl.ops.enumeration;

public enum EnumIsKey {
	YES (0,"有"),
	NO (1,"否");
	
	private EnumIsKey(int id, String desc){
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