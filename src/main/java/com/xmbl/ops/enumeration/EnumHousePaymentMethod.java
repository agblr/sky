package com.xmbl.ops.enumeration;
//付款方式
public enum EnumHousePaymentMethod {
	RESIDENCE		(0, "押一付三"),
	VILLA		    (1, "季付"),
	OFFICEBUILDING	(2, "半年"),
	SHOPS		    (3, "年"),
	WAREHOUSE		(4, "面议");

	private EnumHousePaymentMethod(int id, String desc) {
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
