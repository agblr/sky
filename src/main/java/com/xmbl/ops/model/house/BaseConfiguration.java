package com.xmbl.ops.model.house;

import lombok.Data;

@Data
public class BaseConfiguration {
    private Long id;

    private String name;

    private String value;

    public BaseConfiguration() {
		super();
	}
    public BaseConfiguration(Long id, String name,String value) {
    	this.id = id;
		this.name = name;
		this.value = value;
	}
    
    public BaseConfiguration(String name,String value) {
    	this.name = name;
		this.value = value;
	}
}