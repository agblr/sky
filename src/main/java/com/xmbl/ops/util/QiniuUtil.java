package com.xmbl.ops.util;



import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.IOException;

import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.util.Auth;
import com.qiniu.util.StringMap;
import com.qiniu.util.StringUtils;
import com.qiniu.util.UrlSafeBase64;

public class QiniuUtil {
	

	  //设置好账号的ACCESS_KEY和SECRET_KEY  
    String ACCESS_KEY = "N_wBqGAxrvSw1cYPGOjAqdB9wQjsCQKpJSJkjZT0"; //这两个登录七牛 账号里面可以找到  
    String SECRET_KEY = "vEPQ27FFI1ziCzgW1lSNHYI6oSLqzr8fNlJS1ggu";  
  //构造一个带指定Zone对象的配置类
    Configuration cfg = new Configuration(Zone.zone0());
    //要上传的空间  
    String bucketname = "bbq8848"; //填写新建的那个存储空间对象的名称
    //上传到七牛后保存的文件名  
    String key = "sky.png";    
    //上传文件的路径  
    String FilePath = "f:\\sky.png";  //本地要上传文件路径  

    //密钥配置  
    Auth auth = Auth.create(ACCESS_KEY, SECRET_KEY);  
    //创建上传对象  
    UploadManager uploadManager = new UploadManager(cfg);  

    //简单上传，使用默认策略，只需要设置上传的空间名就可以了  
    public String getUpToken(){  
        return auth.uploadToken(bucketname);  
    }  
    //普通上传  
    public void upload() throws IOException{  
      try {  
        //调用put方法上传  
        Response res = uploadManager.put(FilePath, key, getUpToken());  
        //打印返回的信息  
System.out.println(res.isOK());

System.out.println(res.bodyString());   
        } catch (QiniuException e) {  
            Response r = e.response;  
            // 请求失败时打印的异常的信息  
            System.out.println(r.toString());  
            try {  
                //响应的文本信息  
              System.out.println(r.bodyString());  
            } catch (QiniuException e1) {  
                //ignore  
            }  
        }         
    }  
    public static void main(String args[]) throws IOException{    
      new QiniuUtil().upload();  
    }  
    
    public static void up(){
        String accessKey = "access key";
        String secretKey = "secret key";
        String bucket = "bucket name";
        Auth auth = Auth.create(accessKey, secretKey);
        StringMap putPolicy = new StringMap();
        //数据处理指令，支持多个指令
        String saveMp4Entry = String.format("%s:avthumb_test_target.mp4", bucket);
        String saveJpgEntry = String.format("%s:vframe_test_target.jpg", bucket);
        String avthumbMp4Fop = String.format("avthumb/mp4|saveas/%s", UrlSafeBase64.encodeToString(saveMp4Entry));
        String vframeJpgFop = String.format("vframe/jpg/offset/1|saveas/%s", UrlSafeBase64.encodeToString(saveJpgEntry));
        //将多个数据处理指令拼接起来
        String persistentOpfs = StringUtils.join(new String[]{
                avthumbMp4Fop, vframeJpgFop
        }, ";");
        putPolicy.put("persistentOps", persistentOpfs);
        //数据处理队列名称，必填
        putPolicy.put("persistentPipeline", "mps-pipe1");
        //数据处理完成结果通知地址
        putPolicy.put("persistentNotifyUrl", "http://api.example.com/qiniu/pfop/notify");
        long expireSeconds = 3600;
        String upToken = auth.uploadToken(bucket, null, expireSeconds, putPolicy);
        System.out.println(upToken);
    }
    

    
    
    
    
//    private String bucketName;
//    private String domain;
//
//    public void setDomain(String domain) {
//
//        this.domain = domain;
//    }
//
//    public void setBucketName(String bucketName) {
//        this.bucketName = bucketName;
//    }
//    //设置AccessKey
//    public void setAccessKey(String key) {
//        Config.ACCESS_KEY = key;
//    }
//    //设置SecretKey
//    public void setSecretKey(String key) {
//        Config.SECRET_KEY = key;
//    }
//
//    //通过文件路径上传文件
//    public boolean uploadFile(String localFile) throws AuthException, JSONException {
//        File file = new File(localFile);
//        return uploadFile(file);
//    }
//
//    //通过File上传
//    public boolean uploadFile(File file) throws AuthException, JSONException {
//        String uptoken = getUpToken();
//
//        // 可选的上传选项，具体说明请参见使用手册。
//        PutExtra extra = new PutExtra();
//
//        // 上传文件
//        PutRet ret = IoApi.putFile(uptoken, file.getName(), file.getAbsolutePath(), extra);
//
//        if (ret.ok()) {
//            return true;
//        } else {
//            return false;
//        }
//    }
//
//    /**
//     * 从 inputstream 中写入七牛
//     * @param key 文件名
//     * @param content 要写入的内容
//     * @return
//     * @throws AuthException
//     * @throws JSONException
//     */
//    public boolean uploadFile(String key, String content) throws AuthException, JSONException {
//        // 读取的时候按的二进制，所以这里要同一
//        ByteArrayInputStream inputStream = new ByteArrayInputStream(content.getBytes());
//
//        String uptoken = getUpToken();
//
//        // 可选的上传选项，具体说明请参见使用手册。
//        PutExtra extra = new PutExtra();
//
//        // 上传文件
//        PutRet ret = IoApi.Put(uptoken, key, inputStream, extra);
//
//        if (ret.ok()) {
//            return true;
//        } else {
//            return false;
//        }
//    }
//
//    //获得下载地址
//    public String getDownloadFileUrl(String filename) throws Exception {
//        Mac mac = getMac();
//        String baseUrl = URLUtils.makeBaseUrl(domain, filename);
//        GetPolicy getPolicy = new GetPolicy();
//        String downloadUrl = getPolicy.makeRequest(baseUrl, mac);
//        return downloadUrl;
//    }
//
//    //删除文件
//    public void deleteFile(String filename) {
//        Mac mac = getMac();
//        RSClient client = new RSClient(mac);
//        client.delete(domain, filename);
//    }
//
//    //获取凭证
//    private String getUpToken() throws AuthException, JSONException {
//        Mac mac = getMac();
//        PutPolicy putPolicy = new PutPolicy(bucketName);
//        String uptoken = putPolicy.token(mac);
//        return uptoken;
//    }
//
//    private Mac getMac() {
//        Mac mac = new Mac(Config.ACCESS_KEY, Config.SECRET_KEY);
//        return mac;
//    }

}