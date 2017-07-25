package com.xmbl.ops.model.house;

import java.util.Date;

import lombok.Data;
@Data
public class FollowHouse {
    private Long id;

    private Long houseid;

    private Date createtime;

    private Date updatetime;

    private Integer followtype;
    
    private String followtypeStr;

    private String operator;
    
    private String operatorName;

    private String follower;
    
    private String followerName;

    private String content;

    private String remark;

    private String reminder;

    private Date remindtime;

    private String remindcontent;

    private Integer status;
    
    private String statusStr;

    public FollowHouse(){
    	super();
    }
    public FollowHouse(Long id,Long houseid,Date createtime,Date updatetime,Integer followtype,String operator, String follower, String content,String remark,String reminder,Date remindtime,String remindcontent, Integer status){
    
    	this.id= id;
    	this.houseid =houseid;
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
    public FollowHouse(Long houseid,Date createtime,Date updatetime,Integer followtype,String operator, String follower, String content,String remark,String reminder,Date remindtime,String remindcontent, Integer status){
    	this.houseid =houseid;
    	this.createtime = new Date();
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