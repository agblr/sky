package org.takeback.verification.message;

import java.util.Map;

public interface MessageProcessor{

	/**
	 * 以默认模版0发送验证码
	 * @param phoneNumber
	 * @return
	 */
	String sendCode(String phoneNumber);

	/**
	 * 以模版0-3发送验证码
	 * @param phoneNumber
	 * @param tpl	0-3之间
	 * @return
	 */
	String sendCode(String phoneNumber, String tpl);

	/**
	 * 以模版发送文字消息
	 * @param phoneNumber
	 * @param tpl
	 * @param params	模版中需要替换的值
	 * @return
	 */
	String sendSMS(String phoneNumber, String tpl, Map<String, String> params);

	/**
	 * 直接发送内容
	 * @param phoneNumber
	 * @param content
	 * @return
	 */
	String sendSMS(String phoneNumber, String content);

	void setDefaultCodeLength(int length);

}
