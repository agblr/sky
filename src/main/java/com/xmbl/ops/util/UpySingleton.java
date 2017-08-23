package com.xmbl.ops.util;

public class UpySingleton {
	private final static UpYun upy = new UpYun(CommonXMLStr.BUCKET_NAME,
			CommonXMLStr.USER_NAME, CommonXMLStr.USER_PWD);

	public static UpYun getUpyun() {
		if (upy == null) {
			return new UpYun(CommonXMLStr.BUCKET_NAME, CommonXMLStr.USER_NAME,
					CommonXMLStr.USER_PWD);
		}
		return upy;

	}
}
