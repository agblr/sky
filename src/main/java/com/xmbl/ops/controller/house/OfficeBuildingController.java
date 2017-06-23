package com.xmbl.ops.controller.house;

import java.io.IOException;
import java.util.Date;
import java.util.List;

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
import com.xmbl.ops.model.house.OfficeBuilding;
import com.xmbl.ops.service.house.OfficeBuildingService;
@Controller
@RequestMapping(value = "/office")
public class OfficeBuildingController extends AbstractController{
	private static final int limit = 30;
	
	@Autowired
	protected OfficeBuildingService officeBuildingService;
	
	//列表
	@RequestMapping(value = "/officeBuildingInfoList")
	public String officeBuildingSearch(HttpServletRequest request, ModelMap model, Long officeBuildingId, String address, String location, String poitype, String realaddress, String areaid, Integer status, Long page) throws Exception {
		page = page == null || page < 0 ? 0 : page;

		long totalNum =  officeBuildingService.searchCount(officeBuildingId, address, location, poitype, realaddress, areaid, status);
		long totalPageNum = totalNum / limit;
		if (totalNum > totalPageNum * limit)
			totalPageNum++;
		if (page >= totalPageNum && totalPageNum != 0)
			page = totalPageNum - 1;
		long start = page * limit;
		List<OfficeBuilding> officeBuildingsList = officeBuildingService.searchList(officeBuildingId, address, location, poitype, realaddress, areaid, status, start, limit);
		model.addAttribute("officeBuildingId", officeBuildingId);
	
		model.addAttribute("status", status);
		model.addAttribute("officeBuildingsList", officeBuildingsList);
		model.addAttribute("page", page);
		model.addAttribute("totalNum", totalNum);
		model.addAttribute("totalpage", totalPageNum);
		return "office/officeBuildingsList";
	}
	
	/**
	 * 插入
	 */
	@RequestMapping(value = "/insertOfficeBuilding")
	public @ResponseBody ResponseResult insertOfficeBuilding(HttpServletRequest request, String address, String location, String poitype, String realaddress, String areaid, String remarks, Integer status
			) throws IOException{
		
		HttpSession session = request.getSession();
		String operator = (String) session
				.getAttribute(SessionConstant.USER_NAME);
		Date date = new Date();
		
		OfficeBuilding officeBuildingInfo = officeBuildingService.addOfficeBuilding(address, location, poitype, realaddress, areaid, remarks
				, Integer.valueOf(0), operator, date, date);

		return successJson(officeBuildingInfo);
	}
	
	/**
	 * 编辑
	 */
	@RequestMapping(value = "/updateOfficeBuilding")
	public @ResponseBody ResponseResult updateOfficeBuilding(HttpServletRequest request, Long officeBuildingId, String address, String location, String poitype, String realaddress, String areaid, String remarks, Integer status) throws IOException{
		if (officeBuildingId != null) {	
		HttpSession session = request.getSession();
		String operator = (String) session
				.getAttribute(SessionConstant.USER_NAME);
		Date date = new Date();
		
		int updateSuccess  = officeBuildingService.updateOfficeBuilding(officeBuildingId , address, location, poitype, realaddress, areaid, remarks
				, status, operator, date);
		if(updateSuccess == 1) {
			OfficeBuilding officeBuildingInfo = officeBuildingService.getById(officeBuildingId);
			return successJson(officeBuildingInfo);
			}
	    }
		return errorJson(EnumResCode.SERVER_ERROR.value(), "编辑失败！");
	}
	
	/**
	 * 删除
	 */
	@RequestMapping(value = "/deleteOfficeBuilding")
	public @ResponseBody ResponseResult deleteOfficeBuilding(HttpServletRequest request, Long officeBuildingId) throws IOException{
	  	    HttpSession session = request.getSession();
		    String operator = (String) session
				.getAttribute(SessionConstant.USER_NAME);
		    officeBuildingService.deleteOfficeBuilding(officeBuildingId, Integer.valueOf(-1), operator);
			JSONObject result = new JSONObject();
			result.put("officeBuildingId", officeBuildingId);
			return successJson(result);

	}
	
}
