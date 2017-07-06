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
import com.xmbl.ops.model.house.BaseConfiguration;
import com.xmbl.ops.service.house.BaseConfigurationService;
import com.xmbl.ops.util.DateUtils;

@Controller
@RequestMapping(value = "/base/config")
public class BaseConfigurationController extends AbstractController{

	/*
	 * 基础配置表
	 */
	@Autowired
	protected BaseConfigurationService baseConfigurationService;
	
	private static int limit = 50;

	@RequestMapping(value = "/baseConfigurationInfoList")
	public String baseConfigurationInfoSearch(HttpServletRequest request, ModelMap model, Long id, String name, String value, Long page) throws Exception {
		page = page == null || page < 0 ? 0 : page;

		long totalNum =  baseConfigurationService.searchCount(id, name, value);
		long totalPageNum = totalNum / limit;
		if (totalNum > totalPageNum * limit) totalPageNum++;
		if (page >= totalPageNum && totalPageNum != 0) page = totalPageNum - 1;
		Long start =page * limit;
		List<BaseConfiguration> baseConfigurationList = baseConfigurationService.searchList(id, name, value, start, limit);

		model.addAttribute("id", id);
		model.addAttribute("name", name);
		model.addAttribute("value", value);
		model.addAttribute("baseConfigurationList", baseConfigurationList);
		model.addAttribute("page", page);
		model.addAttribute("totalNum", totalNum);
		model.addAttribute("totalpage", totalPageNum);
		return "house/base/baseConfigurationList";
	}
	
	/**
	 * 插入
	 */
	@RequestMapping(value = "/insertBaseConfiguration")
	public @ResponseBody ResponseResult insertBaseConfiguration(HttpServletRequest request, String name, String value) throws IOException{
		
		if(StringUtils.isEmpty(name)) {
			return errorJson(EnumResCode.SERVER_ERROR.value(), "名称不能为空！");
		}
		if(StringUtils.isEmpty(value)) {
			return errorJson(EnumResCode.SERVER_ERROR.value(), "值不能为空！");
		}

		HttpSession session = request.getSession();
		String operator = (String) session
				.getAttribute(SessionConstant.USER_NAME);
		Date date = new Date();
		
		BaseConfiguration baseConfigurationInfo = baseConfigurationService.addBaseConfiguration(name, value);

		JSONObject result = new JSONObject();
		//result中保存要传给前台的参数
		result.put("id",baseConfigurationInfo.getId().toString());
		result.put("name", baseConfigurationInfo.getName());
		result.put("phone", baseConfigurationInfo.getValue());
		
		return successJson(result);
	}
	
	/**
	 * 编辑
	 */
	@RequestMapping(value = "/updateValves")
	public @ResponseBody ResponseResult updateBlackagent(HttpServletRequest request, Integer id, String name, String phone, String explain) throws IOException{
		if (StringUtils.isNotEmpty(name)) {	
		HttpSession session = request.getSession();
		String operator = (String) session
				.getAttribute(SessionConstant.USER_NAME);
		Date date = new Date();
		
//		BlackAgent blackagentInfo = blackagentService.updateBlackagent(id, name, phone, explain, operator, null, DateUtils.formatDate(date));
//        if( blackagentInfo != null ){      
//        	JSONObject result = new JSONObject();
//    		//result中保存要传给前台的参数
//        	result.put("id",blackagentInfo.getId().toString());
//    		result.put("name", blackagentInfo.getName());
//    		result.put("phone", blackagentInfo.getPhone());
//    		result.put("explain", blackagentInfo.getExplain());
//    		result.put("operator", blackagentInfo.getOperator());
//    		result.put("createtime", blackagentInfo.getCreatetime());
//    		result.put("updatetime", blackagentInfo.getUpdatetime());
//        	return successJson(result);
//        	}
	    }
		return errorJson(EnumResCode.SERVER_ERROR.value(), "编辑失败！");
	}
	
	/**
	 * 删除
	 */
	@RequestMapping(value = "/deleBlackagent")
	public @ResponseBody ResponseResult deleteBlackagent(HttpServletRequest request, String id) throws IOException{
//		    blackagentService.deleBlackagent(id);
			JSONObject result = new JSONObject();
			result.put("id", id);
			return successJson(result);

	}
	
	
}
