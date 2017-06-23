package com.xmbl.ops.controller.organization;

import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xmbl.ops.constant.SessionConstant;
import com.xmbl.ops.dto.ResponseResult;
import com.xmbl.ops.enumeration.EnumResCode;
import com.xmbl.ops.model.organization.Assets;
import com.xmbl.ops.model.organization.UseRecord;
import com.xmbl.ops.service.organization.AssetsService;
import com.xmbl.ops.service.organization.UseRecordService;
import com.xmbl.ops.util.DateUtils;



@Controller
@RequestMapping(value = "/assets")
public class AssetsController extends AbstractController {
	private static final int limit = 15;
	@Autowired
	protected AssetsService assetsService;
	
	@Autowired
	protected UseRecordService useRecordService;
	
	
	@RequestMapping(value = "/assetsInfoList")
	public String assetsInfoList(HttpServletRequest request, ModelMap model, Long proId, String proName, Integer proType, String proNum, String userNames, Integer status,
			String startTime, String endTime,
			Long page) throws Exception {
		page = page == null || page < 0 ? 0 : page;
//		if (StringUtils.isNotEmpty(proName))
//			proName = new String(proName.getBytes("ISO-8859-1"), "UTF-8");
//		if (StringUtils.isNotEmpty(proNum))
//			proNum = new String(proNum.getBytes("ISO-8859-1"), "UTF-8");
//		if (StringUtils.isNotEmpty(userNames))
//			userNames = new String(userNames.getBytes("ISO-8859-1"), "UTF-8");
		Date startDate = DateUtils.parseDate(startTime, "yyyy-MM-dd HH:mm:ss");
		Date endDate = DateUtils.parseDate(endTime, "yyyy-MM-dd HH:mm:ss");
		long totalNum = assetsService.searchCount(proId, proName, proType, proNum, userNames, status, startDate, endDate);
		long totalPageNum = totalNum / limit;
		if (totalNum > totalPageNum * limit)
			totalPageNum++;
		if (page >= totalPageNum && totalPageNum != 0)
			page = totalPageNum - 1;
		long start = page * limit;
		List<Assets> assetsInfoList = assetsService.searchList(proId, proName, proType, proNum, userNames, status, startDate, endDate, start,
				limit);
		model.addAttribute("proName", proName);
		model.addAttribute("proType", proType);
		model.addAttribute("proNum", proNum);
		model.addAttribute("userNames", userNames);
		model.addAttribute("status", status);
		model.addAttribute("startTime", startTime);
		model.addAttribute("endTime", endTime);
		model.addAttribute("assetsInfoList", assetsInfoList);
		model.addAttribute("page", page);
		model.addAttribute("totalNum", totalNum);
		model.addAttribute("totalpage", totalPageNum);
		return "assets/assetsInfoList";
	}
	
	@RequestMapping(value = "/addAssetsInfo")
	public @ResponseBody
	ResponseResult addAssetsInfo(HttpServletRequest request, ModelMap model,Long id, String proName, String proNum, String proConfig, String proDes,
			Integer proType, Integer status , String proPrice , String unit , String buyTime, String department, String channel,
			String userName, String useAddress, String applicationName, String adscriptionName) {
		try {

			HttpSession session = request.getSession();
			String operatorName = (String) session.getAttribute(SessionConstant.USER_NAME);

			Assets assets = null;
			
			assets = assetsService.getById(id);
			
			if (StringUtils.isEmpty(proName)) {
				return errorJson(EnumResCode.SERVER_ERROR.value(), "物品名称不能为空");
			} 
//			if (StringUtils.isEmpty(proNum)) {
//				return errorJson(EnumResCode.SERVER_ERROR.value(), "物品编号不能为空");
//			}
			if (StringUtils.isNotEmpty(proPrice)) {
				Pattern pattern = Pattern.compile("^(([1-9]{1}\\d*)|([0]{1}))(\\.(\\d){0,2})?$");   
		        Matcher isNum = pattern.matcher(proPrice.trim());  
		        if( !isNum.matches() ){  
		        	   return errorJson(EnumResCode.SERVER_ERROR.value(), "物品价格必须是数字"); 
		        }
			}		
			Date BuyDate = DateUtils.parseDate(buyTime, "yyyy-MM-dd HH:mm:ss");
           if( assets == null) {
        	   assets = new Assets(proName, proNum, proConfig, proType, proPrice, status, operatorName, BuyDate, channel, proDes, department, unit);
   			   Assets assetsIn = assetsService.insertAssetsInfo(assets);
   			   if( assetsIn != null) {
   				 Assets assetsInfo = assetsService.getByProName(assetsIn.getProname());
   				 if( assetsInfo != null) {
   					    if( status == 1) {
   					    	//如果设置物品为使用
   					    	if (StringUtils.isEmpty(userName)) {   					    		
   					    		return errorJson(EnumResCode.SERVER_ERROR.value(), "使用人不能为空");
   					    	}
   					    	UseRecord useRecordinfo1 = useRecordService.getByUseName(assetsInfo.getId(),userName, Integer.valueOf(1));
   	   		  			    if( useRecordinfo1 != null) {
   	   		  				       UseRecord useRecord = new UseRecord(useRecordinfo1.getId(), assetsInfo.getId(), userName, Integer.valueOf(1), useAddress, applicationName, adscriptionName, operatorName);
   	   		  				       int updateNum  = useRecordService.updateUseRecordInfo(useRecord);
   	   		  				       if(updateNum > 0) {
   	   		  				         
   	   		  				       }
   	    	   		  				
   	   		  				 }else {
   	   		  				   int updateNum  = useRecordService.updateUseRecordInfoByProId(assetsInfo.getId(),Integer.valueOf(0));
   	   		  				   if(updateNum > 0) {
                       
                       }
   	   		   	   		   UseRecord useRecord = new UseRecord(assetsInfo.getId(), userName, Integer.valueOf(1), useAddress, applicationName, adscriptionName, operatorName);
   	   		   	   			 UseRecord useRecordinfo = useRecordService.insertUseRecordInfo(useRecord);
   	   		   	   			 if( useRecordinfo != null) {
   	   		   	   			   
   	   		   	   			 }
   	   		  				 }
   					    }else {
   					    	//如果设为未使用,把使用记录全部置为 0 未使用，待重新分配使用人
   					     int updateNum  = useRecordService.updateUseRecordInfoByProId(assetsInfo.getId(),Integer.valueOf(0)); 
   					     if (updateNum >0) {
   					       
   					     }
   					    }	  
   					return successJson(assetsInfo);
   				 }else {
   					 return null;
   				 }
   			   }else{
   				   return errorJson(EnumResCode.SERVER_ERROR.value(), "创建物品失败"); 
   			   }
			}else {
				Assets assetsInfo = new Assets(assets.getId(), proName, proNum, proConfig, proType, proPrice, status, operatorName, BuyDate, channel, proDes, department, unit);
				int updateNum = assetsService.updateAssetsInfo(assetsInfo);
				if (updateNum == 1) {
					Assets returnassets = assetsService.getById(assetsInfo.getId());
					    if( status == 1) {
   					    	//如果设置物品为使用
   					    	if (StringUtils.isEmpty(userName)) {   					    		
   					    		return errorJson(EnumResCode.SERVER_ERROR.value(), "使用人不能为空");
   					    	}
   								
   					    	UseRecord useRecordinfo1 = useRecordService.getByUseName(assetsInfo.getId(),userName, Integer.valueOf(1));
   	   		  			    if( useRecordinfo1 != null) {
   	   		  				       UseRecord useRecord = new UseRecord(useRecordinfo1.getId(), assetsInfo.getId(), userName, Integer.valueOf(1), useAddress, applicationName, adscriptionName, operatorName);
   	   		  				       int updateNum1  = useRecordService.updateUseRecordInfo(useRecord);
   	    	   		  				 if( updateNum1 >0) {
   	    	   		  				   
   	    	   		  				 }
   	   		  				 }else {
   	   		  				   int updateNum1  = useRecordService.updateUseRecordInfoByProId(assetsInfo.getId(),Integer.valueOf(0));
   	   		  				   if( updateNum1 >0) {
                         
                       }
   	   		   	   		   UseRecord useRecord = new UseRecord(assetsInfo.getId(), userName, Integer.valueOf(1), useAddress, applicationName, adscriptionName, operatorName);
   	   		   	   			 UseRecord useRecordinfo = useRecordService.insertUseRecordInfo(useRecord);
   	   		   	   			 if( useRecordinfo != null) {
   	   		   	   			   
   	   		   	   			 }
   	   		  				 }
   					    }else {
   					    	//如果设为未使用,把使用记录全部置为 0 未使用，待重新分配使用人
   					     int updateNum1  = useRecordService.updateUseRecordInfoByProId(assetsInfo.getId(),Integer.valueOf(0));  
   					     if (updateNum1 >0 ) {
   					       
   					     }
   					    }
					return successJson(returnassets);
				}else{
					return errorJson(EnumResCode.SERVER_ERROR.value(), "编辑物品失败");
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return errorJson(EnumResCode.SERVER_ERROR.value(), "物品失败");
	}
	
}
