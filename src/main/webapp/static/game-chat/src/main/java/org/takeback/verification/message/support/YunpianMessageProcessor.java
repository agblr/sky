package org.takeback.verification.message.support;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.httpclient.HttpClientUtils;

import java.util.LinkedHashMap;
import java.util.Map;

public class YunpianMessageProcessor extends DefaultMessageProcessor {

    private static final Logger log = LoggerFactory.getLogger(YunpianMessageProcessor.class);
    private String apiKey;

    // 查账户信息的http地址
    private String URI_GET_USER_INFO = "http://yunpian.com/v1/user/get.json";

    //通用发送接口的http地址
    private String URI_SEND_SMS = "http://yunpian.com/v1/sms/send.json";

    // 模板发送接口的http地址
    private String URI_TPL_SEND_SMS = "http://yunpian.com/v1/sms/tpl_send.json";

    // 发送语音验证码接口的http地址
    private String URI_SEND_VOICE = "http://yunpian.com/v1/voice/send.json";

    //编码格式。发送编码格式统一用UTF-8
    private String ENCODING = "UTF-8";

    @Override
    public String sendSMS(String phoneNumber, String content) {
        LinkedHashMap<String, String> ps = new LinkedHashMap<>();
        ps.put("apikey", apiKey);
        ps.put("text", content);
        ps.put("mobile", phoneNumber);
        String result = HttpClientUtils.post(URI_SEND_SMS, ps);
        Map<String,Object> map = ConversionUtils.convert(result, Map.class);
        if(0 != (int)map.get("code")){
            log.error("send content {} to {} failed, responseCode is {}",content,phoneNumber,result);
        }
        return content;
    }

    public String getApiKey() {
        return apiKey;
    }

    public void setApiKey(String apiKey) {
        this.apiKey = apiKey;
    }

    public String getURI_GET_USER_INFO() {
        return URI_GET_USER_INFO;
    }

    public void setURI_GET_USER_INFO(String URI_GET_USER_INFO) {
        this.URI_GET_USER_INFO = URI_GET_USER_INFO;
    }

    public String getURI_SEND_SMS() {
        return URI_SEND_SMS;
    }

    public void setURI_SEND_SMS(String URI_SEND_SMS) {
        this.URI_SEND_SMS = URI_SEND_SMS;
    }

    public String getURI_TPL_SEND_SMS() {
        return URI_TPL_SEND_SMS;
    }

    public void setURI_TPL_SEND_SMS(String URI_TPL_SEND_SMS) {
        this.URI_TPL_SEND_SMS = URI_TPL_SEND_SMS;
    }

    public String getURI_SEND_VOICE() {
        return URI_SEND_VOICE;
    }

    public void setURI_SEND_VOICE(String URI_SEND_VOICE) {
        this.URI_SEND_VOICE = URI_SEND_VOICE;
    }

    public String getENCODING() {
        return ENCODING;
    }

    public void setENCODING(String ENCODING) {
        this.ENCODING = ENCODING;
    }
}
