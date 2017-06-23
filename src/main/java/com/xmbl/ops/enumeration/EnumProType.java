package com.xmbl.ops.enumeration;

public enum EnumProType {
	
	PRO_MONITOR	    (0, "显示器"),
	PRO_HOST 		(1, "主机"),
	PRO_LAPTOP 		(2, "笔记本"),
	PRO_ONEMACHINE  (3, "一体机"),
	PRO_SERVICE		(4, "服务器"),
	PRO_COMPARTS    (5, "电脑配件"),
	PRO_INTERNET    (6, "网络设备"),
	PRO_PRINT 		(7, "打印机"),
	PRO_PROJECTOR   (8, "投影仪"),
	PRO_MOBILE      (9, "手机"),
	PRO_HC 		    (10, "耗材"),
	PRO_CONDITIONER (11, "空调"),
	PRO_AND 		(12, "其他");

	private EnumProType(int id, String desc) {
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
