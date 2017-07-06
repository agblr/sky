package com.xmbl.ops.enumeration;
//交易类型（1出租,2出售，3求租,4求售，0租售）
public enum EnumTradeType {
	SALEANDRENTAL   (0, "租售"),
	LEASE		    (1, "出租"),
	SELL	        (2, "出售"),
	NEED		    (3, "求租"),
	BUY		        (4, "求售");

	private EnumTradeType(int id, String desc) {
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
