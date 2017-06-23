package com.xmbl.ops.model.organization;

import java.util.Date;

import lombok.Data;


@Data
public class UserInfo {
	
	private Integer id;

    public Integer getId() {
		return id;
	}
	public String getUserKey() {
		return userKey;
	}
	public String getUserName() {
		return userName;
	}
	public String getUserMobile() {
		return userMobile;
	}
	public String getPassword() {
		return password;
	}
	public String getRole() {
		return role;
	}
	public String getGroupname() {
		return groupname;
	}
	public String getRoleName() {
		return roleName;
	}
	public String getEmail() {
		return email;
	}
	public Byte getStatus() {
		return status;
	}
	public Integer getLogLevel() {
		return logLevel;
	}
	public Integer getTeamId() {
		return teamId;
	}
	public Date getCreateTime() {
		return createTime;
	}
	public Date getUpdateTime() {
		return updateTime;
	}
	public String getOperator() {
		return operator;
	}
	public String getIdNumber() {
		return idNumber;
	}
	public String getBank() {
		return bank;
	}
	public String getProvince() {
		return province;
	}
	public String getCity() {
		return city;
	}
	public String getCounty() {
		return county;
	}
	public String getBankSubbranch() {
		return bankSubbranch;
	}
	public String getBankCard() {
		return bankCard;
	}
	public Integer getReadid() {
		return readid;
	}
	public String getStatusForShow() {
		return statusForShow;
	}
	public String getOrgName() {
		return orgName;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public void setUserKey(String userKey) {
		this.userKey = userKey;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public void setUserMobile(String userMobile) {
		this.userMobile = userMobile;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public void setGroupname(String groupname) {
		this.groupname = groupname;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setStatus(Byte status) {
		this.status = status;
	}
	public void setLogLevel(Integer logLevel) {
		this.logLevel = logLevel;
	}
	public void setTeamId(Integer teamId) {
		this.teamId = teamId;
	}
	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	public void setUpdateTime(Date updateTime) {
		this.updateTime = updateTime;
	}
	public void setOperator(String operator) {
		this.operator = operator;
	}
	public void setIdNumber(String idNumber) {
		this.idNumber = idNumber;
	}
	public void setBank(String bank) {
		this.bank = bank;
	}
	public void setProvince(String province) {
		this.province = province;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public void setCounty(String county) {
		this.county = county;
	}
	public void setBankSubbranch(String bankSubbranch) {
		this.bankSubbranch = bankSubbranch;
	}
	public void setBankCard(String bankCard) {
		this.bankCard = bankCard;
	}
	public void setReadid(Integer readid) {
		this.readid = readid;
	}
	public void setStatusForShow(String statusForShow) {
		this.statusForShow = statusForShow;
	}
	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	private String userKey;

    private String userName;

    private String userMobile;

    private String password;

    private String role;

    private String groupname;

	private String roleName;

    private String email;

    private Byte status;

    private Integer logLevel;

    private Integer teamId;

    private Date createTime;
 
    private Date updateTime;
    
    private String operator;
    
    
    private String idNumber;
    private String bank;
    private String province;
    private String city;
    private String county;
    private String bankSubbranch;
    private String bankCard;

    private Integer readid;

    private String statusForShow;

	private String orgName;

    public UserInfo() {
 		super();
 	}
    public UserInfo(String userKey, String userName, String idNumber, String bank,
    		String province, String city, String county,
    		String bankSubbranch, String bankCard, String password, Date updateTime,String operator) {
		this.userKey = userKey;
		this.userName = userName;
		this.idNumber = idNumber;
		this.bank = bank;
		this.province = province;
		this.city = city;
		this.county = county;
		this.bankSubbranch = bankSubbranch;
		this.bankCard = bankCard;
		this.password = password;
		this.updateTime= updateTime;
		this.operator= operator;		
	}
    public UserInfo(String userKey, String userName, String userMobile, String password,
    		String role, String groupname, Byte status,
    		Integer teamId, Date createTime ,Date updateTime,String operator) {
		this.userKey = userKey;
		this.userName = userName;
		this.userMobile = userMobile;
		this.password = password;
		this.role = role;
		this.groupname = groupname;
		this.status = status;
		this.teamId = teamId;
		this.createTime = createTime;
		this.updateTime= updateTime;
		this.operator= operator;
		
	}
    public UserInfo(Integer id ,String userKey, String userName,  String userMobile, String password,
    		String role, String groupname, Byte status,
    		Integer teamId, Date createTime ,Date updateTime,String operator) {
    	this.id = id;
		this.userKey = userKey;
		this.userName = userName;
		this.userMobile = userMobile;
		this.password = password;
		this.role = role;
		this.groupname = groupname;
		this.status = status;
		this.teamId = teamId;
		this.createTime = createTime;
		this.updateTime= updateTime;
		this.operator= operator;
	}

}