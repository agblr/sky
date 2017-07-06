package com.xmbl.ops.dao.house.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.ICustomerDao;
import com.xmbl.ops.model.house.Customer;

@Repository
public class CustomerDaoImpl extends EntityDaoMPDBImpl<Customer> implements ICustomerDao {
	@Override
	public long searchCount(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("usename", usename);
		para.put("gender", gender);
		para.put("mobile", mobile);
		para.put("phone", phone);
		para.put("nickname", nickname);
		para.put("qq", qq);
		para.put("wechat", wechat);
		para.put("email", email);
		para.put("source", source);
		para.put("address", address);
		para.put("remarks", remarks);
		para.put("status", status);
		para.put("operator", operator);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		long count = getSqlSessionTemplate().selectOne(
				getNameSpace() + ".searchCount", para);
		return count;
	}

	@Override
	public List<Customer> searchList(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate,  Long page, int limit) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("usename", usename);
		para.put("gender", gender);
		para.put("mobile", mobile);
		para.put("phone", phone);
		para.put("nickname", nickname);
		para.put("qq", qq);
		para.put("wechat", wechat);
		para.put("email", email);
		para.put("source", source);
		para.put("address", address);
		para.put("remarks", remarks);
		para.put("status", status);
		para.put("operator", operator);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		para.put("offset", page);
		para.put("limit", limit);
		List<Customer> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}

	@Override
	public int deleteCustomer(Integer id) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		int count = getSqlSessionTemplate().update(getNameSpace() + ".deleteById", para);
		return count;
	}
}


