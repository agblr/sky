package com.xmbl.ops.enumeration;
//----是否有跟进isfollow  --0,待跟进 1，跟进中，2跟进完毕
public enum EnumIsFollow {
	 WAIT	    (0, "待跟进"),
	 CONTINUE	 (1, "跟进中"),
	 OVER       (2, "跟进完毕");
	
	private EnumIsFollow(int id, String desc) {
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
