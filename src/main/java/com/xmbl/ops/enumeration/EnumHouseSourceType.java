package com.xmbl.ops.enumeration;
//房源来源
public enum EnumHouseSourceType {
	SHANGMEN		(1, "上门"),
	BAIFANG		    (2, "拜访"),
	DIANHAU	        (3, "电话"),
	MOBAI		    (4, "陌拜"),
	ZHUSHOU		     (5, "驻守"),
	GUANGGAO	     (6, "广告"),
	SOUFANG		     (7, "搜房"),
	TONGCHENG58		  (8, "58同城"),
	GANJI		      (9, "赶集"),
	XINLANGLEJU		  (10, "新浪乐居"),
	LAOPENGYOU		  (11, "老朋友");

	private EnumHouseSourceType(int id, String desc) {
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
