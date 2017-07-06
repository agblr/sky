package com.xmbl.ops.service.house;


import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.house.IBaseConfigurationDao;
import com.xmbl.ops.model.house.BaseConfiguration;



@Service
public class BaseConfigurationService {

	@Resource
	IBaseConfigurationDao baseConfigurationDao;
	
	
	public List<BaseConfiguration> searchList(Long id, String name, String value,
			Long page, int limit) {
		List<BaseConfiguration> baseConfigurationList = baseConfigurationDao.searchList( id,  name,  value, page, limit);
		
		return baseConfigurationList;
	}
	
		
	public long searchCount(Long id, String name, String value) {
		return baseConfigurationDao.searchCount(id,  name,  value);
	}
	
	public BaseConfiguration addBaseConfiguration(String name,String value) {
		BaseConfiguration baseConfigurationInfo = new BaseConfiguration(name, value);
		return baseConfigurationDao.insertSelective(baseConfigurationInfo);
	}
	
	public int updateBaseConfiguration(Long id, String name,String value) {		
		BaseConfiguration baseConfigurationInfo = new BaseConfiguration( id,  name, value);
		int count = baseConfigurationDao.updateIfNecessary(baseConfigurationInfo);
		return count;
	}
	
	public int deleteBaseConfiguration(Long id ) {
		int count = baseConfigurationDao.deleteBaseConfiguration(id);
		return count;
	}
	
	public BaseConfiguration getById(Long id){
		BaseConfiguration baseConfigurationInfo = baseConfigurationDao.getById(id);
		return baseConfigurationInfo;
	}


	
}
