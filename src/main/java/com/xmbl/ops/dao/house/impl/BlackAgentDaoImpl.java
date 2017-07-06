package com.xmbl.ops.dao.house.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.IBlackAgentDao;
import com.xmbl.ops.model.house.BlackAgent;

@Repository
public class BlackAgentDaoImpl extends EntityDaoMPDBImpl<BlackAgent> implements IBlackAgentDao{
    
	
	@Override
	public long searchCount(Long id, String name, String phone, String remarks,String operator,Date startDate,Date endDate) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("name", name);
		para.put("phone", phone);
		para.put("remarks", remarks);
		para.put("operator", operator);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		long count = getSqlSessionTemplate().selectOne(getNameSpace() + ".searchCount", para);
		return count;
	}
	
	@Override
	public List<BlackAgent> searchList(Long id, String name, String phone, String remarks,
			String operator,Date startDate,Date endDate ,
			Long page, int limit){
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		para.put("name", name);
		para.put("phone", phone);
		para.put("remarks", remarks);
		para.put("operator", operator);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		para.put("offset", page);
		para.put("limit", limit);
		List<BlackAgent> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}
	
	@Override
	public int deleteBlackAgent(Long id) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", id);
		int count = getSqlSessionTemplate().update(getNameSpace() + ".deleteById", para);
		return count;
	}

}
