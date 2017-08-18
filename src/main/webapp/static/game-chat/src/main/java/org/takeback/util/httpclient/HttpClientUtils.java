package org.takeback.util.httpclient;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.takeback.util.exception.CodedBaseRuntimeException;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * http请求的工具类
 */
public class HttpClientUtils {
    private static final Logger log = LoggerFactory.getLogger(HttpClientUtils.class);
    private static HttpClientBuilder httpClientBuilder;
    private static CloseableHttpClient httpClient;
    public static String encode = "UTF-8";

    public HttpClientUtils(){

    }

    static {
        httpClientBuilder = HttpClientBuilder.create();
        httpClient = httpClientBuilder.build();
    }

    public static String get(String url){
        HttpGet method = new HttpGet(url);
        try {
            HttpResponse httpResponse = httpClient.execute(method);
            int code = httpResponse.getStatusLine().getStatusCode();
            if(200 == code){
                HttpEntity entity = httpResponse.getEntity();
                return EntityUtils.toString(entity);
            }else{
                throw new CodedBaseRuntimeException(code, "http response error code " + code);
            }
        } catch (IOException e) {
            throw new CodedBaseRuntimeException(500, "execute get method [" + url + "] failed");
        } finally {
            method.releaseConnection();
        }
    }

    /**
     *
     * @param url
     * @param params    if need order, use LinkedHashMap
     * @return
     */
    public static String post(String url, Map<String, String> params){
        HttpPost method = new HttpPost(url);
        method.setHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        if(params != null || params.size() > 0){
            List<NameValuePair> nvps = new ArrayList<>();
            Set<String> set = params.keySet();
            for (String k:set){
                nvps.add(new BasicNameValuePair(k,params.get(k)));
            }
            try {
                method.setEntity(new UrlEncodedFormEntity(nvps, encode));
            } catch (UnsupportedEncodingException e) {
                throw new CodedBaseRuntimeException(505, "http parameters encode failed");
            }
        }
        try {
            HttpResponse httpResponse = httpClient.execute(method);
            int code = httpResponse.getStatusLine().getStatusCode();
            if(200 == code){
                HttpEntity entity = httpResponse.getEntity();
                return EntityUtils.toString(entity);
            }else{
                throw new CodedBaseRuntimeException(code, "http response error code " + code);
            }
        } catch (IOException e) {
            throw new CodedBaseRuntimeException(500, "execute post method [" + url + "] failed");
        } finally {
            method.releaseConnection();
        }
    }

    public static void release() {
        try {
            httpClient.close();
        } catch (IOException e) {
            log.error("httpClient close failed.", e);
        }
    }
}