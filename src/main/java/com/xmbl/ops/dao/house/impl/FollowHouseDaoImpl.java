package com.xmbl.ops.dao.house.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.IFollowHouseDao;
import com.xmbl.ops.model.house.FollowHouse;

@Repository
public class FollowHouseDaoImpl extends EntityDaoMPDBImpl<FollowHouse> implements IFollowHouseDao{
    
	
	@Override
	public long searchCount(Long id, Long houseid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("houseid", houseid);
		para.put("content", content);
		para.put("status", status);
		para.put("followtype", followtype);
		para.put("operator", operator);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		long count = getSqlSessionTemplate().selectOne(getNameSpace() + ".searchCount", para);
		return count;
	}
	
	@Override
	public List<FollowHouse> searchList(Long id, Long houseid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate,
			Long page, int limit){
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("houseid", houseid);
		para.put("content", content);
		para.put("status", status);
		para.put("followtype", followtype);
		para.put("operator", operator);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		para.put("offset", page);
		para.put("limit", limit);
		List<FollowHouse> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}
	
	@Override
	public int deleteFollowHouse(Long id) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		int count = getSqlSessionTemplate().update(getNameSpace() + ".deleteById", para);
		return count;
	}

}
