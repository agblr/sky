package com.xmbl.ops.dao.house.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.IOperatorLogDao;
import com.xmbl.ops.model.house.OperatorLog;


@Repository
public class OperatorLogDaoImpl extends EntityDaoMPDBImpl<OperatorLog> implements IOperatorLogDao {
	
	@Override
	public long searchCount(String userKey, Date startDate, Date endDate) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("userKey", userKey);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		long count = getSqlSessionTemplate().selectOne(getNameSpace() + ".searchCount", para);
		return count;
	}
	@Override
	public long searchCount(Long visitId) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("visitId", visitId);
		long count = getSqlSessionTemplate().selectOne(getNameSpace() + ".searchCountBYvisitId", para);
		return count;
	}
	
	@Override
	public List<OperatorLog> searchList(String userKey,  Date startDate, Date endDate,
			Long page, int limit) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("offset", page);
		para.put("limit", limit);
		para.put("userKey", userKey);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		List<OperatorLog> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}
	@Override
	public List<OperatorLog> searchList(Long visitId) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("visitId", visitId);
		List<OperatorLog> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchListBYvisitId", para);
		return results;
	}
	@Override
	public OperatorLog addOperatorLog(OperatorLog operatorLog){
		//插入新成员
		OperatorLog operatorLogs=insertSelective(operatorLog);
		return operatorLogs;
	}

	@Override
	public int updateOperatorLog(OperatorLog operatorLog) {
		//更新成员
		int count=updateIfNecessary(operatorLog);
		return count;
	}
}
