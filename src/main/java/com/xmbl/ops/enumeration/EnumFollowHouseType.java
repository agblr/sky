package com.xmbl.ops.enumeration;
/*
 电话跟进
 一手房带看
实勘
谈委托
接待
洗盘
店面面谈
派单
调查
其他
店经理陪同作业
带看前预约
拜访
 */

public enum EnumFollowHouseType {
	TELEPHONEFOLLOWUP	    (0, "电话跟进"),
	TAKEALOOKATTHEROOM	 (1, "一手房带看"),
	REALPROSPECTING	 (2, "实勘"),
	TALKABOUTCOMMISSION	 (3, "谈委托"),
	RECEPTION	 (4, "接待"),
	XIPAN	 (5, "洗盘"),
	SHOPINTERVIEW	 (6, "店面面谈"),
	DISTRIBUTELEAFLETS	 (7, "派单"),
	INVESTIGATION	 (8, "调查"),
	OTHER	 (9, "其他"),
	THESTOREMANAGERACCOMPANIESTHEWORK	 (10, "店经理陪同作业"),
	TAKEALOOKATTHERESERVATION       (11, "带看前预约"),
	VISIT       (12, "拜访");
	
	private EnumFollowHouseType(int id, String desc) {
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
