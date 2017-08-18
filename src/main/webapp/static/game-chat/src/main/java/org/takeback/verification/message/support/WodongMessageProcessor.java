package org.takeback.verification.message.support;

import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.takeback.util.httpclient.HttpClientUtils;

import java.util.LinkedHashMap;

public class WodongMessageProcessor extends DefaultMessageProcessor {

    private static final Logger log = LoggerFactory.getLogger(WodongMessageProcessor.class);

    private String API_URL = "http://115.29.242.32:8888/sms.aspx";
    private String API_URL_GBK = "http://115.29.242.32:8888/smsGBK.aspx";

    private String userid;
    private String account;
    private String password;


    @Override
    public String sendSMS(String phoneNumber, String content) {
        LinkedHashMap<String, String> ps = new LinkedHashMap<>();
        ps.put("action", "send");
        ps.put("userid", userid);
        ps.put("account", account);
        ps.put("password", password);
        ps.put("mobile", phoneNumber);
        ps.put("content", content);
        String result = HttpClientUtils.post(API_URL, ps);
        System.out.println(result);
        try {
            Document doc = DocumentHelper.parseText(result);
            Element root = doc.getRootElement();
            if("Success".equals(root.elementText("returnstatus")) || "ok".equals(root.elementText("message"))){
                //发送成功
            }else{
                log.error("send content {} to {} failed, responseMsg is {}",content,phoneNumber,root.elementText("message"));
            }
        } catch (DocumentException e) {
            log.error("send content {} to {} failed, responseMsg is {}",content,phoneNumber,result);
        }
        return content;
    }

    public static void main(String[] args) {
//        WodongMessageProcessor sms = new WodongMessageProcessor();
//        sms.setUserid("505");
//        sms.setAccount("SSHLW");
//        sms.setPassword("198436");
//        sms.sendSMS("15057120535", "【顺意贷】短信测试");
//        HttpClientUtils.release();
    }

    public String getAPI_URL() {
        return API_URL;
    }

    public void setAPI_URL(String API_URL) {
        this.API_URL = API_URL;
    }

    public String getAPI_URL_GBK() {
        return API_URL_GBK;
    }

    public void setAPI_URL_GBK(String API_URL_GBK) {
        this.API_URL_GBK = API_URL_GBK;
    }

    public String getUserid() {
        return userid;
    }

    public void setUserid(String userid) {
        this.userid = userid;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
