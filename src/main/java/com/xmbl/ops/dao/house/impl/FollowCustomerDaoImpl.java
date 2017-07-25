package com.xmbl.ops.dao.house.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.IFollowCustomerDao;
import com.xmbl.ops.model.house.FollowCustomer;

@Repository
public class FollowCustomerDaoImpl extends EntityDaoMPDBImpl<FollowCustomer> implements IFollowCustomerDao{
    
	
	@Override
	public long searchCount(Long id, Long customerid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("customerid", customerid);
		para.put("content", content);
		para.put("status", status);
		para.put("followtype", followtype);
		para.put("operator", operator);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		long count = getSqlSessionTemplate().selectOne(getNameSpace() + ".searchCount", para);
		return count;
	}
	
	@Override
	public List<FollowCustomer> searchList(Long id, Long customerid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate,
			Long page, int limit){
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("customerid", customerid);
		para.put("content", content);
		para.put("status", status);
		para.put("followtype", followtype);
		para.put("operator", operator);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		para.put("offset", page);
		para.put("limit", limit);
		List<FollowCustomer> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}
	
	@Override
	public int deleteFollowCustomer(Long id) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		int count = getSqlSessionTemplate().update(getNameSpace() + ".deleteById", para);
		return count;
	}

}
