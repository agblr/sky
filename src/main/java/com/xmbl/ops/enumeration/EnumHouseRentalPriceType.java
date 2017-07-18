package com.xmbl.ops.enumeration;
//租金单位
public enum EnumHouseRentalPriceType {
	RESIDENCEDAY    (7, "元/天/㎡"),
	RESIDENCE		(0, "元/日"),
	VILLA		    (1, "元/月"),
	OFFICEBUILDING	(2, "元/季度"),
	SHOPS		    (3, "元/半年"),
	WAREHOUSE		(4, "元/年"),
	FACTORYBUILDING	(5, "元/平米/天"),
	PARKINGLOT		(6, "热毯");

	private EnumHouseRentalPriceType(int id, String desc) {
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
