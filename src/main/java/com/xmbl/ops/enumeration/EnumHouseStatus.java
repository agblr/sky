package com.xmbl.ops.enumeration;
//房源租售状态---（状态   - 0有效、1暂缓、2他租、3我租 4，失效）
public enum EnumHouseStatus {
	EFFECTIVE	    (0, "有效"),
	SUSPENSION	 (1, "暂缓"),
	HERENT       (2, "他租"),
	IRENT       (2, "我租"),
	INVALID       (2, "失效");
	
	private EnumHouseStatus(int id, String desc) {
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
