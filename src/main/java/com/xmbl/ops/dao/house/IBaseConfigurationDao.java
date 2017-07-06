package com.xmbl.ops.dao.house;

import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.BaseConfiguration;


public interface IBaseConfigurationDao extends IEntityDao<BaseConfiguration>{

	public long searchCount(Long id, String name, String value);
	
	public List<BaseConfiguration> searchList(Long id, String name, String value, 
			Long page, int limit);
	
	public int deleteBaseConfiguration(Long id);
}
