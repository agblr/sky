package com.xmbl.ops.enumeration;
//-房源属性（1推荐，0普通）
public enum EnumHouseProperties {
	ORDINARY (0,"普通"),
	RECOMMENDED (1,"推荐");
	
	private EnumHouseProperties(int id, String desc){
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