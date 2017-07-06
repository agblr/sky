package com.xmbl.ops.enumeration;

public enum EnumStatus {
	 NO (0,"正常"),
	 YES (1,"删除");
	
	private EnumStatus(int id, String desc){
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