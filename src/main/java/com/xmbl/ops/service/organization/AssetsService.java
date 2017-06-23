package com.xmbl.ops.service.organization;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.organization.IAssetsDao;
import com.xmbl.ops.enumeration.EnumAssetsStatus;
import com.xmbl.ops.enumeration.EnumProType;
import com.xmbl.ops.model.organization.Assets;

@Service
public class AssetsService {
	@Resource
	IAssetsDao assetsDao;

	private void setStatus(Assets assets) {
		Integer status = assets.getStatus();
    	if(status != null) {
    		for(EnumAssetsStatus Status : EnumAssetsStatus.values()) {
    			if(status.equals(Status.getId())) {
    				assets.setStatusForStr(Status.getDesc());
    				break;
    			}
    		}
    	}
    }
	private void setPorType(Assets assets) {
		Integer proType = assets.getProtype();
    	if(proType != null) {
    		for(EnumProType ProType : EnumProType.values()) {
    			if(proType.equals(ProType.getId())) {
    				assets.setProtypeForStr(ProType.getDesc());
    				break;
    			}
    		}
    	}
    }
	public List<Assets> searchList(Long proId, String proName, Integer proType, String proNum, String useName, Integer status,
			Date startDate, Date endDate,
			Long page, int limit) {
		List<Assets> assetsList = assetsDao.searchList(proId, proName, proType, proNum, useName, status, startDate, endDate,
				page, limit);
		for(Assets assets:assetsList){
			setStatus(assets);
			setPorType(assets);
		}
		
		return assetsList;
	}

	public long searchCount( Long proId, String proName, Integer proType, String proNum, String useName, Integer status,
			Date startDate, Date endDate) {
		return assetsDao.searchCount(proId, proName, proType, proNum, useName, status, startDate, endDate);
	}
	
	public Assets insertAssetsInfo(Assets assets){
		  Assets assetsInfo= assetsDao.addAssetsInfo(assets);
		  return assetsInfo;
	}
	
	public Assets getAssetsInfoById(Long Id){
		Assets assets=assetsDao.getById(Id);
		return assets;
	}
	
	public Assets getById(Long Id){
		Assets assets=assetsDao.getById(Id);
		return assets;
	}
	
	public Assets getByProName(String proName){
		Assets assets=assetsDao.getByProName(proName);
		return assets;
	}
	
	
	public int updateAssetsInfo(Assets assets) {
		int count = assetsDao.updateAssetsInfoById(assets);	 
		return count;
	}
	
}
