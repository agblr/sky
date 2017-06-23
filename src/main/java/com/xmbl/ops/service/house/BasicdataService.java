package com.xmbl.ops.service.house;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xmbl.ops.commons.domain.DataGridResultInfo;
import com.xmbl.ops.dao.house.IBaseCityDao;
import com.xmbl.ops.dao.house.IBaseDistrictDao;
import com.xmbl.ops.dao.house.IBaseProvinceDao;
import com.xmbl.ops.model.house.BaseCity;
import com.xmbl.ops.model.house.BaseDistrict;
import com.xmbl.ops.model.house.BaseProvince;

@Service
public class BasicdataService {
	@Resource
	IBaseCityDao baseCityDao;
	@Resource
	IBaseDistrictDao baseDistrictDao;
	@Resource
	IBaseProvinceDao baseProvinceDao;
	
	
	public List<BaseProvince> findProvince() {
		return baseProvinceDao.findList();
	}

	public List<BaseCity> findCity(String provinceCode) {
		return baseCityDao.findList(provinceCode);
	}

	public List<BaseDistrict> findDistrict(String cityCode) {
		return baseDistrictDao.findList(cityCode);
	}
}
