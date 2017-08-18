/*
 * @(#)PayOrderFactory.java 创建于 2016-04-17 13:37:11
 *
 * 版权：版权所有 CHINNSII 保留所有权力。
 */
package org.takeback.pay;

import cn.beecloud.BCEumeration;
import cn.beecloud.BCPay;
import cn.beecloud.BeeCloud;
import cn.beecloud.bean.BCException;
import cn.beecloud.bean.BCOrder;
import net.sf.json.JSONObject;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.takeback.thirdparty.support.HttpHelper;
import org.takeback.thirdparty.support.WxConfig;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

/**
 * @author <a href="mailto:chinnsii@163.com">zhengshi</a>
 */
public class PayOrderFactory implements InitializingBean {

    public static final Logger LOGGER = LoggerFactory.getLogger(PayOrderFactory.class);

    private static PayOrderFactory instance;
    private byte vcode = 111;
    private String appId;
    private String testSecret;
    private String appSecret;
    private String masterSecret;
    private WxConfig wxConfig;

    private PayOrderFactory() throws IllegalAccessException {
        if (vcode != 111) {
            throw new IllegalAccessException("Illegal access to this constructor.");
        }
        instance = this;
        vcode++;
    }

    public static PayOrderFactory getInstance() {
        return instance;
    }

    /**
     * @param payChannel
     * @return
     * @throws PaymentException
     */
    public BCOrder getPayOrder(String payChannel, Integer totalFee, String title, String identityId) throws PaymentException {
        BCEumeration.PAY_CHANNEL channel;
        try {
            channel = BCEumeration.PAY_CHANNEL.valueOf(payChannel);
        } catch (Exception e) {
            throw new PaymentException("Unsupported pay type: " + payChannel, e);
        }
        String billNo = PayOrderNoGenerator.generator();
        BCOrder bcOrder = new BCOrder(channel, totalFee, billNo, title);
        bcOrder.setBillTimeout(360);
//        bcOrder.setOptional(optional);
//        String returnUrl = "pay/return/";
//        bcOrder.setReturnUrl(returnUrl);
        if (StringUtils.isNotEmpty(identityId)) {
            bcOrder.setIdentityId(identityId);
        }
        try {
            bcOrder = BCPay.startBCPay(bcOrder);
            return bcOrder;
        } catch (BCException e) {
            throw new PaymentException("Failed to get pay order.", e);
        }
    }

    /**
     *
     * @param totalFee
     * @param title
     * @param code
     * @return
     * @throws PaymentException
     */
    public BCOrder getWxJSPayOrder(Integer totalFee, String title, String code) throws PaymentException {
        BCEumeration.PAY_CHANNEL channel = BCEumeration.PAY_CHANNEL.WX_JSAPI;
        String billNo = PayOrderNoGenerator.generator();
        BCOrder bcOrder = new BCOrder(channel, totalFee, billNo, title);
        bcOrder.setBillTimeout(360);
//        bcOrder.setOptional(optional);
//        String returnUrl = "pay/return/";
//        bcOrder.setReturnUrl(returnUrl);
        bcOrder.setOpenId(getWxOpenId(code));
        try {
            bcOrder = BCPay.startBCPay(bcOrder);
            return bcOrder;
        } catch (BCException e) {
            throw new PaymentException("Failed to get pay order.", e);
        }
    }

    /**
     * @param title
     * @param totalFee
     */
    public String getWxAuthorizeUrl(String title, double totalFee) {
        try {
            String encodedWSJSAPIRedirectUrl = URLEncoder.encode(wxConfig.getGameServerBaseUrl() + "pay/apply/wx?title=" + title + "&totalFee=" + totalFee, "UTF-8");
            return "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + wxConfig.getWxJSAPIAppId() + "&redirect_uri=" + encodedWSJSAPIRedirectUrl + "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     *
     * @param code
     * @return
     * @throws Exception
     */
    public String getWxOpenId(String code) throws PaymentException {
        String url = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + wxConfig.getWxJSAPIAppId() + "&secret=" + wxConfig.getWxJSAPISecret() + "&code=" + code + "&grant_type=authorization_code";
        JSONObject resultObject;
        try {
            resultObject = HttpHelper.getJson(url);
        } catch (IOException e) {
            throw new PaymentException("Failed to get open id.", e);
        }
        if (resultObject.containsKey("errcode")) {
            throw new PaymentException("Failed to get open id, caused by: " + resultObject.get("errmsg"));
        } else {
            return resultObject.get("openid").toString();
        }
    }

    @Override
    public void afterPropertiesSet() throws Exception {
        BeeCloud.registerApp(appId, testSecret, appSecret, masterSecret);
    }

    public String getAppId() {
        return appId;
    }

    public void setAppId(String appId) {
        this.appId = appId;
    }

    public String getTestSecret() {
        return testSecret;
    }

    public void setTestSecret(String testSecret) {
        this.testSecret = testSecret;
    }

    public String getAppSecret() {
        return appSecret;
    }

    public void setAppSecret(String appSecret) {
        this.appSecret = appSecret;
    }

    public String getMasterSecret() {
        return masterSecret;
    }

    public void setMasterSecret(String masterSecret) {
        this.masterSecret = masterSecret;
    }

    public WxConfig getWxConfig() {
        return wxConfig;
    }

    public void setWxConfig(WxConfig wxConfig) {
        this.wxConfig = wxConfig;
    }
}
