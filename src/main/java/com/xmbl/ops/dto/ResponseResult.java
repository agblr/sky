package com.xmbl.ops.dto;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class ResponseResult {
	private int status;
	private String msg;
	public int getStatus() {
		return status;
	}
	public String getMsg() {
		return msg;
	}
	public Object getResult() {
		return result;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public void setResult(Object result) {
		this.result = result;
	}
	private Object result;

}

