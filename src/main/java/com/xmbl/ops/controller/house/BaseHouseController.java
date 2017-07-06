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
import com.xmbl.ops.model.house.BaseHouse;
import com.xmbl.ops.service.house.BaseHouseService;
import com.xmbl.ops.util.DateUtils;




@Controller
@RequestMapping(value = "/base")
public class BaseHouseController extends AbstractController {

	private static final int limit = 30;

	@Autowired
	protected BaseHouseService baseHouseService;
	
	//房源列表
	@RequestMapping(value = "/baseHouseList")
	public String baseHouseSearch(HttpServletRequest request, ModelMap model, 
			Long id,
			String title,Integer type,
		    String housename,Integer tradetype,Double price,
		    Double rental,Double unitprice,Integer rentalpricetype,
		    Integer floor,Integer room,Double acreage,String orientation,
		    String officetag,String officetype, String paymentmethod,
		    String seemethod,String source,String iskey,String remarks,
		    String image, Date createtime,Date updatetime,String operator,
		    String founder,String owner,String ownerphone,
		    String propertycompany,String propertphone,
			String startTime, String endTime, Long page) {
		try{			
			HttpSession session = request.getSession();
			String groupName = (String) session.getAttribute(SessionConstant.GROUP_NAME);
			String userKey = (String) session.getAttribute(SessionConstant.USER_NAME);

			Date startDate = DateUtils.parseDate(startTime, "yyyy-MM-dd HH:mm:ss");
			Date endDate = DateUtils.parseDate(endTime, "yyyy-MM-dd HH:mm:ss");

			page = page == null || page < 0 ? 0 : page;

			long totalNum = baseHouseService.searchCount(id,title, type,
				     housename, tradetype, price,
				     rental, unitprice, rentalpricetype,
				     floor, room, acreage, orientation,
				     officetag, officetype,  paymentmethod,
				     seemethod, source, iskey, remarks,
				     founder, owner, ownerphone,
				     propertycompany, propertphone,operator,startDate, endDate);

			long totalPageNum = totalNum / limit;
			if(totalNum > totalPageNum * limit)
				totalPageNum++;
			if(page >= totalPageNum && totalPageNum != 0)
				page = totalPageNum - 1;
			long start = page * limit;
			List<BaseHouse> baseHouseList = baseHouseService.searchList(id,title, type,
				     housename, tradetype, price,
				     rental, unitprice, rentalpricetype,
				     floor, room, acreage, orientation,
				     officetag, officetype,  paymentmethod,
				     seemethod, source, iskey, remarks,
				     founder, owner, ownerphone,
				     propertycompany, propertphone,operator, startDate, endDate, start, limit);
			model.addAttribute("housename", housename);
			model.addAttribute("tradetype", tradetype);
			model.addAttribute("remarks", remarks);
			model.addAttribute("userKey", userKey);
			model.addAttribute("baseHouseList", baseHouseList);
			model.addAttribute("page", page);
			model.addAttribute("totalNum", totalNum);
			model.addAttribute("totalpage", totalPageNum);
			
			return "house/source/baseHouseList";
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	   //添加
		@RequestMapping(value = "/addBaseHouse")
		public String addBaseHouse(HttpServletRequest request) {

			return "house/source/addBaseHouse";
		}
		/**
		 * 插入
		 */
		@RequestMapping(value = "/insertBaseHouse")
		public @ResponseBody ResponseResult insertBaseHouse(HttpServletRequest request, String title,Integer type,
			    String housename,Integer tradetype,Double price,
			    Double rental,Double unitprice,Integer rentalpricetype,
			    Integer floor,Integer room,Double acreage,String orientation,
			    String officetag,String officetype, String paymentmethod,
			    String seemethod,String source,String iskey,String remarks,
			    String image, Date createtime,Date updatetime,
			    String founder,String owner,String ownerphone,
			    String propertycompany,String propertphone) throws IOException{
			if(StringUtils.isEmpty(housename)) {
				return errorJson(EnumResCode.SERVER_ERROR.value(), "房源名称不能为空！");
			}
			if(StringUtils.isEmpty(ownerphone)) {
				return errorJson(EnumResCode.SERVER_ERROR.value(), "业主电话不能为空！");
			}

			HttpSession session = request.getSession();
			String operator = (String) session
					.getAttribute(SessionConstant.USER_NAME);
			
			BaseHouse baseHouseInfo = baseHouseService.addBaseHouse(title, type,
				     housename, tradetype, price,
				     rental, unitprice, rentalpricetype,
				     floor, room, acreage, orientation,
				     officetag, officetype,  paymentmethod,
				     seemethod, source, iskey, remarks,
				     image,  createtime, updatetime, operator,
				     founder, owner, ownerphone,
				     propertycompany, propertphone);

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
		
		//编辑
		@RequestMapping(value = "/editBaseHouse")
		public String editBaseHouse(HttpServletRequest request,ModelMap model,  Long id, String usename, String gender, String mobile, String phone, String nickname, String qq, String wechat, String email ,String source, String address, String remarks, Integer status) {
				
			if(id == null) {
				return "房源存在！";
			}
			
			BaseHouse baseHouseInfo = baseHouseService.getById(id);
			
			model.addAttribute("baseHouseInfo", baseHouseInfo);
			return "house/source/editBaseHouse";
		}
		
		/**
		 * 更新
		 */
		@RequestMapping(value = "/updateBaseHouse")
		public @ResponseBody ResponseResult updateBaseHouse(HttpServletRequest request, Long id, String title,Integer type,
			    String housename,Integer tradetype,Double price,
			    Double rental,Double unitprice,Integer rentalpricetype,
			    Integer floor,Integer room,Double acreage,String orientation,
			    String officetag,String officetype, String paymentmethod,
			    String seemethod,String source,String iskey,String remarks,
			    String image, Date createtime,Date updatetime,
			    String founder,String owner,String ownerphone,
			    String propertycompany,String propertphone) throws IOException{
			if(StringUtils.isEmpty(housename)) {
				return errorJson(EnumResCode.SERVER_ERROR.value(), "房源名称不能为空！");
			}
			if(StringUtils.isEmpty(ownerphone)) {
				return errorJson(EnumResCode.SERVER_ERROR.value(), "业主电话不能为空！");
			}

			HttpSession session = request.getSession();
			String operator = (String) session
					.getAttribute(SessionConstant.USER_NAME);
			
			int num= baseHouseService.updateBaseHouse(id,title, type,
				     housename, tradetype, price,
				     rental, unitprice, rentalpricetype,
				     floor, room, acreage, orientation,
				     officetag, officetype,  paymentmethod,
				     seemethod, source, iskey, remarks,
				     image,  createtime, updatetime, operator,
				     founder, owner, ownerphone,
				     propertycompany, propertphone);

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
		
		//详细
		@RequestMapping(value = "/getHousereSources")
		public String getHousereSources(HttpServletRequest request,ModelMap model,  Long id) {
			if(id == null) {
				return "房源存在！";
			}
			
			BaseHouse baseHouseInfo = baseHouseService.getById(id);
			
			model.addAttribute("BaseHouseInfo", baseHouseInfo);
			
			return "house/source/houseSourceDetail";
		}
		/**
		 * 删除
		 */
		@RequestMapping(value = "/deleteBaseHouse")
		public @ResponseBody ResponseResult deleteBaseHouse(HttpServletRequest request, Long id) throws IOException{
			    baseHouseService.deleteBaseHouse(id);
				JSONObject result = new JSONObject();
				result.put("id", id);
				return successJson(result);

		}
}