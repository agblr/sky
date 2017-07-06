package com.xmbl.ops.enumeration;
//房源类型（1：住宅，3写字楼，2别墅..）
public enum EnumHouseType {
	RESIDENCE		(1, "住宅"),
	VILLA		    (2, "别墅"),
	OFFICEBUILDING	(3, "写字楼"),
	SHOPS		    (4, "商铺"),
	WAREHOUSE		(5, "仓库"),
	FACTORYBUILDING	(6, "厂房"),
	PARKINGLOT		(7, "车位"),
	LAND		    (8, "土地");

	private EnumHouseType(int id, String desc) {
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
