package org.takeback.verification.message.support;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.takeback.util.MD5StringUtil;
import org.takeback.util.httpclient.HttpClientUtils;

import java.util.LinkedHashMap;

public class MomingMessageProcessor extends DefaultMessageProcessor {

    private static final Logger log = LoggerFactory.getLogger(MomingMessageProcessor.class);

    private String user;
    private String password;
    private String api = "http://api.momingsms.com/";
    private String send_action = "send";
    private String balance_action = "getBalance";

    @Override
    public String sendSMS(String phoneNumber, String content) {
        LinkedHashMap<String, String> ps = new LinkedHashMap<>();
        ps.put("action", send_action);
        ps.put("username", user);
        ps.put("password", MD5StringUtil.MD5Encode(password));
        ps.put("phone", phoneNumber);
        ps.put("content", content);
        ps.put("encode", "utf8");
        String result = HttpClientUtils.post(api, ps);
        if(!"100".equals(result)){
            log.error("send content {} to {} failed, responseCode is {}",content,phoneNumber,result);
        }
        return content;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getApi() {
        return api;
    }

    public void setApi(String api) {
        this.api = api;
    }
}
