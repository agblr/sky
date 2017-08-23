package com.xmbl.ops.controller.file;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLDecoder;
import java.util.Date;
import java.util.UUID;
import java.util.concurrent.TimeUnit;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import sun.misc.BASE64Decoder;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.xmbl.ops.controller.organization.AbstractController;
import com.xmbl.ops.dto.ResponseResult;
import com.xmbl.ops.enumeration.EnumResCode;
import com.xmbl.ops.util.CommonXMLStr;
import com.xmbl.ops.util.UpYun;
import com.xmbl.ops.util.UpySingleton;


@RestController
@RequestMapping(value = "/fileupload")
public class FileUploadController extends AbstractController {
	private static Logger logger = LoggerFactory.getLogger("file_upload_log");
//	@RequestMapping(value = "/uploadLocalImage")
//	public ResponseResult uploadLocalImage(HttpServletRequest request, HttpServletResponse response, MultipartFile file) {
//		try{
//			if(null == file)
//				return errorJson(EnumResCode.SERVER_ERROR.value(), "本地文件为空，请重新上传");
//			String fileName = file.getOriginalFilename();
//			File localFile = copyFile(file.getInputStream(), fileName);
//			BufferedImage bi = ImageIO.read(file.getInputStream());
//			String downloadUrl = FileUtil.upload(localFile);
//			localFile.delete();
//			JSONObject result = new JSONObject();
//			result.put("imageUrl", downloadUrl);
//			result.put("width", bi.getWidth());
//			result.put("height", bi.getHeight());
//			logger.info("成功上传图片地址："+result);
//			return successJson(result);
//		} catch (Exception e) {
//			logger.info("时间："+new Date()+"失败上传图片："+file);
//			logger.error("失败上传图片:upload_time=" + new Date(),e);
//			return errorJson(EnumResCode.SERVER_ERROR.value(), "读取文件失败，请重新上传");
//		}
//	}

	
	public static File copyFile(InputStream inStream, String fileName) throws IOException {
		FileOutputStream outStream = null;
		try {
			String filePath = System.getProperty("java.io.tmpdir");
			File imageFile = new File(filePath);
			if (imageFile.exists() == false) {
				imageFile.mkdirs();
			}
			imageFile = new File(filePath, fileName);
			outStream = new FileOutputStream(imageFile);
			byte[] buffer = new byte[1024];
			int len = 0;
			while((len = inStream.read(buffer)) != -1) {
				outStream.write(buffer, 0, len);
			}
			return imageFile;
		} finally {
			if(inStream != null) {
				inStream.close();
			}
			if(outStream != null) {
				outStream.close();
			}
		}
	}
	
	@RequestMapping(value = "/uploadRemoteImage")
	public ResponseResult uploadRemoteImage(HttpServletResponse response, String remoteUrl) {
		try {
			response.setHeader("Access-Control-Allow-Origin", "*");
			if(StringUtils.isNotEmpty(remoteUrl)) {
				String fileName = this.getFileName();
				URL url = new URL(remoteUrl);
				URLConnection conn = url.openConnection();
				conn.setReadTimeout(10 * 1000);
				InputStream inStream = conn.getInputStream();
				File file = copyFile(inStream, fileName); 
//				String downloadUrl = FileUtil.upload(file);
				String downloadUrl = upyUploadFile(file);
				file.delete();
				BufferedImage image = getBufferedImage(downloadUrl); 
				if (image != null) { 
					JSONObject result = new JSONObject();
					result.put("imageUrl", downloadUrl);
					result.put("width", image.getWidth());
					result.put("height", image.getHeight());
					return successJson(result);
				} else { 
					return errorJson(EnumResCode.SERVER_ERROR.value(), "图片网址不存在图片，请重新上传"); 
				}			
			} else {
				return errorJson(EnumResCode.SERVER_ERROR.value(), "图片网址为空，请重新上传");
			}
		} catch (Exception e) {
			logger.error("失败上传图片:upload_time=" + new Date(),e);
			logger.info("时间："+new Date()+"失败上传图片地址："+remoteUrl);
			return errorJson(EnumResCode.SERVER_ERROR.value(), "读取文件失败，请重新上传");
		}
	}
	
	@RequestMapping(value = "/uploadRemoteImages")
	public ResponseResult uploadRemoteImages(HttpServletResponse response, String[] remoteUrls) {
		int length = remoteUrls.length;
		if(remoteUrls != null && length > 0) {
			String[] downloadUrls = new String[length];
			JSONArray results = new JSONArray();
			response.setHeader("Access-Control-Allow-Origin", "*");
			String remoteUrl = null;
			Pattern pattern = Pattern.compile("^data:image/\\w{0,10};base64,.*");
			Matcher matcher = null;
			for(int i = 0; i < length; i++) {
				try {
					remoteUrl = remoteUrls[i];
					if(StringUtils.isNotEmpty(remoteUrl)) {
						remoteUrl = URLDecoder.decode(remoteUrls[i], "utf-8");
						matcher = pattern.matcher(remoteUrl);
						File file = null;
						if(matcher.matches()) {
							remoteUrl = remoteUrl.replaceFirst("^data:image/\\w{0,10};base64,", "");
							file = this.saveBase64Image(remoteUrl);
						} else {
							String fileName = this.getFileName();
							URL url = new URL(remoteUrl);
							URLConnection conn = url.openConnection();
							conn.setReadTimeout(10 * 1000);
							InputStream inStream = conn.getInputStream();
							file = copyFile(inStream, fileName);
						}
//						downloadUrls[i] = FileUtil.upload(file);
						downloadUrls[i] = upyUploadFile(file);
						BufferedImage image = getBufferedImage(downloadUrls[i]); 
						JSONObject result = new JSONObject();
						if (image != null) { 
							result.put("imageUrl", downloadUrls[i]);
							result.put("width", image.getWidth());
							result.put("height", image.getHeight());
							results.add(result);
						} else { 
							results.add(new JSONObject());
						}					
						file.delete();
					} else {
						results.add(new JSONObject());
					}
				} catch (Exception e) {
					logger.error("失败上传图片:upload_time=" + new Date(),e);
					logger.info("时间："+new Date()+"失败上传图片地址："+remoteUrl);
					results.add(new JSONObject());
					
				}
			}
			return successJson(results);
		} else {
			return errorJson(EnumResCode.SERVER_ERROR.value(), "图片网址为空，请重新上传");
		}
	}
	
	public File saveBase64Image(String imgStr) throws IOException {   //对字节数组字符串进行Base64解码并生成图片
		OutputStream outStream = null;
		try {
	        BASE64Decoder decoder = new BASE64Decoder();
	        //Base64解码
	        byte[] b = decoder.decodeBuffer(imgStr);
	        for(int i = 0; i < b.length; ++i) {
	            if(b[i] < 0)  {//调整异常数据
	                b[i] += 256;
	            }
	        }
	        //生成jpeg图片
	        String filePath = System.getProperty("java.io.tmpdir");
			File imageFile = new File(filePath);
			if (imageFile.exists() == false) {
				imageFile.mkdirs();
			}
			imageFile = new File(filePath, UUID.randomUUID().toString());
			outStream = new FileOutputStream(imageFile);    
			outStream.write(b);
			outStream.flush();
	        return imageFile;
		} finally {
			if(outStream != null) {
				outStream.close();
			}
		}
    }
	private String getFileName() {
		return UUID.randomUUID().toString();
	}
	 /**
     * 
     * @param imgUrl 图片地址
     * @return 
     */ 
    public static BufferedImage getBufferedImage(String imgUrl) { 
        URL url = null; 
        InputStream is = null; 
        BufferedImage img = null; 
        try { 
            url = new URL(imgUrl); 
            is = url.openStream(); 
            img = ImageIO.read(is); 
        } catch (MalformedURLException e) { 
            e.printStackTrace(); 
        } catch (IOException e) { 
            e.printStackTrace(); 
        } finally { 
               
            try { 
                is.close(); 
            } catch (IOException e) { 
                e.printStackTrace(); 
            } 
        } 
        return img; 
    } 
    
    /**
	 * 又拍云上传图片
     * @throws IOException 
	 */
//    @RequestMapping(value = "upYunUploadFile")
	@RequestMapping(value = "/uploadLocalImage")
    public ResponseResult upYunUploadFile(MultipartFile file) throws IOException {
    	if(file.getSize() > 268435456)
    		return errorJson(EnumResCode.SERVER_ERROR.value(), "图片过大！请上传小图片");
    	if(file.getSize() < 100)
    		return errorJson(EnumResCode.SERVER_ERROR.value(), "图片过小！请上传大图片");
        CommonsMultipartFile cf= (CommonsMultipartFile)file; 
        DiskFileItem fi = (DiskFileItem)cf.getFileItem(); 
        File f = fi.getStoreLocation();
           
    	UpYun upyun = UpySingleton.getUpyun();
		// 要传到upyun后的文件路径
		String filePath = CommonXMLStr.DIR_ROOT + "tmp/" + getFileName();
		// 设置待上传文件的 Content-MD5 值
		// 如果又拍云服务端收到的文件MD5值与用户设置的不一致，将回报 406 NotAcceptable 错误
		upyun.setContentMD5(UpYun.md5(f));

		// 设置待上传文件的"访问密钥"
		// 注意：
		// 仅支持图片空！，设置密钥后，无法根据原文件URL直接访问，需带URL后面加上（缩略图间隔标志符+密钥）进行访问
		// 举例：
		// 如果缩略图间隔标志符为"!"，密钥为"bac"，上传文件路径为"/folder/test.jpg"，
		// 那么该图片的对外访问地址为：http://空间域名 /folder/test.jpg!bac
		// upyun.setFileSecret("bac");

		// 上传文件，并自动创建父级目录（最多10级）
		boolean result = upyun.writeFile(filePath, f, true);

		System.out.println(filePath + " 上传" + isSuccess(result));

		// 获取上传文件后的信息（仅图片空间有返回数据）
		System.out.println("\r\n****** " + file.getName() + " 的图片信息 *******");
		/**
		 * // 图片宽度 System.out.println("图片宽度:" + upyun.getPicWidth()); // 图片高度
		 * System.out.println("图片高度:" + upyun.getPicHeight()); // 图片帧数
		 * System.out.println("图片帧数:" + upyun.getPicFrames()); // 图片类型
		 * System.out.println("图片类型:" + upyun.getPicType());
		 * 
		 * System.out.println("****************************************\r\n");
		 */
		// System.out.println("若设置过访问密钥(bac)，且缩略图间隔标志符为'!'，则可以通过以下路径来访问图片：");
		// System.out.println(URL + filePath + "!bac");
		String filePathnew = filePath + "!";
		JSONObject jsonResult = new JSONObject();
		jsonResult.put("imageUrl", CommonXMLStr.UPYHOST + filePathnew);
		jsonResult.put("width",  upyun.getPicWidth());
		jsonResult.put("height", upyun.getPicHeight());
		logger.info("成功上传图片地址："+result);
		return successJson(jsonResult);
    }
    
    /**
	 * 又拍云上传图片
	 */
	public String upyUploadFile(File file) throws IOException {

		UpYun upyun = UpySingleton.getUpyun();
		// 要传到upyun后的文件路径
		String filePath = CommonXMLStr.DIR_ROOT + "tmp/" + getFileName();
		// 设置待上传文件的 Content-MD5 值
		// 如果又拍云服务端收到的文件MD5值与用户设置的不一致，将回报 406 NotAcceptable 错误
		upyun.setContentMD5(UpYun.md5(file));

		// 设置待上传文件的"访问密钥"
		// 注意：
		// 仅支持图片空！，设置密钥后，无法根据原文件URL直接访问，需带URL后面加上（缩略图间隔标志符+密钥）进行访问
		// 举例：
		// 如果缩略图间隔标志符为"!"，密钥为"bac"，上传文件路径为"/folder/test.jpg"，
		// 那么该图片的对外访问地址为：http://空间域名 /folder/test.jpg!bac
		// upyun.setFileSecret("bac");

		// 上传文件，并自动创建父级目录（最多10级）
		boolean result = upyun.writeFile(filePath, file, true);

		System.out.println(filePath + " 上传" + isSuccess(result));

		// 获取上传文件后的信息（仅图片空间有返回数据）
		System.out.println("\r\n****** " + file.getName() + " 的图片信息 *******");
		/**
		 * // 图片宽度 System.out.println("图片宽度:" + upyun.getPicWidth()); // 图片高度
		 * System.out.println("图片高度:" + upyun.getPicHeight()); // 图片帧数
		 * System.out.println("图片帧数:" + upyun.getPicFrames()); // 图片类型
		 * System.out.println("图片类型:" + upyun.getPicType());
		 * 
		 * System.out.println("****************************************\r\n");
		 */
		// System.out.println("若设置过访问密钥(bac)，且缩略图间隔标志符为'!'，则可以通过以下路径来访问图片：");
		// System.out.println(URL + filePath + "!bac");
		String filePathnew = filePath + "!";
		return CommonXMLStr.UPYHOST + filePathnew;
	}
    
    
    private static String isSuccess(boolean result) {
		return result ? " 成功" : " 失败";
	}
    
    
    
    
}

