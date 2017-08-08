package com.xmbl.ops.model.house;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import lombok.Data;
@Data
public class OperatorLog {
    private Long id;

    private String visitid;

    private String content;

    private String type;

    private String operator;
    
    private String operatorName;

    private String createtime;

    private String remark;

    public OperatorLog(){
 		super();
 	}
    public OperatorLog( String visitid, String content, String type,
     String operator,String remark){
 	
    	this.visitid = visitid;
 	    
    	this.content =content;
    	
    	this.type =type;
    	
    	this.operator = operator;
    	Calendar now;
    	SimpleDateFormat fmt;

    	now = Calendar.getInstance();
    	fmt = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"); 
    	this.createtime = fmt.format(now.getTime());
    	
    	this.remark = remark;
    }
}