package com.xmbl.ops.model.house;

import java.util.Date;

import lombok.Data;
@Data
public class BaseHouse {
    private Long id;

    private String title;

    private Integer type;

    private String typeStr;
    
    private String housename;

    private Integer tradetype;
    
    private String tradetypeStr;

    private Double price;

    private Double rental;

    private Double unitprice;

    private Integer rentalpricetype;

    private String rentalpricetypeStr;
    
    private Integer floor;

    private String room;

    private Double acreage;

    private String orientation;

    private String officetag;

    private String officetype;

    private String paymentmethod;

    private String seemethod;

    private String source;

    private String iskey;

    private String remarks;

    private String image;

    private Date createtime;

    private Date updatetime;

    private String operator;
    
    private String operatorName;

    private String founder;

    private String owner;

    private String ownerphone;

    private String propertycompany;

    private String propertphone;
    

    private Integer housestatus;

    private String housestatusStr;
    
    private Integer properties;

    private String propertiesStr;
    
    private Integer status;

    private String statusStr;
    
    private Integer isfollow;

    private String isfollowStr;
    
    private Integer follownum;

    private Integer seenum;

    private Integer followsee;
    
    private String followseeStr;
    public BaseHouse() {
		super();
	}
    
    public BaseHouse(Long id,String title,Integer type,
    String housename,Integer tradetype,Double price,
    Double rental,Double unitprice,Integer rentalpricetype,
    Integer floor,String room,Double acreage,String orientation,
    String officetag,String officetype, String paymentmethod,
    String seemethod,String source,String iskey,String remarks,
    String image, Date createtime,Date updatetime,String operator,
    String founder,String owner,String ownerphone,
    String propertycompany,String propertphone) {
        this.id = id;

        this.title = title;

        this.type = type;

        this.housename = housename;

        this.tradetype = tradetype;

        this.price = price;

        this.rental = rental;

        this.unitprice = unitprice;

        this.rentalpricetype = rentalpricetype;

        this.floor = floor;

        this.room = room;

        this.acreage = acreage;

        this.orientation = orientation;

        this.officetag = officetag;

        this.officetype = officetype;

        this.paymentmethod = paymentmethod;

        this.seemethod = seemethod;

        this.source = source;

        this.iskey = iskey;

        this.remarks = remarks;

        this.image = image;

        this.updatetime = new Date();

        this.operator = operator;

//        this.founder = operator;

        this.owner = owner;

        this.ownerphone = ownerphone;

        this.propertycompany = propertycompany;

        this.propertphone = propertphone;
	}
    
    public BaseHouse(String title,Integer type,
    String housename,Integer tradetype,Double price,
    Double rental,Double unitprice,Integer rentalpricetype,
    Integer floor,String room,Double acreage,String orientation,
    String officetag,String officetype, String paymentmethod,
    String seemethod,String source,String iskey,String remarks,
    String image, Date createtime,Date updatetime,String operator,
    String founder,String owner,String ownerphone,
    String propertycompany,String propertphone) {

        this.title = title;

        this.type = type;

        this.housename = housename;

        this.tradetype = tradetype;

        this.price = price;

        this.rental = rental;

        this.unitprice = unitprice;

        this.rentalpricetype = rentalpricetype;

        this.floor = floor;

        this.room = room;

        this.acreage = acreage;

        this.orientation = orientation;

        this.officetag = officetag;

        this.officetype = officetype;

        this.paymentmethod = paymentmethod;

        this.seemethod = seemethod;

        this.source = source;

        this.iskey = iskey;

        this.remarks = remarks;

        this.image = image;
        
        this.createtime = new Date();

        this.updatetime = new Date();

        this.operator = operator;

        this.founder = operator;

        this.owner = owner;

        this.ownerphone = ownerphone;

        this.propertycompany = propertycompany;

        this.propertphone = propertphone;
	}
}