package com.xmbl.ops.dao.house.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.IBaseCityDao;
import com.xmbl.ops.model.house.BaseCity;

@Repository
public class BaseCityDaoImpl extends EntityDaoMPDBImpl<BaseCity> implements IBaseCityDao{
    
	@Override
	public List<BaseCity> findList(String provinceCode){
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("provinceCode", provinceCode);
		List<BaseCity> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}
}
