package com.xmbl.ops.test;

import java.io.BufferedReader;  
import java.io.IOException;  
import java.io.InputStream;  
import java.io.InputStreamReader;  
import java.net.URL;  
import java.net.URLConnection;  
  
import org.apache.commons.httpclient.HttpStatus;  
import org.apache.http.HttpEntity;  
import org.apache.http.HttpResponse;  
import org.apache.http.client.HttpClient;  
import org.apache.http.client.methods.HttpGet;  
import org.apache.http.impl.client.DefaultHttpClient;  
import org.apache.http.util.EntityUtils;  
public class httpsUrl {
	 public static void main(String[] args) {  
//	        String url ="https://crs.edqm.eu/db/4DCGI/search?vSelectName=2&vContains=1&vtUserName=a&OK=Search&vTypeCRS=";  
		 String url ="https://bj.fang.anjuke.com/loupan/haidian/?from=SearchBar";  
	     String url1= "https://bj.fang.anjuke.com/loupan/haidian/";   
	        String html = getPageHtml(url1);  
	        System.out.println(html);  
	    }  
	  
	      
	    /** 
	     * 获取网页html 
	     */  
	    public static String getPageHtml(String currentUrl) {  
	        HttpClient httpClient=new DefaultHttpClient();  
	        httpClient = HttpsClient.getNewHttpsClient(httpClient);  
	        String html = "";  
	        HttpGet request = new HttpGet(currentUrl);    
	        HttpResponse response = null;  
	         try {  
	             response = httpClient.execute(request);  
	             if(response.getStatusLine().getStatusCode() == HttpStatus.SC_OK){  
	                HttpEntity mEntity = response.getEntity();  
	                html = EntityUtils.toString(mEntity);  
	             }  
	         }catch(IOException e){  
	             e.printStackTrace();  
	         }  
	         return html.toString();  
	     }  
}
