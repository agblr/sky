package com.xmbl.ops.dao.house;

import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.BaseDistrict;


public interface IBaseDistrictDao extends IEntityDao<BaseDistrict>{
	
	public List<BaseDistrict> findList(String cityCode);
}
