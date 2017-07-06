package com.xmbl.ops.enumeration;
//看房方式
public enum EnumSeeMethod {
	RESIDENCE		(0, "提前预约"),
	VILLA		    (1, "直接带看"),
	OFFICEBUILDING	(2, "借钥匙带看");

	private EnumSeeMethod(int id, String desc) {
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
