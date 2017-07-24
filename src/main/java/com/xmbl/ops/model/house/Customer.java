package com.xmbl.ops.model.house;


import java.util.Date;

import lombok.Data;
@Data
public class Customer {
    private Integer id;

    private String usename;

    private String gender;

    private String mobile;

    private String phone;

    private String nickname;

    private String qq;

    private String wechat;

    private String email;

    private String source;

    private String address;

    private Integer status;

    private Date createtime;

    private Date updatetime;

    private String remarks;

    private String operator;
    
    private String operatorName;

    public Customer() {
		super();
    }
    
    public Customer(String usename,String gender,String mobile,
     String phone,String nickname,String qq,
     String wechat, String email,String source,
     String address,Integer status, 
     String remarks,String operator) {
		this.usename = usename;
		this.gender = gender;
		this.mobile = mobile;
		this.phone = phone;
		this.nickname = nickname;
		this.qq = qq;
		this.wechat = wechat;
		this.email = email;
		this.source = source;
		this.address = address;
		this.status = status;
		this.remarks = remarks;
		this.operator = operator;
		this.createtime = new Date();
		this.updatetime = new Date();
    }
    
    public Customer(Integer id, String usename,String gender,String mobile,
    	     String phone,String nickname,String qq,
    	     String wechat, String email,String source,
    	     String address,Integer status, 
    	     String remarks,String operator) {
    	        this.id = id;
    			this.usename = usename;
    			this.gender = gender;
    			this.mobile = mobile;
    			this.phone = phone;
    			this.nickname = nickname;
    			this.qq = qq;
    			this.wechat = wechat;
    			this.email = email;
    			this.source = source;
    			this.address = address;
    			this.status = status;
    			this.remarks = remarks;
    			this.operator = operator;
    			this.updatetime = new Date();
    	    }
}