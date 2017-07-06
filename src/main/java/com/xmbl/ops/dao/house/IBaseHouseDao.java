package com.xmbl.ops.dao.house;

import java.util.Date;
import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.BaseHouse;


public interface IBaseHouseDao extends IEntityDao<BaseHouse>{

	public long searchCount(Long id,String title,Integer type,
		    String housename,Integer tradetype,Double price,
		    Double rental,Double unitprice,Integer rentalpricetype,
		    Integer floor,Integer room,Double acreage,String orientation,
		    String officetag,String officetype, String paymentmethod,
		    String seemethod,String source,String iskey,String remarks,
		    String founder,String owner,String ownerphone,
		    String propertycompany,String propertphone,String operator,Date startDate,Date endDate);
	
	public List<BaseHouse> searchList(Long id,String title,Integer type,
		    String housename,Integer tradetype,Double price,
		    Double rental,Double unitprice,Integer rentalpricetype,
		    Integer floor,Integer room,Double acreage,String orientation,
		    String officetag,String officetype, String paymentmethod,
		    String seemethod,String source,String iskey,String remarks,
		    String founder,String owner,String ownerphone,
		    String propertycompany,String propertphone,String operator,Date startDate,Date endDate,
			Long page, int limit);
	
	public int deleteBaseHouse(Long id);
}
