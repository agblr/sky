package com.xmbl.ops.enumeration;
//房源朝向
public enum EnumHouseOrientation {
	RESIDENCE		(0, "东西"),
	VILLA		    (1, "南北"),
	OFFICEBUILDING	(2, "东"),
	SHOPS		    (3, "西"),
	WAREHOUSE		(4, "南"),
	FACTORYBUILDING	(5, "北"),
	PARKINGLOT		(6, "金角"),
	LAND		    (7, "银角");

	private EnumHouseOrientation(int id, String desc) {
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
