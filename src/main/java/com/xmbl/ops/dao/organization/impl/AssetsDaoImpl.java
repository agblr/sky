package com.xmbl.ops.dao.organization.impl;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;
import com.xmbl.ops.dao.organization.IAssetsDao;
import com.xmbl.ops.model.organization.Assets;
import com.xmbl.ops.dao.base.EntityDaoMPDBImpl;

@Repository
public class AssetsDaoImpl extends EntityDaoMPDBImpl<Assets> implements IAssetsDao {
	
	@Override
	public long searchCount(Long proId, String proName, Integer proType, String proNum, String useName, Integer status,
			Date startDate, Date endDate) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", proId);
		para.put("proName", proName);
		para.put("proType", proType);
		para.put("proNum", proNum);
		para.put("useName", useName);
		para.put("status", status);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		long count = getSqlSessionTemplate().selectOne(getNameSpace() + ".searchCount", para);
		return count;
	}
	
	@Override
	public List<Assets> searchList(Long proId, String proName, Integer proType, String proNum, String useName, Integer status,
			Date startDate, Date endDate,
			Long page, int limit) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("offset", page);
		para.put("limit", limit);
		para.put("id", proId);
		para.put("proName", proName);
		para.put("proType", proType);
		para.put("proNum", proNum);
		para.put("useName", useName);
		para.put("status", status);
		para.put("startDate", startDate);
		para.put("endDate", endDate);
		List<Assets> results = getSqlSessionTemplate().selectList(getNameSpace() + ".searchList", para);		
		return results;
	}

	
	@Override
	public Assets getById(Long Id) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("Id", Id);
		Assets assets = getSqlSessionTemplate().selectOne(getNameSpace() + ".getById", para);		
		return assets;
	}
	@Override
	public Assets getByProName(String proName) {
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("proName", proName);
		Assets assets = getSqlSessionTemplate().selectOne(getNameSpace() + ".getByProName", para);		
		return assets;
	}
	@Override
	public Assets addAssetsInfo(Assets assets){
		//插入
		Assets assetsInfo=insertSelective(assets);
		return assetsInfo;
	}
	
	@Override
	public int updateAssetsInfoById(Assets assets) {
		//修改
		Map<String, Object> para = new HashMap<String, Object>();
		para.put("id", assets.getId());
		para.put("proname", assets.getProname());
		para.put("pronum", assets.getPronum());
		para.put("proconfig", assets.getProconfig());
		para.put("protype", assets.getProtype());
		para.put("proprice", assets.getProprice());
		para.put("status", assets.getStatus());
		para.put("operator", assets.getOperator());	
		para.put("buyTime", assets.getBuyTime());
		para.put("channel", assets.getChannel());		
		para.put("updateTime", new Date());
		para.put("prodes", assets.getProdes());
		para.put("department", assets.getDepartment());
		para.put("unit", assets.getUnit());
		
		int count = getSqlSessionTemplate().update(getNameSpace() + ".updateAssetsInfoById", para);	
		return count;
	}

}
