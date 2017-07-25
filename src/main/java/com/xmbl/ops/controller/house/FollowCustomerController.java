package com.xmbl.ops.controller.house;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xmbl.ops.constant.SessionConstant;
import com.xmbl.ops.controller.organization.AbstractController;
import com.xmbl.ops.dto.ResponseResult;
import com.xmbl.ops.enumeration.EnumResCode;
import com.xmbl.ops.model.house.FollowCustomer;
import com.xmbl.ops.model.house.OperatorLog;
import com.xmbl.ops.service.house.FollowCustomerService;
import com.xmbl.ops.service.house.OperatorLogService;
import com.xmbl.ops.service.organization.UserLogService;
import com.xmbl.ops.util.DateUtils;




@Controller
@RequestMapping(value = "/follow")
public class FollowCustomerController extends AbstractController {

	private static final int limit = 30;

	@Autowired
	protected FollowCustomerService followCustomerService;
	
	@Autowired
	protected OperatorLogService operatorLogService;
	
	//跟进房源列表
	@RequestMapping(value = "/followCustomerList")
	public String followCustomerSearch(HttpServletRequest request, ModelMap model, 
			Long id, Long customerid,String content,Integer status,
			Integer followtype,String operator,
			String startTime, String endTime, Long page) {
		try{			
			HttpSession session = request.getSession();
			String groupName = (String) session.getAttribute(SessionConstant.GROUP_NAME);
			String userKey = (String) session.getAttribute(SessionConstant.USER_NAME);

			Date startDate = DateUtils.parseDate(startTime, "yyyy-MM-dd HH:mm:ss");
			Date endDate = DateUtils.parseDate(endTime, "yyyy-MM-dd HH:mm:ss");

			page = page == null || page < 0 ? 0 : page;

			long totalNum = followCustomerService.searchCount(id,  
					customerid, content, status, followtype,operator,startDate, endDate);

			long totalPageNum = totalNum / limit;
			if(totalNum > totalPageNum * limit)
				totalPageNum++;
			if(page >= totalPageNum && totalPageNum != 0)
				page = totalPageNum - 1;
			long start = page * limit;
			List<FollowCustomer> followCustomerList = followCustomerService.searchList(id,  
					customerid, content, status, followtype,operator, startDate, endDate, start, limit);
			model.addAttribute("id", id);
			model.addAttribute("customerid", customerid);
			model.addAttribute("followtype", followtype);
			model.addAttribute("operator", operator);
			model.addAttribute("userKey", userKey);
			model.addAttribute("followCustomerList", followCustomerList);
			model.addAttribute("page", page);
			model.addAttribute("totalNum", totalNum);
			model.addAttribute("totalpage", totalPageNum);
			
			return "house/follow/followCustomerList";
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	
	//跟进房源列表
	@RequestMapping(value = "/followCustomeridList")
	public String followCustomeridSearch(HttpServletRequest request, ModelMap model, 
			Long id, Long customerid,String content,Integer status,
			Integer followtype,String operator,
			String startTime, String endTime, Long page) {
		try{			
			HttpSession session = request.getSession();
			String groupName = (String) session.getAttribute(SessionConstant.GROUP_NAME);
			String userKey = (String) session.getAttribute(SessionConstant.USER_NAME);

			Date startDate = DateUtils.parseDate(startTime, "yyyy-MM-dd HH:mm:ss");
			Date endDate = DateUtils.parseDate(endTime, "yyyy-MM-dd HH:mm:ss");

			page = page == null || page < 0 ? 0 : page;

			long totalNum = followCustomerService.searchCount(id,  
					customerid, content, status, followtype,operator,startDate, endDate);

			long totalPageNum = totalNum / limit;
			if(totalNum > totalPageNum * limit)
				totalPageNum++;
			if(page >= totalPageNum && totalPageNum != 0)
				page = totalPageNum - 1;
			long start = page * limit;
			List<FollowCustomer> followCustomerList = followCustomerService.searchList(id,  
					customerid, content, status, followtype,operator, startDate, endDate, start, limit);
			model.addAttribute("id", id);
			model.addAttribute("customerid", customerid);
			model.addAttribute("followtype", followtype);
			model.addAttribute("operator", operator);
			model.addAttribute("userKey", userKey);
			model.addAttribute("followCustomerList", followCustomerList);
			model.addAttribute("page", page);
			model.addAttribute("totalNum", totalNum);
			model.addAttribute("totalpage", totalPageNum);
			
			return "house/follow/followCustomerList";
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	
	
	   //添加
		@RequestMapping(value = "/addFollowCustomer")
		public String addFollowCustomer(HttpServletRequest request, ModelMap model, Long customerid) {

			model.addAttribute("customerid", customerid);
			return "house/follow/addFollowCustomer";
		}
		/**
		 * 插入
		 */
		@RequestMapping(value = "/insertFollowCustomer")
		public @ResponseBody ResponseResult insertFollowCustomer(HttpServletRequest request, Long customerid,Date createtime,
				Date updatetime,Integer followtype, String follower, 
				String content,String remark,String reminder,Date remindtime,
				String remindcontent, Integer status) throws IOException{
			if(StringUtils.isEmpty(content)) {
				return errorJson(EnumResCode.SERVER_ERROR.value(), "跟进内容不能为空！");
			}
			if(customerid == null) {
				return errorJson(EnumResCode.SERVER_ERROR.value(), "客户id不能为空！");
			}

			HttpSession session = request.getSession();
			String operator = (String) session
					.getAttribute(SessionConstant.USER_NAME);
			
			FollowCustomer followCustomerInfo = followCustomerService.addFollowCustomer(customerid,createtime,updatetime,
					followtype,operator,follower,content,remark,
					reminder, remindtime, remindcontent, status);

			JSONObject result = new JSONObject();
			//result中保存要传给前台的参数
//			result.put("id",baseHouseInfo.getId().toString());
//			result.put("name", blackagentInfo.getName());
//			result.put("phone", blackagentInfo.getPhone());
//			result.put("remarks", blackagentInfo.getRemarks());
//			result.put("operator", blackagentInfo.getOperator());
//			result.put("createtime", blackagentInfo.getCreatetime());
//			result.put("updatetime", blackagentInfo.getUpdatetime());
			
			return successJson(result);
		}
//		
//		//编辑
//		@RequestMapping(value = "/editFollowHouse")
//		public String editFollowHouse(HttpServletRequest request,ModelMap model,  Long id, String usename, String gender, String mobile, String phone, String nickname, String qq, String wechat, String email ,String source, String address, String remarks, Integer status) {
//				
//			if(id == null) {
//				return "房源存在！";
//			}
//			
//			BaseHouse baseHouseInfo = baseHouseService.getById(id);
//			
//			model.addAttribute("baseHouseInfo", baseHouseInfo);
//			return "house/source/editBaseHouse";
//		}
//		
//		/**
//		 * 更新
//		 */
//		@RequestMapping(value = "/updateFollowHouse")
//		public @ResponseBody ResponseResult updateFollowHouse(HttpServletRequest request, Long id, String title,Integer type,
//			    String housename,Integer tradetype,Double price,
//			    Double rental,Double unitprice,Integer rentalpricetype,
//			    Integer floor,String room,Double acreage,String orientation,
//			    String officetag,String officetype, String paymentmethod,
//			    String seemethod,String source,String iskey,String remarks,
//			    String image, Date createtime,Date updatetime,
//			    String founder,String owner,String ownerphone,
//			    String propertycompany,String propertphone) throws IOException{
//			if(StringUtils.isEmpty(housename)) {
//				return errorJson(EnumResCode.SERVER_ERROR.value(), "房源名称不能为空！");
//			}
//			if(StringUtils.isEmpty(ownerphone)) {
//				return errorJson(EnumResCode.SERVER_ERROR.value(), "业主电话不能为空！");
//			}
//
//			HttpSession session = request.getSession();
//			String operator = (String) session
//					.getAttribute(SessionConstant.USER_NAME);
//			
//			int num= baseHouseService.updateBaseHouse(id,title, type,
//				     housename, tradetype, price,
//				     rental, unitprice, rentalpricetype,
//				     floor, room, acreage, orientation,
//				     officetag, officetype,  paymentmethod,
//				     seemethod, source, iskey, remarks,
//				     image,  createtime, updatetime, operator,
//				     founder, owner, ownerphone,
//				     propertycompany, propertphone);
//
//			JSONObject result = new JSONObject();
//			//result中保存要传给前台的参数
////			result.put("id",baseHouseInfo.getId().toString());
////			result.put("name", blackagentInfo.getName());
////			result.put("phone", blackagentInfo.getPhone());
////			result.put("remarks", blackagentInfo.getRemarks());
////			result.put("operator", blackagentInfo.getOperator());
////			result.put("createtime", blackagentInfo.getCreatetime());
////			result.put("updatetime", blackagentInfo.getUpdatetime());
//			
//			return successJson(result);
//		}
//		
//		//详细
//		@RequestMapping(value = "/getFollowHouse")
//		public String getFollowHouse(HttpServletRequest request,ModelMap model,  Long id) {
//			if(id == null) {
//				return "房源存在！";
//			}
//			HttpSession session = request.getSession();
//			String operator = (String) session
//					.getAttribute(SessionConstant.USER_NAME);
//			
//			
//			
//			BaseHouse baseHouseInfo = baseHouseService.getById(id);
//			
//			model.addAttribute("baseHouseInfo", baseHouseInfo);
//			
//			OperatorLog operatorLog = new OperatorLog(String.valueOf(id), "浏览房源ID:"+id+"详情", "查看",
//					operator,baseHouseInfo.toString());
//			operatorLogService.insertOperatorLog(operatorLog);
//			
//			return "house/source/baseHouseDetail";
//		}
//		/**
//		 * 删除
//		 */
//		@RequestMapping(value = "/deleteFollowHouse")
//		public @ResponseBody ResponseResult deleteFollowHouse(HttpServletRequest request, Long id) throws IOException{
//			    baseHouseService.deleteBaseHouse(id);
//				JSONObject result = new JSONObject();
//				result.put("id", id);
//				return successJson(result);
//
//		}
}
