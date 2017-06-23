package com.xmbl.ops.dao.house;

import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.BaseCity;


public interface IBaseCityDao extends IEntityDao<BaseCity>{

	public List<BaseCity> findList(String provinceCode);
}
