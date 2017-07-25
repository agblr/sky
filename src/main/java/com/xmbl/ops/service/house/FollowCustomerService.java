package com.xmbl.ops.service.house;


import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.house.IFollowCustomerDao;
import com.xmbl.ops.dao.organization.impl.UserInfoDaoImpl;
import com.xmbl.ops.enumeration.EnumFollowCustomerType;
import com.xmbl.ops.model.house.FollowCustomer;
import com.xmbl.ops.model.organization.UserInfo;

@Service
public class FollowCustomerService {

	@Resource
	IFollowCustomerDao followCustomerDao;
	@Resource
	UserInfoDaoImpl userInfoDao;
	
	private void setEnumFollowHouseType(FollowCustomer followCustomer) {
		Integer followtype = followCustomer.getFollowtype();
    	if(followtype != null) {
    		for(EnumFollowCustomerType EnumFollowCustomerTypes : EnumFollowCustomerType.values()) {
    			if(followtype.equals(Integer.valueOf(EnumFollowCustomerTypes.getId()))) {
    				followCustomer.setFollowtypeStr(EnumFollowCustomerTypes.getDesc());
    				break;
    			}
    		}
    	}
    }

	private void setUserName(FollowCustomer followCustomer) {
		String usename = followCustomer.getOperator();
    	if(usename != null) {
    		UserInfo userInfo = userInfoDao.selectOneByUserKey(usename);
    	    if(userInfo != null){
    	    	followCustomer.setOperatorName(userInfo.getUserName());
    	    }
    	}
    }
	
	public List<FollowCustomer> searchList(Long id, Long customerid,String content,Integer status,
			Integer followtype,String operator,Date startDate,Date endDate,
			Long page, int limit) {
		List<FollowCustomer> followCustomerList = followCustomerDao.searchList( id,  
				customerid, content, status, followtype, operator,startDate, endDate , page, limit);
		
		for(FollowCustomer followCustomer : followCustomerList) {
			setEnumFollowHouseType(followCustomer);
			setUserName(followCustomer);
		}
		
		return followCustomerList;
	}
	
		
	public long searchCount(Long id, Long customerid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate) {
		return followCustomerDao.searchCount( id,  
				customerid, content, status, followtype, operator,startDate, endDate);
	}
	
	public FollowCustomer addFollowCustomer(Long customerid,Date createtime,
			Date updatetime,Integer followtype,String operator, String follower, 
			String content,String remark,String reminder,Date remindtime,
			String remindcontent, Integer status) {
		FollowCustomer followHouseInfo = new FollowCustomer(customerid,createtime,updatetime,
				followtype,operator,follower,content,remark,
				reminder, remindtime, remindcontent, status);
		return followCustomerDao.insertSelective(followHouseInfo);
	}
	
	public int updateFollowCustomer(Long id,Long customerid,Date createtime,
			Date updatetime,Integer followtype,String operator, String follower, 
			String content,String remark,String reminder,Date remindtime,
			String remindcontent, Integer status) {		
		FollowCustomer followHouseInfo = new FollowCustomer(id,customerid,createtime,updatetime,
				followtype,operator,follower,content,remark,
				reminder, remindtime, remindcontent, status);
		int count = followCustomerDao.updateIfNecessary(followHouseInfo);
		return count;
	}
	
	public int deleteFollowCustomer(Long id) {
		int count = followCustomerDao.deleteFollowCustomer(id);
		return count;
	}
	
	public FollowCustomer getById(Long id){
		FollowCustomer followCustomerInfo = followCustomerDao.getById(id);
		return followCustomerInfo;
	}

	
}
