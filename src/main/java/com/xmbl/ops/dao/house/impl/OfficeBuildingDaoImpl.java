package com.xmbl.ops.dao.house.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.IOfficeBuildingDao;
import com.xmbl.ops.model.house.OfficeBuilding;

@Repository
public class OfficeBuildingDaoImpl extends EntityDaoMPDBImpl<OfficeBuilding> implements IOfficeBuildingDao{
    
	
	@Override
	public long searchCount(Long id, String address, String location, String poitype, String realaddress, String areaid, Integer status) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("address", address);
		para.put("location", location);
		para.put("poitype", poitype);
		para.put("realaddress", realaddress);
		para.put("areaid", areaid);
		para.put("status", status);
		long count = getSqlSessionTemplate().selectOne(getNameSpace() + ".searchCount", para);
		return count;
	}
	
	@Override
	public List<OfficeBuilding> searchList(Long id, String address, String location, String poitype, String realaddress, String areaid, Integer status, 
			Long page, int limit){
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("address", address);
		para.put("location", location);
		para.put("poitype", poitype);
		para.put("realaddress", realaddress);
		para.put("areaid", areaid);
		para.put("status", status);
		para.put("offset", page);
		para.put("limit", limit);
		List<OfficeBuilding> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}
	
	@Override
	public int deleteOfficeBuilding(Long id, Integer status, String operator) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("status", status);
		para.put("operator", operator);
		para.put("updateTime", new Date());
		int count = getSqlSessionTemplate().update(getNameSpace() + ".updateOfficeBuildingInfoById", para);
		return count;
	}

}
