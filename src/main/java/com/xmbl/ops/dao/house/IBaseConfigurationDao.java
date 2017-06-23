package com.xmbl.ops.dao.house;

import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.BaseConfiguration;


public interface IBaseConfigurationDao extends IEntityDao<BaseConfiguration>{

	public long searchCount(Long id, String address, String location, String poitype, String realaddress, String areaid, Integer status);
	
	public List<BaseConfiguration> searchList(Long id, String address, String location, String poitype, String realaddress, String areaid, Integer status, 
			Long page, int limit);
	
	public int deleteBaseConfiguration(Long id, Integer status, String operator);
}
