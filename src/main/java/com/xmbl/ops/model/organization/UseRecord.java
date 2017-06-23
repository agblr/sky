package com.xmbl.ops.model.organization;

import java.util.Date;

import lombok.Data;
@Data
public class UseRecord {
    private Long id;

    private Long proId;

    private String userName;

    private Integer useStatus;
    
    private String useStatusForStr;

    private String useAddress;

    private String applicationName;

    private String adscriptionName;

    private String operators;

    private Date startTime;

    private Date endTime;
    
    private Assets assets;

    public UseRecord() {
 		super();
 	}
    public UseRecord(Long proId,String userName,Integer useStatus,String useAddress, String applicationName, String adscriptionName, String operators) {
 		this.proId = proId;
 		this.userName = userName;
 		this.useStatus = useStatus;
 		this.useAddress = useAddress;
 		this.applicationName = applicationName;
 		this.adscriptionName = adscriptionName;
 		this.operators = operators;
 		this.startTime = new Date();
 	}
    public UseRecord(Long id, Long proId,String userName,Integer useStatus,String useAddress, String applicationName, String adscriptionName, String operators) {
 		this.id = id;
    	this.proId = proId;
 		this.userName = userName;
 		this.useStatus = useStatus;
 		this.useAddress = useAddress;
 		this.applicationName = applicationName;
 		this.adscriptionName = adscriptionName;
 		this.operators = operators;
 		this.endTime = new Date();
 	}
}