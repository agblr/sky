package com.xmbl.ops.model.house;

import java.util.Date;

import lombok.Data;
@Data
public class FollowCustomer {
    private Long id;

    private Long customerid;

    private Date createtime;

    private Date updatetime;

    private Integer followtype;

    private String operator;

    private String follower;

    private String content;

    private String remark;

    private String reminder;

    private Date remindtime;

    private String remindcontent;

    private Integer status;
    public FollowCustomer(Long id,Long customerid,Date createtime,Date updatetime,Integer followtype,String operator, String follower, String content,String remark,String reminder,Date remindtime,String remindcontent, Integer status){
        
    	this.id= id;
    	this.customerid =customerid;
    	this.createtime = createtime;
    	this.updatetime = new Date();
    	this.followtype = followtype;
    	this.content = content;
    	this.remark = remark;
    	this.follower = follower;
    	this.reminder = reminder;
    	this.remindcontent = remindcontent;
    	this.remindtime = remindtime;
    	this.status = status;
    }
    public FollowCustomer(Long customerid,Date createtime,Date updatetime,Integer followtype,String operator, String follower, String content,String remark,String reminder,Date remindtime,String remindcontent, Integer status){
    	this.customerid =customerid;
    	this.createtime = createtime;
    	this.updatetime = new Date();
    	this.followtype = followtype;
    	this.content = content;
    	this.remark = remark;
    	this.follower = follower;
    	this.operator = operator;
    	this.reminder = reminder;
    	this.remindcontent = remindcontent;
    	this.remindtime = remindtime;
    	this.status = status;
    }
   
}