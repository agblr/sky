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
	public long searchCount(Long id, String name, String value) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("name", name);
		para.put("value", value);

		long count = getSqlSessionTemplate().selectOne(getNameSpace() + ".searchCount", para);
		return count;
	}
	
	@Override
	public List<BaseConfiguration> searchList(Long id, String name, String value, 
			Long page, int limit){
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("name", name);
		para.put("value", value);
		para.put("offset", page);
		para.put("limit", limit);
		List<BaseConfiguration> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}
	
	@Override
	public int deleteBaseConfiguration(Long id) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		int count = getSqlSessionTemplate().update(getNameSpace() + ".updateBaseConfigurationInfoById", para);
		return count;
	}

}
