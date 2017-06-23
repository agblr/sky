package com.xmbl.ops.model.organization;

import java.util.Date;

import lombok.Data;


@Data
public class Role {
    
	private Long id;

    public Long getId() {
		return id;
	}

	public String getRoleName() {
		return roleName;
	}

	public String getRoleSign() {
		return roleSign;
	}

	public String getDescription() {
		return description;
	}

	public Byte getStatus() {
		return status;
	}

	public String getOperator() {
		return operator;
	}

	public Date getCreatetime() {
		return createtime;
	}

	public Date getUpdatetime() {
		return updatetime;
	}

	public Integer getHasRole() {
		return hasRole;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public void setRoleSign(String roleSign) {
		this.roleSign = roleSign;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setStatus(Byte status) {
		this.status = status;
	}

	public void setOperator(String operator) {
		this.operator = operator;
	}

	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}

	public void setUpdatetime(Date updatetime) {
		this.updatetime = updatetime;
	}

	public void setHasRole(Integer hasRole) {
		this.hasRole = hasRole;
	}

	private String roleName;

    private String roleSign;

    private String description;

    private Byte status;

    private String operator;

    private Date createtime;

    private Date updatetime;
    
    private Integer hasRole;
    
    
    public Role() {
		super();
    }
  
    public Role(String roleName, String roleSign, String description, Byte status, String operator,  Date date) {
    	this.roleName=roleName;
    	this.roleSign=roleSign;
    	this.description=description;
    	this.status=status;
    	this.operator=operator;
    	this.createtime=date;
    	this.updatetime=date;
    }
  
    public Role(Long id, String roleName, String roleSign, String description, Byte status, String operator,  Date date){
    	this.id=id;
	  	this.roleName=roleName;
	  	this.roleSign=roleSign;
	  	this.description=description;
	  	this.status=status;
	  	this.operator=operator;
	  	this.createtime=date;
	  	this.updatetime=date;
    }
}