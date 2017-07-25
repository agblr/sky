package com.xmbl.ops.dao.house;

import java.util.Date;
import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.FollowCustomer;


public interface IFollowCustomerDao extends IEntityDao<FollowCustomer>{

	public long searchCount(Long id, Long customerid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate);
	
	public List<FollowCustomer> searchList(Long id, Long customerid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate,
			Long page, int limit);
	
	public int deleteFollowCustomer(Long id);
}
