package com.xmbl.ops.model.house;

import java.util.Date;

import lombok.Data;
@Data
public class BlackAgent {

	private Long id;

	private String name;

	private String phone;
	
	private String remarks;

	private Date createtime;

	private Date updatetime;

	private String operator;
	 
	public BlackAgent() {
		super();
	}
	public BlackAgent(Long id, String name,String phone,String remarks, String operator) {
		this.id = id;
		this.name = name;
		this.phone = phone;
		this.remarks = remarks;
		this.operator = operator;
		this.createtime = new Date();
		this.updatetime = new Date();
		this.operator = operator;
		this.updatetime = new Date();
	}
	public BlackAgent(String name,String phone,String remarks, String operator) {
		this.name = name;
		this.phone = phone;
		this.remarks = remarks;
		this.operator = operator;
		this.createtime = new Date();
		this.updatetime = new Date();
	}
}