package org.takeback.verification.message.support;

import com.google.common.collect.ImmutableMap;
import org.takeback.verification.image.VerifyCodeUtils;
import org.takeback.verification.message.MessageProcessor;
import org.takeback.verification.message.SmsTemplates;

import java.util.Map;

public class DefaultMessageProcessor implements MessageProcessor {

	protected int defaultCodeLength = 4;
	protected static final String VERIFY_CODES = "1234567890";

	protected String generateCode(){
		return VerifyCodeUtils.generateVerifyCode(defaultCodeLength, VERIFY_CODES);
	}

	@Override
	public String sendCode(String phoneNumber) {
		return sendCode(phoneNumber, "0");
	}

	@Override
	public String sendCode(String phoneNumber, String tpl) {
		String code = generateCode();
		sendSMS(phoneNumber, tpl, ImmutableMap.of("code", code));
		return code;
	}

	@Override
	public String sendSMS(String phoneNumber, String tpl, Map<String, String> params) {
		String content = SmsTemplates.getTemplate(tpl, params);
		if(content == null){
			throw new IllegalArgumentException("tpl " + tpl + " is not exists");
		}
		return sendSMS(phoneNumber, content);
	}

	@Override
	public String sendSMS(String phoneNumber, String content) {
		return content;
	}

	@Override
	public void setDefaultCodeLength(int length) {
		defaultCodeLength = length;
	}
}
