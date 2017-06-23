package com.xmbl.ops.dao.organization;

import java.util.Date;
import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.organization.UseRecord;


public interface IUseRecordDao extends IEntityDao<UseRecord>{

	long searchCount(Long proId, String userName, String applicationName, String adscriptionName,String proName, Integer proType, String proNum, Integer status,
			Date startDate, Date endDate);

	List<UseRecord> searchList(Long proId, String userName, String applicationName, String adscriptionName, String proName, Integer proType, String proNum, Integer status,
			Date startDate, Date endDate,
			Long page, int limit);
	
	public UseRecord getById(Long Id);
	
	public UseRecord getByUseName(Long proId, String useName, Integer status);
	
	public UseRecord addUseRecordInfo(UseRecord useRecordInfo);
	
	public int updateUseRecordInfoById(UseRecord useRecord);
	
	public int updateUseRecordInfoByProId(Long proId, Integer status);
}
