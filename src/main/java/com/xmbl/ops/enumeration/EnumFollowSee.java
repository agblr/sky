package com.xmbl.ops.enumeration;
//是否已带看 0 未带看 1 已带看
public enum EnumFollowSee {
	 NO (0,"未带看"),
	 YES (1,"已带看");
	
	private EnumFollowSee(int id, String desc){
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