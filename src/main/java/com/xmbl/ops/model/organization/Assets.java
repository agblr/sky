package com.xmbl.ops.model.organization;

import java.util.Date;

import lombok.Data;
@Data
public class Assets {
    private Long id;

    private String proname;

    private String pronum;

    private String proconfig;

    private Integer protype;

    private String protypeForStr;
    
    private String proprice;

    private Integer status;

    private String statusForStr;
    
    private String operator;

    private Date buyTime;

    private String channel;

    private Date createTime;

    private Date updateTime;

    private String prodes;
    
    private String department;
    
    private String unit;
    
    private UseRecord useRecord;
    
    public Assets() {
 		super();
 	}
    public Assets(String proname, String pronum, String proconfig, Integer protype, String proprice, Integer status, String operator, Date buyTime, String channel, String prodes, String department, String unit) {
 		this.proname = proname;
 		this.pronum = pronum;
 		this.proconfig = proconfig;
 		this.protype = protype;
 		this.proprice = proprice;
 		this.status = status;
 		this.operator = operator;
 		this.buyTime = buyTime;	
 		this.channel = channel;
 		this.prodes = prodes;
 		this.department = department;
 		this.createTime = new Date();
 		this.updateTime = new Date();	
 		this.unit = unit ;
 	}
    
    public Assets(Long id, String proname, String pronum, String proconfig, Integer protype, String proprice, Integer status, String operator, Date buyTime, String channel, String prodes, String department, String unit) {
 		this.id = id;
    	this.proname = proname;
 		this.pronum = pronum;
 		this.proconfig = proconfig;
 		this.protype = protype;
 		this.proprice = proprice;
 		this.status = status;
 		this.operator = operator;
 		this.buyTime = buyTime;	
 		this.channel = channel;
 		this.prodes = prodes;
 		this.updateTime = new Date();	
 		this.department = department;
 		this.unit = unit;
 	}
    
}