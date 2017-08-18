/*
 * @(#)HttpHelper.java 创建于 2016-05-03 15:40:58
 *
 * 版权：版权所有 Bsoft 保留所有权力。
 */
package org.takeback.thirdparty.support;

import net.sf.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * @author <a href="mailto:chinnsii@163.com">zhengshi</a>
 */
public class HttpHelper {

    /**
     *
     * @param url
     * @return
     * @throws IOException
     */
    public static JSONObject getJson(String url) throws IOException {
        String result = "";
        HttpURLConnection conn = null;
        try {
            URL realUrl = new URL(url);
            conn = (HttpURLConnection) realUrl.openConnection();
            conn.setRequestProperty("Content-Type", "application/json");
            conn.setReadTimeout(5000);
            conn.setConnectTimeout(5000);
            conn.setRequestMethod("GET");
            BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream(), "UTF-8"));
            String line;
            while ((line = in.readLine()) != null) {
                result += line;
            }
        } finally {
            if (conn != null) {
                conn.disconnect();
            }
        }
        return JSONObject.fromObject(result);
    }
}
