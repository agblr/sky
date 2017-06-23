package com.xmbl.ops.service.house;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.house.ICustomerDao;
import com.xmbl.ops.model.house.Customer;




@Service
public class CustomerService {
	
	@Resource
	ICustomerDao customerDao;

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
	
	public Customer insertSelective(Customer customer) {
		return customerDao.insertSelective(customer);
	}

}
