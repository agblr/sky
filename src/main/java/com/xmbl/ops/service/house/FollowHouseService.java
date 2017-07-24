package com.xmbl.ops.service.house;


import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.house.IFollowHouseDao;
import com.xmbl.ops.dao.organization.impl.UserInfoDaoImpl;
import com.xmbl.ops.model.house.FollowHouse;
import com.xmbl.ops.model.organization.UserInfo;

@Service
public class FollowHouseService {

	@Resource
	IFollowHouseDao followHouseDao;
	@Resource
	UserInfoDaoImpl userInfoDao;
	
	

	public List<FollowHouse> searchList(Long id, Long houseid,String content,Integer status,
			Integer followtype,String operator,Date startDate,Date endDate,
			Long page, int limit) {
		List<FollowHouse> followHouseList = followHouseDao.searchList( id,  
				houseid, content, status, followtype, operator,startDate, endDate , page, limit);
		
		return followHouseList;
	}
	
		
	public long searchCount(Long id, Long houseid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate) {
		return followHouseDao.searchCount( id,  
				houseid, content, status, followtype, operator,startDate, endDate);
	}
	
	public FollowHouse addFollowHouse(Long houseid,Date createtime,
			Date updatetime,Integer followtype,String operator, String follower, 
			String content,String remark,String reminder,Date remindtime,
			String remindcontent, Integer status) {
		FollowHouse followHouseInfo = new FollowHouse(houseid,createtime,updatetime,
				followtype,operator,follower,content,remark,
				reminder, remindtime, remindcontent, status);
		return followHouseDao.insertSelective(followHouseInfo);
	}
	
	public int updateFollowHouse(Long id,Long houseid,Date createtime,
			Date updatetime,Integer followtype,String operator, String follower, 
			String content,String remark,String reminder,Date remindtime,
			String remindcontent, Integer status) {		
		FollowHouse followHouseInfo = new FollowHouse(id,houseid,createtime,updatetime,
				followtype,operator,follower,content,remark,
				reminder, remindtime, remindcontent, status);
		int count = followHouseDao.updateIfNecessary(followHouseInfo);
		return count;
	}
	
	public int deleteFollowHouse(Long id) {
		int count = followHouseDao.deleteFollowHouse(id);
		return count;
	}
	
	public FollowHouse getById(Long id){
		FollowHouse followHouseInfo = followHouseDao.getById(id);
		return followHouseInfo;
	}

	
}
