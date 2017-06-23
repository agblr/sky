package com.xmbl.ops.test;

 
import java.io.IOException;
 
 import org.jsoup.Jsoup;
 import org.jsoup.nodes.Document;
 import org.jsoup.select.Elements;
 
 public class TestJsoup {
     
     public  Document getDocument (String url){
         try {
             return Jsoup.connect(url).get();
         } catch (IOException e) {
             e.printStackTrace();
         }
         return null;
     }
 
     public static void main(String[] args) {
         TestJsoup t = new TestJsoup();
         Document doc = t.getDocument("http://www.weather.com.cn/html/weather/101280101.shtml");
         // 获取目标HTML代码
//         Elements elements1 = doc.select("[sky skyid lv3 on]");
//         System.out.println(doc.getElementById("7d").getAllElements());
//         Elements elements1 = doc.select("[t clearfix]");
         Elements elements1 = doc.getElementById("7d").getAllElements();
         
//         Elements elements123 = doc.getElementsByTag("sky skyid lv3 on");
//         System.out.println(elements123.get(0).toString());
//         Elements elements2 = elements1.select("li [class=\"sky skyid lv3 on\"]");
         Elements elements3 = doc.getElementById("hidden_title").getAllElements();
         System.out.println(doc.getElementById("hidden_title").getAllElements());
         Elements elements2 = elements1.select("li [class=\"sky skyid lv3 on\"]");
         System.out.println("1111---"+elements2.toString());
         
         System.out.println(doc.getElementById("hidden_title").val());
//         System.out.println(doc.getElementById("7d").select("span"));
         System.out.println(doc.getElementById("7d").select("li").select("[sky skyid lv3 on]"));
         System.out.println(doc.getElementById("7d").select("h1"));
         System.out.println(doc.getElementById("7d").select("p"));
         
         System.out.println(doc.getElementById("7d").select("ul").select("li").first().attr("sky skyid lv3 on"));
         System.out.println(doc.getElementById("7d").select("ul").select("li").get(0));
         System.out.println(doc.getElementById("7d").select("ul").select("li").get(0).select("h1"));
//         // 今天
//         Elements elements2 = elements1.select("h1");
//         String today = elements2.get(0).text();
//         System.out.println(today);
//         // 几号
//         Elements elements3 = elements1.select("h2");
//         String number = elements3.get(0).text();
//         System.out.println(number);
//         // 是否有雨
//         Elements elements4 = elements1.select("[class=wea]");
//         String rain = elements4.get(0).text();
//         System.out.println(rain);
//         // 高的温度
//         Elements elements5 = elements1.select("span");
//         String highTemperature = elements5.get(0).text()+"°C";
//         System.out.println(highTemperature);
//         // 低的温度
//         String lowTemperature = elements5.get(1).text()+"°C";
//         System.out.println(lowTemperature);         // 风力
//         Elements elements6 = elements1.select("i");
//         String wind = elements6.get(2).text();
//         System.out.println(wind);
     }
 }