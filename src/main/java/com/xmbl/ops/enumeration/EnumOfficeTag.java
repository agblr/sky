package com.xmbl.ops.enumeration;
//写字楼标签
public enum EnumOfficeTag {
	ONE		(1, "交通便利"),
	TWO		(2, "配套设施齐全");

	private EnumOfficeTag(int id, String desc) {
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
