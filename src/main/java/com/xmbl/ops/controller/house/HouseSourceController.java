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
import com.xmbl.ops.model.house.Customer;
import com.xmbl.ops.service.house.CustomerService;
import com.xmbl.ops.util.DateUtils;




@Controller
@RequestMapping(value = "/source")
public class HouseSourceController extends AbstractController {

	private static final int limit = 30;

	@Autowired
	protected CustomerService customerService;
	
	//房源列表
	@RequestMapping(value = "/houseSourcesList")
	public String housereSourcesSearch(HttpServletRequest request, ModelMap model, 
			Integer id,
			String usename, String gender, String mobile,
			String phone, String nickname, String qq, 
			String wechat, String email ,String source,
			String address, String remarks, Integer status,
			String operator,
			String startTime, String endTime, Long page) {
		try{			
			HttpSession session = request.getSession();
			String groupName = (String) session.getAttribute(SessionConstant.GROUP_NAME);
			String userKey = (String) session.getAttribute(SessionConstant.USER_NAME);

			Date startDate = DateUtils.parseDate(startTime, "yyyy-MM-dd HH:mm:ss");
			Date endDate = DateUtils.parseDate(endTime, "yyyy-MM-dd HH:mm:ss");

			page = page == null || page < 0 ? 0 : page;

			long totalNum = customerService.searchCount(id,usename,gender, mobile,
				     phone, nickname, qq,
				     wechat,  email, source,
				     address, status, 
				     remarks, operator,startDate, endDate);

			long totalPageNum = totalNum / limit;
			if(totalNum > totalPageNum * limit)
				totalPageNum++;
			if(page >= totalPageNum && totalPageNum != 0)
				page = totalPageNum - 1;
			long start = page * limit;
//			List<Customer> customerList = customerService.searchList(
//					id,usename,gender, mobile,
//				     phone, nickname, qq,
//				     wechat,  email, source,
//				     address, status, 
//				     remarks, operator,startDate, endDate, start, limit);
//			model.addAttribute("id", id);
//			model.addAttribute("usename", usename);
//			model.addAttribute("gender", gender);
//			model.addAttribute("mobile", mobile);
//			model.addAttribute("phone", phone);
//			model.addAttribute("nickname", nickname);
//			model.addAttribute("qq", qq);
//			model.addAttribute("wechat", wechat);
//			model.addAttribute("email", email);
//			model.addAttribute("source", source);
//			model.addAttribute("address", address);
//			model.addAttribute("operator", operator);
//			model.addAttribute("status", status);
//			model.addAttribute("remarks", remarks);
//			model.addAttribute("startTime", startTime);
//			model.addAttribute("endTime", endTime);
//			model.addAttribute("customerList", customerList);
//			model.addAttribute("page", page);
//			model.addAttribute("totalNum", totalNum);
//			model.addAttribute("totalpage", totalPageNum);	
			return "house/source/houseSourceList";
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
	   //添加
		@RequestMapping(value = "/addHouseSources")
		public String addHousereSources(HttpServletRequest request, String usename, String gender, String mobile, String phone, String nickname, String qq, String wechat, String email ,String source, String address, String remarks, Integer status) {

			return "house/source/house_edit";
		}
		//编辑
		@RequestMapping(value = "/editHouseSources")
		public String editHousereSources(HttpServletRequest request, String usename, String gender, String mobile, String phone, String nickname, String qq, String wechat, String email ,String source, String address, String remarks, Integer status) {
			return "house/source/house_edit";
		}
		//详细
		@RequestMapping(value = "/getHousereSources")
		public String getHousereSources(HttpServletRequest request, String usename, String gender, String mobile, String phone, String nickname, String qq, String wechat, String email ,String source, String address, String remarks, Integer status) {
			return "house/source/houseSourceDetail";
		}
		/**
		 * 删除
		 */
		@RequestMapping(value = "/deleteHouseSources")
		public @ResponseBody ResponseResult deleteHousereSources(HttpServletRequest request, Long id) throws IOException{
//			    blackAgentService.deleteHousereSources(id);
				JSONObject result = new JSONObject();
				result.put("id", id);
				return successJson(result);

		}
}
