package com.xmbl.ops.dao.house.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;
import com.xmbl.ops.dao.house.IBaseProvinceDao;
import com.xmbl.ops.model.house.BaseProvince;

@Repository
public class BaseProvinceDaoImpl extends EntityDaoMPDBImpl<BaseProvince> implements IBaseProvinceDao{
	@Override
	public List<BaseProvince> findList(){
		Map<String, Object> para = new HashMap<String, Object>();
		List<BaseProvince> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);
		return results;
	}

}
