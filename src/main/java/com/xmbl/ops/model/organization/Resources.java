package com.xmbl.ops.model.organization;

import java.util.Date;

import lombok.Data;
@Data
public class Resources {

	private Integer id;

    public Integer getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public Integer getParentid() {
		return parentid;
	}

	public String getReskey() {
		return reskey;
	}

	public Integer getType() {
		return type;
	}

	public String getResurl() {
		return resurl;
	}

	public Integer getLevel() {
		return level;
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

	public Integer getPid() {
		return pid;
	}

	public ResourcesRole getResourcesRole() {
		return resourcesRole;
	}

	public Role getRole() {
		return role;
	}

	public String getLevelTree() {
		return levelTree;
	}

	public boolean isHasRole() {
		return hasRole;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setParentid(Integer parentid) {
		this.parentid = parentid;
	}

	public void setReskey(String reskey) {
		this.reskey = reskey;
	}

	public void setType(Integer type) {
		this.type = type;
	}

	public void setResurl(String resurl) {
		this.resurl = resurl;
	}

	public void setLevel(Integer level) {
		this.level = level;
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

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public void setResourcesRole(ResourcesRole resourcesRole) {
		this.resourcesRole = resourcesRole;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public void setLevelTree(String levelTree) {
		this.levelTree = levelTree;
	}

	public void setHasRole(boolean hasRole) {
		this.hasRole = hasRole;
	}

	private String name;

    private Integer parentid;

    private String reskey;

    private Integer type;

    private String resurl;

    private Integer level;

    private String description;

    private Byte status;

    private String operator;

    private Date createtime;

    private Date updatetime;

    private Integer pid;

    private ResourcesRole resourcesRole;
    
    private Role role;
    

    private String levelTree;//生成表示树
    
    private boolean hasRole;//对应角色权限有无
  
    
    public Resources(){
    	super();
    }
    
    public Resources(String operator, Integer id, String name, String resUrl, String resKey,
			Integer parentId, Byte status, Integer pid, Integer type, Integer level, String description){
    	this.id = id;
    	this.name = name;
    	this.parentid = parentId;
    	this.reskey = resKey;
    	this.type = type;
    	this.resurl = resUrl;
    	this.level = level;
    	this.description = description;
    	this.status = status;
    	this.createtime = new Date();
    	this.operator = operator;
    	this.pid = pid;
    }
    
    
}