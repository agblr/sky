package com.xmbl.ops.model.organization;

import java.util.Date;

import lombok.Data;
@Data
public class UserLog {
    private Long id;

    private String loginName;

    private String loginIp;

    public Long getId() {
		return id;
	}
	public String getLoginName() {
		return loginName;
	}
	public String getLoginIp() {
		return loginIp;
	}
	public Date getCreatetime() {
		return createtime;
	}
	public Date getUpdatetime() {
		return updatetime;
	}
	public String getOperation() {
		return operation;
	}
	public Byte getLogLevel() {
		return logLevel;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}
	public void setLoginIp(String loginIp) {
		this.loginIp = loginIp;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	public void setUpdatetime(Date updatetime) {
		this.updatetime = updatetime;
	}
	public void setOperation(String operation) {
		this.operation = operation;
	}
	public void setLogLevel(Byte logLevel) {
		this.logLevel = logLevel;
	}
	private Date createtime;

    private Date updatetime;

    private String operation;

    private Byte logLevel;
    
    public UserLog(){
 		super();
 	}
    public UserLog(String loginName, String loginIp,Date createtime, Date updatetime, String operation, Byte logLevel){
    	this.loginName = loginName;
    	this.loginIp = loginIp;
    	this.createtime = new Date();
    	this.updatetime = new Date();
    	this.operation = operation;
    	this.logLevel = logLevel;
 	}
}