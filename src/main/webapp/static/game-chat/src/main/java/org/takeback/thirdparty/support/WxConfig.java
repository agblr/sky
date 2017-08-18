/*
 * @(#)WxConfig.java 创建于 2016-05-03 15:13:19
 *
 * 版权：版权所有 Bsoft 保留所有权力。
 */
package org.takeback.thirdparty.support;

/**
 * @author <a href="mailto:chinnsii@163.com">zhengshi</a>
 */
public class WxConfig {

    private String wxJSAPIAppId;
    private String wxJSAPISecret;
    private String gameServerBaseUrl;

    public String getWxJSAPIAppId() {
        return wxJSAPIAppId;
    }

    public void setWxJSAPIAppId(String wxJSAPIAppId) {
        this.wxJSAPIAppId = wxJSAPIAppId;
    }

    public String getWxJSAPISecret() {
        return wxJSAPISecret;
    }

    public void setWxJSAPISecret(String wxJSAPISecret) {
        this.wxJSAPISecret = wxJSAPISecret;
    }

    public String getGameServerBaseUrl() {
        return gameServerBaseUrl;
    }

    public void setGameServerBaseUrl(String gameServerBaseUrl) {
        gameServerBaseUrl = gameServerBaseUrl.endsWith("/") ? gameServerBaseUrl : gameServerBaseUrl + "/";
        this.gameServerBaseUrl = gameServerBaseUrl;
    }
}
