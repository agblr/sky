package com.xmbl.ops.service.house;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.house.ICustomerDao;
import com.xmbl.ops.dao.organization.impl.UserInfoDaoImpl;
import com.xmbl.ops.model.house.BaseHouse;
import com.xmbl.ops.model.house.BlackAgent;
import com.xmbl.ops.model.house.Customer;
import com.xmbl.ops.model.organization.UserInfo;




@Service
public class CustomerService {
	
	@Resource
	ICustomerDao customerDao;

	
	@Resource
	UserInfoDaoImpl userInfoDao;
	private void setUserName(Customer customer) {
		String usename = customer.getOperator();
    	if(usename != null) {
    		UserInfo userInfo = userInfoDao.selectOneByUserKey(usename);
    	    if(userInfo != null){
    	    	customer.setOperatorName(userInfo.getUserName());
    	    }
    	}
    }
	
	public List<Customer> searchList(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate, Long page, int limit) {


		List<Customer> customerList = customerDao.searchList(id,usename,gender, mobile,
			     phone, nickname, qq,
			     wechat,  email, source,
			     address, status, 
			     remarks, operator,startDate, endDate, page, limit);

		return customerList;
	}
	
	public long searchCount(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate) {
	
		return customerDao.searchCount(id,usename,gender, mobile,
			     phone, nickname, qq,
			     wechat,  email, source,
			     address, status, 
			     remarks, operator,startDate, endDate);
	}
	
	public List<Customer> agentSearchList(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate, Long page, int limit) {


		List<Customer> customerList = customerDao.agentSearchList(id,usename,gender, mobile,
			     phone, nickname, qq,
			     wechat,  email, source,
			     address, status, 
			     remarks, operator,startDate, endDate, page, limit);
		for(Customer customer: customerList){
		   setUserName(customer);
		}
		return customerList;
	}
	
	public long agentSearchCount(Integer id,String usename, String gender,String  mobile,
		    String phone, String nickname,String qq,
		    String wechat, String email,String source,
		    String address,Integer status, 
		    String remarks,String operator,Date startDate,Date endDate) {
	
		return customerDao.agentSearchCount(id,usename,gender, mobile,
			     phone, nickname, qq,
			     wechat,  email, source,
			     address, status, 
			     remarks, operator,startDate, endDate);
	}
	
	public Customer insertSelective(Customer customer) {
		return customerDao.insertSelective(customer);
	}

	public int updateCustomer(Integer id, String usename,String gender,String mobile,
   	     String phone,String nickname,String qq,
   	     String wechat, String email,String source,
   	     String address,Integer status, 
   	     String remarks,String operator) {		
		Customer customerInfo = new Customer( id, usename,gender, mobile,
			     phone,nickname,qq,
			     wechat, email,source,
			     address,status, 
			     remarks,operator);
		int count = customerDao.updateIfNecessary(customerInfo);
		return count;
	}
	
	public int deleteCustomer(Integer id) {
		int count = customerDao.deleteCustomer(id);
		return count;
	}
	public Customer getById(Integer id){
		Customer customerInfo = customerDao.getById(id);
		return customerInfo;
	}
}
