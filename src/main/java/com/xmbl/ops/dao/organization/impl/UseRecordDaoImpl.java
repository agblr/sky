package com.xmbl.ops.dao.organization.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoImpl;
import com.xmbl.ops.dao.organization.IUseRecordDao;
import com.xmbl.ops.model.organization.UseRecord;


@Repository
public class UseRecordDaoImpl extends EntityDaoImpl<UseRecord> implements IUseRecordDao {
	
	@Override
	public long searchCount(Long proId, String userName, String applicationName, String adscriptionName,String proName, Integer proType, String proNum, Integer status,
			Date startDate, Date endDate) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("proid", proId);
		para.put("userName", userName);
		para.put("applicationName", applicationName);
		para.put("adscriptionName", adscriptionName);
		para.put("status", status);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		long count = getSqlSessionTemplate().selectOne(getNameSpace() + ".searchCount", para);
		return count;
	}
	
	@Override
	public List<UseRecord> searchList(Long proId, String userName, String applicationName, String adscriptionName,String proName, Integer proType, String proNum, Integer status,
			Date startDate, Date endDate, Long page, int limit) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("offset", page);
		para.put("limit", limit);
		para.put("proid", proId);
		para.put("userName", userName);
		para.put("applicationName", applicationName);
		para.put("adscriptionName", adscriptionName);
		para.put("status", status);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		List<UseRecord> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);		
		return results;
	}

	
	@Override
	public UseRecord getById(Long Id) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("Id", Id);
		UseRecord useRecord = getSqlSessionTemplate().selectOne(getNameSpace() + ".getById", para);		
		return useRecord;
	}
	@Override
	public UseRecord getByUseName(Long proId, String useName, Integer status) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("proId", proId);
		para.put("useName", useName);
		para.put("status", status);
		UseRecord useRecord = getSqlSessionTemplate().selectOne(getNameSpace() + ".getByUseName", para);		
		return useRecord;
	}
	@Override
	public UseRecord addUseRecordInfo(UseRecord useRecord){
		//插入
		UseRecord useRecordInfo=insertSelective(useRecord);
		return useRecordInfo;
	}
	
	@Override
	public int updateUseRecordInfoById(UseRecord useRecord) {
		//修改
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", useRecord.getId());
		para.put("proid", useRecord.getProId());
		para.put("userName", useRecord.getUserName());
		para.put("useAddress", useRecord.getUseAddress());
		para.put("applicationName", useRecord.getApplicationName());
		para.put("adscriptionName", useRecord.getAdscriptionName());
		para.put("status", useRecord.getUseStatus());
		para.put("startDate", useRecord.getStartTime());
		para.put("endDate", useRecord.getEndTime());
		int count = getSqlSessionTemplate().update(getNameSpace() + ".updateUseRecordInfoById", para);	
		return count;
	}
	@Override
	public int updateUseRecordInfoByProId(Long proId, Integer status) {
		//修改
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("proid", proId);
		para.put("status", status);
		para.put("endDate", new Date());
		int count = getSqlSessionTemplate().update(getNameSpace() + ".updateUseRecordInfoByProId", para);	
		return count;
	}
}
