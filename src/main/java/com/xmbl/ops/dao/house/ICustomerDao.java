package com.xmbl.ops.dao.house;

import java.util.Date;
import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.Customer;


public interface ICustomerDao extends IEntityDao<Customer> {
	
	public long searchCount(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate);
	
	public List<Customer> searchList(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate,  Long page, int limit);
	public long agentSearchCount(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate);
	
	public List<Customer> agentSearchList(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate,  Long page, int limit);

	
	public int deleteCustomer(Integer id);
}
