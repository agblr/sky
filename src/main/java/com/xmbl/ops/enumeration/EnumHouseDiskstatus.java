package com.xmbl.ops.enumeration;
//-房源   '0,私盘，1公盘，2淘宝池'
public enum EnumHouseDiskstatus {
	PRI (0,"私盘"),
	PUB (1,"公盘"),
	TAOBAO (2,"淘宝池");
	
	private EnumHouseDiskstatus(int id, String desc){
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