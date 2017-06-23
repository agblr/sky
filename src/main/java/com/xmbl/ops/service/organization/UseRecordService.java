package com.xmbl.ops.service.organization;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.organization.IUseRecordDao;
import com.xmbl.ops.enumeration.EnumAssetsStatus;
import com.xmbl.ops.model.organization.UseRecord;

@Service
public class UseRecordService {
	@Resource
	IUseRecordDao useRecordDao;

	private void setStatus(UseRecord useRecord) {
		Integer status = useRecord.getUseStatus();
    	if(status != null) {
    		for(EnumAssetsStatus Status : EnumAssetsStatus.values()) {
    			if(status.equals(Status.getId())) {
    				useRecord.setUseStatusForStr(Status.getDesc());
    				break;
    			}
    		}
    	}
    }
	
	public List<UseRecord> searchList(Long proId, String userName, String applicationName, String adscriptionName, String proName, Integer proType, String proNum, Integer status,
			Date startDate, Date endDate,
			Long page, int limit) {
		List<UseRecord> useRecordList = useRecordDao.searchList(proId, userName, applicationName, adscriptionName, proName, proType, proNum, status, startDate, endDate
				, page, limit);
		for(UseRecord useRecord:useRecordList){
			setStatus(useRecord);
		}
		
		return useRecordList;
	}

	public long searchCount( Long proId, String userName, String applicationName, String adscriptionName,String proName, Integer proType, String proNum, Integer status,
			Date startDate, Date endDate) {
		return useRecordDao.searchCount(proId, userName, applicationName, adscriptionName, proName, proType, proNum, status, startDate, endDate);
	}
	
	public UseRecord insertUseRecordInfo(UseRecord useRecord) {
			UseRecord useRecordInfo= useRecordDao.addUseRecordInfo(useRecord);
			return useRecordInfo;
	}
	
	public UseRecord getAssetsInfoById(Long Id) {
		UseRecord assets=useRecordDao.getById(Id);
		return assets;
	}
	
	public UseRecord getById(Long Id) {
		UseRecord assets=useRecordDao.getById(Id);
		return assets;
	}
	
	public UseRecord getByUseName(Long proId, String useName, Integer status) {
		UseRecord useRecord=useRecordDao.getByUseName(proId, useName, status);
		return useRecord;
	}
	
	
	public int updateUseRecordInfo(UseRecord useRecord) {
		int count = useRecordDao.updateUseRecordInfoById(useRecord);	 
		return count;
	}
	public int updateUseRecordInfoByProId(Long proId, Integer status) {
		int count = useRecordDao.updateUseRecordInfoByProId(proId, status);	 
		return count;
	}
	
}
