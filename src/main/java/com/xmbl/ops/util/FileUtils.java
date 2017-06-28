package com.xmbl.ops.util;

import org.apache.commons.lang3.StringUtils;

import com.alibaba.fastjson.JSONObject;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.attribute.PosixFileAttributeView;
import java.nio.file.attribute.PosixFileAttributes;
import java.nio.file.attribute.PosixFilePermission;
import java.nio.file.attribute.PosixFilePermissions;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;


public class FileUtils {

	public static List<JSONObject> getFile(String path){   
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
                  fileItem.put("name", array[i].toString());
                  fileItem.put("rights", array[i].canWrite()); // 文件权限
                  fileItem.put("date", dt.format(new Date(array[i].lastModified())));
                  fileItem.put("size", array[i].length());
                  fileItem.put("type", array[i].isDirectory() ? "dir" : "file");
                  fileItems.add(fileItem);
        	 }else if(array[i].isDirectory()){   
        		 getFile(array[i].getPath());
        	 }
        }
        return fileItems;
    }
	
    public static String getExtension(String fileName) {
        if (StringUtils.INDEX_NOT_FOUND == StringUtils.indexOf(fileName, "."))
            return StringUtils.EMPTY;
        String ext = StringUtils.substring(fileName,
                StringUtils.lastIndexOf(fileName, "."));
        return StringUtils.trimToEmpty(ext);
    }

    public static String getFileName(String header) {
        String[] tempArr1 = header.split(";");
        String[] tempArr2 = tempArr1[2].split("=");
        //获取文件名，兼容各种浏览器的写法
        return tempArr2[1].substring(tempArr2[1].lastIndexOf("\\") + 1).replaceAll("\"", "");

    }

    public static String getPermissions(Path path) throws IOException {
        PosixFileAttributeView fileAttributeView = Files.getFileAttributeView(path, PosixFileAttributeView.class);
        PosixFileAttributes readAttributes = fileAttributeView.readAttributes();
        Set<PosixFilePermission> permissions = readAttributes.permissions();
        return PosixFilePermissions.toString(permissions);
    }

    public static String setPermissions(File file, String permsCode, boolean recursive) throws IOException {
        PosixFileAttributeView fileAttributeView = Files.getFileAttributeView(file.toPath(), PosixFileAttributeView.class);
        fileAttributeView.setPermissions(PosixFilePermissions.fromString(permsCode));
        if (file.isDirectory() && recursive && file.listFiles() != null) {
            for (File f : file.listFiles()) {
                setPermissions(f, permsCode, true);
            }
        }
        return permsCode;
    }

    public static boolean write(InputStream inputStream, File f) {
        boolean ret = false;

        try (OutputStream outputStream = new FileOutputStream(f)) {

            int read;
            byte[] bytes = new byte[1024];

            while ((read = inputStream.read(bytes)) != -1) {
                outputStream.write(bytes, 0, read);
            }
            ret = true;

        } catch (IOException e) {
            e.printStackTrace();

        } finally {
            if (inputStream != null) {
                try {
                    inputStream.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return ret;
    }

    public static void mkFolder(String fileName) {
        File f = new File(fileName);
        if (!f.exists()) {
            f.mkdir();
        }
    }

    public static File mkFile(String fileName) {
        File f = new File(fileName);
        try {
            f.createNewFile();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return f;
    }

    public static void fileProber(File dirFile) {

        File parentFile = dirFile.getParentFile();
        if (!parentFile.exists()) {

            // 递归寻找上级目录
            fileProber(parentFile);

            parentFile.mkdir();
        }

    }
}

