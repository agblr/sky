package com.xmbl.ops.test;

import java.io.File;
import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.attribute.BasicFileAttributes;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import com.alibaba.fastjson.JSONObject;

public class fileTest {
	 public static String ROOT = "E://data";
	public static String [] getFileName(String path)
	    {
	        File file = new File(path);
	        String [] fileName = file.list();
	        return fileName;
	    }
	    public static void getAllFileName(String path,ArrayList<String> fileName)
	    {
	        File file = new File(path);
	        File [] files = file.listFiles();
	        String [] names = file.list();
	        if(names != null)
	        fileName.addAll(Arrays.asList(names));
	        for(File a:files)
	        {
	            if(a.isDirectory())
	            {
	                getAllFileName(a.getAbsolutePath(),fileName);
	            }
	        }
	    }
	    public static void main(String[] args)
	    {
	    	JSONObject json = new JSONObject();
	    	
	    	String path = json.getString("d://data/");
	    	// 返回的结果集
            List<JSONObject> fileItems = new ArrayList<>();
            System.out.println("ROOT------------------------"+ROOT); 
            try {
            	DirectoryStream<Path> directoryStream = Files.newDirectoryStream(Paths.get(ROOT));
            	System.out.println("directoryStream------------------------"+directoryStream.iterator().next().getNameCount());
            } catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
//            try (DirectoryStream<Path> directoryStream = Files.newDirectoryStream(Paths.get(ROOT, path))) {
            try (DirectoryStream<Path> directoryStream = Files.newDirectoryStream(Paths.get(ROOT))) { 
                String DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";
                SimpleDateFormat dt = new SimpleDateFormat(DATE_FORMAT);
                for (Path pathObj : directoryStream) {
                    // 获取文件基本属性
                    BasicFileAttributes attrs = Files.readAttributes(pathObj, BasicFileAttributes.class);

                    // 封装返回JSON数据
                    JSONObject fileItem = new JSONObject();
                    System.out.println("pathObj------------------------"+pathObj.toString());
                    fileItem = getFile(pathObj.toString());
                    fileItem.put("name", pathObj.getFileName().toString());
//                    fileItem.put("rights", org.shaofan.utils.FileUtils.getPermissions(pathObj)); // 文件权限
                    fileItem.put("date", dt.format(new Date(attrs.lastModifiedTime().toMillis())));
                    fileItem.put("size", attrs.size());
                    fileItem.put("type", attrs.isDirectory() ? "dir" : "file");
                    fileItems.add(fileItem);
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
            
            JSONObject jsonObject = new JSONObject();
//            fileItems = getFile(path);
            System.out.println("----"+fileItems);
            jsonObject.put("result", fileItems);
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
	        		 System.out.println("^^^^^" + array[i].getName());  
	        		 System.out.println("#####" + array[i]);   
	        		 System.out.println("*****" + array[i].getPath()); 
	        		 System.out.println("更新时间***" + array[i].lastModified());
	        		 System.out.println("大小****" + array[i].length());
	        		 System.out.println("是否是目录****" + array[i].isDirectory());
	        		    if(file.exists()){
	        		    	if (file.canWrite() ) {   
	        		    	System.out.println("不只读");
	        		    	} else {  
	        		    	System.out.println("只读");
	        		    	}	
	        		    	    } else{
	        		    	System.out.println("不存在");
	        		    	    }
	                  fileItem.put("name", array[i].getName().toString());
//	                  fileItem.put("rights", array[i].canWrite()); // 文件权限
	                  fileItem.put("date", dt.format(new Date(array[i].lastModified())));
	                  fileItem.put("size", array[i].length());
//	                  fileItem.put("type", array[i].isDirectory() ? "dir" : "file");
//	                  fileItems.add(fileItem);
	        	 }else if(array[i].isDirectory()){   
	        		 getFile(array[i].getPath());
	        	 }
	        }
	        return fileItem;
	    }
}
