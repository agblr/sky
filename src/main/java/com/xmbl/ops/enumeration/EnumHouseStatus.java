package com.xmbl.ops.enumeration;
//房源租售状态---（状态   - 0有效、1暂缓、2他租、3我租 4，失效） 状态   - 0有效、1暂缓、2他租、3我租,4未知，5撤单）
public enum EnumHouseStatus {
	//EFFECTIVE	    (0, "有效"),
	UNKOEL       (8, "未知"),
	SUSPENSION	 (1, "暂缓"),
	HERENT       (2, "他租"),
	IRENT       (3, "我租"),
	//INVALID      (4, "失效"),
	BACK         (5, "撤单"),
	SIRENT       (6, "我售"),
	STIRENT       (7, "他售");
	
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
