package com.xmbl.ops.dao.house.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.IBaseDistrictDao;
import com.xmbl.ops.model.house.BaseDistrict;

@Repository
public class  BaseDistrictDaoImpl extends EntityDaoMPDBImpl<BaseDistrict> implements IBaseDistrictDao{
	@Override
	public List<BaseDistrict> findList(String cityCode){
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("cityCode", cityCode);
		List<BaseDistrict> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}
}
