package com.xmbl.ops.dao.house.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.IBaseConfigurationDao;
import com.xmbl.ops.model.house.BaseConfiguration;

@Repository
public class BaseConfigurationDaoImpl extends EntityDaoMPDBImpl<BaseConfiguration> implements IBaseConfigurationDao{
    
	
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
	public List<BaseConfiguration> searchList(Long id, String address, String location, String poitype, String realaddress, String areaid, Integer status, 
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
		List<BaseConfiguration> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}
	
	@Override
	public int deleteBaseConfiguration(Long id, Integer status, String operator) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("status", status);
		para.put("operator", operator);
		para.put("updateTime", new Date());
		int count = getSqlSessionTemplate().update(getNameSpace() + ".updateBaseConfigurationInfoById", para);
		return count;
	}

}
