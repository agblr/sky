package com.xmbl.ops.controller.organization;

import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.xmbl.ops.constant.AnnouncementStatusConstant;
import com.xmbl.ops.constant.SessionConstant;
import com.xmbl.ops.dto.ResponseResult;
import com.xmbl.ops.enumeration.EnumResCode;
import com.xmbl.ops.enumeration.EnumAnnouncementStatus;
import com.xmbl.ops.model.organization.Announcement;
import com.xmbl.ops.model.organization.UserInfo;
import com.xmbl.ops.service.organization.AnnouncementService;
import com.xmbl.ops.service.organization.UserInfoService;
import com.xmbl.ops.util.HasAdminRight;




@Controller
@RequestMapping(value = "/notice")
public class AnnouncementController extends AbstractController {

	private static final int limit = 10;

	@Autowired
	protected AnnouncementService announcementService;
	@Autowired
	protected UserInfoService userInfoService;
	//公告列表
	@RequestMapping(value = "/announcementList")
	public String announcementSearch(HttpServletRequest request, ModelMap model, Integer status, Long page) {
		try{
			HttpSession session = request.getSession();
			String groupName = (String) session.getAttribute(SessionConstant.GROUP_NAME);
			String userKey = (String) session.getAttribute(SessionConstant.USER_NAME);
			Boolean isread=null;
			String readid = null;
			String firstid = null;
			UserInfo userinfo = null;
			if (StringUtils.isNotEmpty(userKey)) {
				userinfo = userInfoService.getUserInfoByKey(userKey);			
			if( userinfo != null){
				Announcement announcement = announcementService.getNewAnnouncement();
				if( userinfo.getReadid() != null){
					readid = userinfo.getReadid().toString();
				}
				if (announcement != null){
					firstid=announcement.getId().toString();
					if(announcement.getId().equals(userinfo.getReadid())){
						isread=true;
					}else{
						isread=false;
					}
				}
			}	
			}
			page = page == null || page < 0 ? 0 : page;

			long totalNum = announcementService.searchCount(status);

			long totalPageNum = totalNum / limit;
			if(totalNum > totalPageNum * limit)
				totalPageNum++;
			if(page >= totalPageNum && totalPageNum != 0)
				page = totalPageNum - 1;
			List<Announcement> announcementList = announcementService.searchList(status, page * limit, limit);
			model.addAttribute("status", status);
			model.addAttribute("announcementList", announcementList);
			model.addAttribute("page", page);
			model.addAttribute("userKey", userKey);
			model.addAttribute("isread", isread);
			model.addAttribute("firstid", firstid);
			model.addAttribute("readid", readid);
			model.addAttribute("page", page);
			model.addAttribute("totalNum", totalNum);
			model.addAttribute("totalpage", totalPageNum);	
//			if(HasAdminRight.hasAdminRight(groupName)) {
//				return "management/announcementList";
//			}else{
//				return "management/notice";
//			}
			return "management/announcementList";
		}catch(Exception e){
			e.printStackTrace();
			return null;
		}
	}
//添加公告
	@RequestMapping(value = "/addAnnouncement")
	public @ResponseBody ResponseResult addAnnouncement(HttpServletRequest request, String text) {
		try {
			if (StringUtils.isEmpty(text))
				return errorJson(EnumResCode.SERVER_ERROR.value(), "内容参数异常");
//			text = new String(text.getBytes("ISO-8859-1"), "UTF-8");
			HttpSession session = request.getSession();
			String operator = (String) session.getAttribute(SessionConstant.USER_NAME);
			if(StringUtils.isNotEmpty(text))
				text = text.replaceAll("'&nbsp';", "&nbsp");
			Announcement announcement = new Announcement(AnnouncementStatusConstant.OPEN, text, operator, new Date());
			announcement = announcementService.insertSelective(announcement);
			if(announcement != null)
				return successJson();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return errorJson(EnumResCode.SERVER_ERROR.value(), "新增公告失败");
	}

	//删除公告
	@RequestMapping(value = "/deleAnnouncement")
	public @ResponseBody ResponseResult deleAnnouncement(HttpServletRequest request, Integer id ) {
		try {		
			if (id == null ) {
				return errorJson(EnumResCode.SERVER_ERROR.value(), "id参数异常");
			}
			HttpSession session = request.getSession();
			String operator = (String) session.getAttribute(SessionConstant.USER_NAME);	
			Announcement announcement = new Announcement(id ,AnnouncementStatusConstant.CLOSE, null, operator, new Date());
			boolean updateSuccess = announcementService.updateAnnouncement(announcement);
			if(updateSuccess)
				return successJson();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return errorJson(EnumResCode.SERVER_ERROR.value(), "修改公告失败");
	}
}
