package com.xmbl.ops.dao.organization;

import java.util.Date;
import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.organization.Assets;



public interface IAssetsDao extends IEntityDao<Assets>{

	long searchCount(Long proId, String proName, Integer proType, String proNum, String useName, Integer status,
			Date startDate, Date endDate);

	List<Assets> searchList(Long proId, String proName, Integer proType, String proNum, String useName, Integer status,
			Date startDate, Date endDate,
			Long page, int limit);
	
	public Assets getById(Long Id);
	
	public Assets getByProName(String proName);
	
	public Assets addAssetsInfo(Assets assetsInfo);
	
	public int updateAssetsInfoById(Assets assets);

}
