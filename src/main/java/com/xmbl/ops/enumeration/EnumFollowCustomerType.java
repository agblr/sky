package com.xmbl.ops.enumeration;
/*
短信
一手带看
接待
调查
无法接通
电话拜访
其他
客服部回访
 */

public enum EnumFollowCustomerType {
	SHORTMESSAGE	    (0, "短信"),
	WITHALOOK	 (1, "一手带看"),
	RECEPTION	 (2, "接待"),
	INVESTIGATION	 (3, "接待"),
	NOTAVAILABLE	 (4, "无法接通"),
	TELEPHONECALL	 (5, "电话拜访"),
	OTHER	 (6, "其他"),
	CUSTOMERSERVICEREVIEW	 (7, "客服部回访");
	
	private EnumFollowCustomerType(int id, String desc) {
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
