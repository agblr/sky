package com.xmbl.ops.dao.house;

import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.OfficeBuilding;


public interface IOfficeBuildingDao extends IEntityDao<OfficeBuilding>{

	public long searchCount(Long id, String address, String location, String poitype, String realaddress, String areaid, Integer status);
	
	public List<OfficeBuilding> searchList(Long id, String address, String location, String poitype, String realaddress, String areaid, Integer status, 
			Long page, int limit);
	
	public int deleteOfficeBuilding(Long id, Integer status, String operator);
}
