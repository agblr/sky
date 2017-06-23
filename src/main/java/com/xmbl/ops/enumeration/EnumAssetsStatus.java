package com.xmbl.ops.enumeration;

public enum EnumAssetsStatus {
	 UUSE	    (0, "闲置"),
	 USE	    (1, "已使用"),
	 SCRAPPED   (2, "报废");
	
	private EnumAssetsStatus(int id, String desc) {
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
