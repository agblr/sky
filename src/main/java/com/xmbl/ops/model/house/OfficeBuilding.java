package com.xmbl.ops.model.house;

import java.util.Date;

import lombok.Data;
@Data
public class OfficeBuilding {
    private Long id;

    private String address;

    private String location;

    private String poitype;

    private String realaddress;

    private String areaid;

    private Integer status;

    private String remarks;

    private String operator;

    private Date createtime;

    private Date updatetime;

   public OfficeBuilding(){
	   super();
   }
   public OfficeBuilding(Long id, String address, String location, String poitype, String realaddress, String areaid, String remarks, Integer status
			, String operator, Date updateTime){
	   this.id = id;
	   this.address = address;
	   this.location = location;
	   this.poitype = poitype; 
	   this.realaddress = realaddress;
	   this.areaid = areaid;
	   this.remarks = remarks;
	   this.status = status;
	   this.operator = operator;
	   this.updatetime = updateTime;
   }
   public OfficeBuilding(String address, String location, String poitype, String realaddress, String areaid, String remarks, Integer status
			, String operator, Date createTime, Date updateTime){
	   this.address = address;
	   this.location = location;
	   this.poitype = poitype; 
	   this.realaddress = realaddress;
	   this.areaid = areaid;
	   this.remarks = remarks;
	   this.status = status;
	   this.operator = operator;
	   this.createtime = createTime;
	   this.updatetime = updateTime;
  }
}