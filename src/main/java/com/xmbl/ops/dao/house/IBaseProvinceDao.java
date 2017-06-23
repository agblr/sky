package com.xmbl.ops.dao.house;

import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.BaseProvince;


public interface IBaseProvinceDao extends IEntityDao<BaseProvince>{
	
	public List<BaseProvince> findList();

}
