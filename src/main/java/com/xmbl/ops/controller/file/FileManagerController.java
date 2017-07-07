package com.xmbl.ops.controller.file;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.BasicFileAttributes;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;
import com.xmbl.ops.constant.SessionConstant;
import com.xmbl.ops.controller.organization.AbstractController;
import com.xmbl.ops.dto.ResponseResult;
import com.xmbl.ops.enumeration.EnumResCode;
import com.xmbl.ops.util.FileUtils;
import com.xmbl.ops.util.Md5PasswordEncoder;

@Controller
@RequestMapping(value = "/static")
public class FileManagerController extends AbstractController {
	 /*
     *  文件管理根目录,此处为了方便采用Hard Code
     */
//	 public static String ROOT = "E:/data";
	 public static String ROOT = "data";
		@RequestMapping(value = "/")
		public String officeBuildingSearch(HttpServletRequest request, ModelMap model, Long officeBuildingId, String address, String location, String poitype, String realaddress, String areaid, Integer status, Long page) throws Exception {
			page = page == null || page < 0 ? 0 : page;
			model.addAttribute("status", status);
			model.addAttribute("page", page);
			return "/index";
		}
		 /**
	     * 展示文件列表
	     */
	 
		//列表
		@RequestMapping("fileList")
		public @ResponseBody JSONObject list(HttpServletRequest request, ModelMap model, Integer id) {
			try {
			      BufferedReader br = new BufferedReader(new InputStreamReader(
		                    (ServletInputStream) request.getInputStream()));
		            String line = null;
		            StringBuffer sb = new StringBuffer();
		            while ((line = br.readLine()) != null) {
		                sb.append(line);
		            }
		        String json=sb.toString();    
		           
				JSONObject response = (JSONObject) JSONObject.parse(json);
				String path = "/data";
				if(StringUtils.isEmpty(json)) {
				}else {
					path = (String) response.get("path");
					System.out.println("path------------------------"+path); 
					if("/".endsWith(path)){
						path =  "/data";
					}else{
						 StringBuilder sb1 = new StringBuilder();
					     sb1.append(ROOT);
						 sb1.append(path);
						path =  sb1.toString();
					}
					
				}
				
		    	// 返回的结果集
	            List<JSONObject> fileItems = new ArrayList<>();
	            System.out.println("path------------------------"+path); 
	            // 需要显示的目录路径

//	            try (DirectoryStream<Path> directoryStream = Files.newDirectoryStream(Paths.get(ROOT, path))) {
	            try (DirectoryStream<Path> directoryStream = Files.newDirectoryStream(Paths.get(path))) { 
	                String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
	                SimpleDateFormat dt = new SimpleDateFormat(DATE_FORMAT);
	                for (Path pathObj : directoryStream) {
	                    // 获取文件基本属性
	                    BasicFileAttributes attrs = Files.readAttributes(pathObj, BasicFileAttributes.class);

	                    // 封装返回JSON数据
	                    JSONObject fileItem = new JSONObject();
	                    System.out.println("pathObj------------------------"+pathObj.toString());
	                    fileItem.put("name", pathObj.getFileName().toString());
//	                    fileItem.put("rights",FileUtils.getPermissions(pathObj)); // 文件权限
	                    fileItem.put("rights","drwxr-xr-x");
	                    fileItem.put("date", dt.format(new Date(attrs.lastModifiedTime().toMillis())));
	                    fileItem.put("size", attrs.size());
	                    fileItem.put("type", attrs.isDirectory() ? "dir" : "file");
	                    fileItems.add(fileItem);
	                }
	            } catch (IOException e) {
	                e.printStackTrace();
	            }
	            
	            JSONObject jsonObject = new JSONObject();
	            jsonObject.put("result", fileItems);
				return jsonObject;
			} catch (Exception e) {
				e.printStackTrace();
			}
			return null;
		}
		
		
		 public static JSONObject getFile(String path){   
		    	JSONObject fileItem = new JSONObject();
		    	File file = new File(path);   
		    	List<JSONObject> fileItems = new ArrayList<>();
		        File[] array = file.listFiles();   
		        String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
		        SimpleDateFormat dt = new SimpleDateFormat(DATE_FORMAT);
		        for(int i=0;i<array.length;i++){
		        	 if(array[i].isFile()){ 
//		        		 System.out.println("^^^^^" + array[i].getName());  
//		        		 System.out.println("#####" + array[i]);   
//		        		 System.out.println("*****" + array[i].getPath()); 
//		        		 System.out.println("更新时间***" + array[i].lastModified());
//		        		 System.out.println("大小****" + array[i].length());
//		        		 System.out.println("是否是目录****" + array[i].isDirectory());
		        		    if(file.exists()){
		        		    	if (file.canWrite() ) {   
//		        		    	System.out.println("不只读");
		        		    	} else {  
//		        		    	System.out.println("只读");
		        		    	}	
		        		    	    } else{
//		        		    	System.out.println("不存在");
		        		    	    }
		                  fileItem.put("name", array[i].getName().toString());
		                  fileItem.put("rights", array[i].canWrite()); // 文件权限
		                  fileItem.put("date", dt.format(new Date(array[i].lastModified())));
		                  fileItem.put("size", array[i].length());
		                  fileItem.put("type", array[i].isDirectory() ? "dir" : "file");
		                  fileItems.add(fileItem);
		        	 }else if(array[i].isDirectory()){   
		        		 getFile(array[i].getPath());
		        	 }
		        }
		        return fileItem;
		    }
		 

		    private JSONObject error(String msg) {

		        // { "result": { "success": false, "error": "msg" } }
		        JSONObject result = new JSONObject();
		        result.put("success", false);
		        result.put("error", msg);

		        JSONObject jsonObject = new JSONObject();
		        jsonObject.put("result", result);
		        return jsonObject;

		    }

		    private JSONObject success() {
		        // { "result": { "success": true, "error": null } }
		        JSONObject result = new JSONObject();
		        result.put("success", true);
		        result.put("error", null);

		        JSONObject jsonObject = new JSONObject();
		        jsonObject.put("result", result);
		        return jsonObject;
		    }
}
