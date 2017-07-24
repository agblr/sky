package com.xmbl.ops.enumeration;
//-房源   ’0，开盘，1封盘‘
public enum EnumHouseSealingdisk {
	OPEN (0,"开盘"),
	COLSE (1,"封盘");
	
	private EnumHouseSealingdisk(int id, String desc){
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