package com.xmbl.ops.controller.house;

import java.io.IOException;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import net.sf.json.JSONObject;

import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xmbl.ops.commons.domain.DataGridResultInfo;
import com.xmbl.ops.constant.SessionConstant;
import com.xmbl.ops.controller.organization.AbstractController;
import com.xmbl.ops.dto.ResponseResult;
import com.xmbl.ops.enumeration.EnumResCode;
import com.xmbl.ops.model.house.BlackAgent;
import com.xmbl.ops.service.house.BlackAgentService;
import com.xmbl.ops.util.DateUtils;

@Controller
@RequestMapping(value = "/black")
public class BlackAgentController extends AbstractController{

	/*
	 * 中介黑名单
	 */
	@Autowired
	protected BlackAgentService blackAgentService;
	
	private static int limit = 50;

	@RequestMapping(value = "/blackAgentInfoList")
	public String blackagentInfoSearch(HttpServletRequest request, ModelMap model, Long id, String name, String phone, String remarks, String operator,
			String startTime, String endTime, Long page) throws Exception {
		page = page == null || page < 0 ? 0 : page;
		Date startDate = DateUtils.parseDate(startTime, "yyyy-MM-dd HH:mm:ss");
		Date endDate = DateUtils.parseDate(endTime, "yyyy-MM-dd HH:mm:ss");
		
		long totalNum =  blackAgentService.searchCount(id ,name, phone, remarks,operator, startDate, endDate);
		long totalPageNum = totalNum / limit;
		if (totalNum > totalPageNum * limit) totalPageNum++;
		if (page >= totalPageNum && totalPageNum != 0) page = totalPageNum - 1;
		Long start =page * limit;
		List<BlackAgent> blackAgentList = blackAgentService.searchList(id,name, phone, remarks,operator, startDate, endDate, start, limit);

		model.addAttribute("name", name);
		model.addAttribute("phone", phone);
		model.addAttribute("remarks", remarks);
		model.addAttribute("blackAgentList", blackAgentList);
		model.addAttribute("page", page);
		model.addAttribute("totalNum", totalNum);
		model.addAttribute("totalpage", totalPageNum);
		return "house/black/blackAgentList";
	}
	
	/**
	 * 插入
	 */
	@RequestMapping(value = "/insertBlackAgent")
	public @ResponseBody ResponseResult insertBlackAgent(HttpServletRequest request, String name, String phone, String remarks) throws IOException{
		
		if(StringUtils.isEmpty(name)) {
			return errorJson(EnumResCode.SERVER_ERROR.value(), "姓名不能为空！");
		}
		if(StringUtils.isEmpty(phone)) {
			return errorJson(EnumResCode.SERVER_ERROR.value(), "电话不能为空！");
		}

		HttpSession session = request.getSession();
		String operator = (String) session
				.getAttribute(SessionConstant.USER_NAME);
		
		BlackAgent blackagentInfo = blackAgentService.addBlackAgent(name, phone, remarks, operator);

		JSONObject result = new JSONObject();
		//result中保存要传给前台的参数
		result.put("id",blackagentInfo.getId().toString());
		result.put("name", blackagentInfo.getName());
		result.put("phone", blackagentInfo.getPhone());
		result.put("remarks", blackagentInfo.getRemarks());
		result.put("operator", blackagentInfo.getOperator());
		result.put("createtime", blackagentInfo.getCreatetime());
		result.put("updatetime", blackagentInfo.getUpdatetime());
		
		return successJson(result);
	}
	
	/**
	 * 编辑
	 */
	@RequestMapping(value = "/updateBlackAgent")
	public @ResponseBody ResponseResult updateBlackAgent(HttpServletRequest request, Long id, String name, String phone, String remarks) throws IOException{
		if(StringUtils.isEmpty(name)) {
			return errorJson(EnumResCode.SERVER_ERROR.value(), "姓名不能为空！");
		}
		if(StringUtils.isEmpty(phone)) {
			return errorJson(EnumResCode.SERVER_ERROR.value(), "电话不能为空！");
		}

		HttpSession session = request.getSession();
		String operator = (String) session
				.getAttribute(SessionConstant.USER_NAME);
		
		BlackAgent blackagentInfo = new BlackAgent(id, name, phone, remarks, operator);
        
		int updateNum = blackAgentService.updateBlackAgent(id, name, phone, remarks, operator);
		if (updateNum == 1) {
			blackagentInfo = blackAgentService.getById(id);
			if( blackagentInfo != null ){      
        	JSONObject result = new JSONObject();
    		//result中保存要传给前台的参数
        	result.put("id",blackagentInfo.getId().toString());
    		result.put("name", blackagentInfo.getName());
    		result.put("phone", blackagentInfo.getPhone());
    		result.put("remarks", blackagentInfo.getRemarks());
    		result.put("operator", blackagentInfo.getOperator());
    		result.put("createtime", blackagentInfo.getCreatetime());
    		result.put("updatetime", blackagentInfo.getUpdatetime());
        	return successJson(result);
        	}
		}
		return errorJson(EnumResCode.SERVER_ERROR.value(), "编辑失败！");
	}
	
	/**
	 * 删除
	 */
	@RequestMapping(value = "/deleteBlackAgent")
	public @ResponseBody ResponseResult deleteBlackAgent(HttpServletRequest request, Long id) throws IOException{
		    blackAgentService.deleteBlackAgent(id);
			JSONObject result = new JSONObject();
			result.put("id", id);
			return successJson(result);
	}
	
	
}
