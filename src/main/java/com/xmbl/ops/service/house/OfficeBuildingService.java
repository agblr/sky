package com.xmbl.ops.service.house;

import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.house.IOfficeBuildingDao;
import com.xmbl.ops.model.house.OfficeBuilding;


@Service
public class OfficeBuildingService {

	@Resource
	IOfficeBuildingDao officeBuildingDao;
	
	
	public List<OfficeBuilding> searchList(Long id, String address, String location, String poitype, String realaddress, String areaid, Integer status,
			Long page, int limit) {
		List<OfficeBuilding> officeBuildingList = officeBuildingDao.searchList(id, address, location,  poitype, realaddress, areaid, status, page, limit);
		
		return officeBuildingList;
	}
	
		
	public long searchCount(Long id, String address, String location, String poitype, String realaddress, String areaid, Integer status) {
		return officeBuildingDao.searchCount(id, address, location,poitype,realaddress,areaid, status);
	}
	
	public OfficeBuilding addOfficeBuilding(String address, String location, String poitype, String realaddress, String areaid, String remarks, Integer status, String operator, Date createTime, Date updateTime) {
		OfficeBuilding officeBuildingInfo = new OfficeBuilding(address, location, poitype
				, realaddress, areaid, remarks, status, operator, createTime, updateTime);
		return officeBuildingDao.insertSelective(officeBuildingInfo);
	}
	
	public int updateOfficeBuilding(Long id, String address, String location, String poitype, String realaddress, String areaid, String remarks, Integer status
			, String operator, Date updateTime) {		
		OfficeBuilding officeBuildingInfo = new OfficeBuilding(id,address, location, poitype
				, realaddress, areaid, remarks, status, operator, updateTime);
		int count = officeBuildingDao.updateIfNecessary(officeBuildingInfo);
		return count;
	}
	
	public int deleteOfficeBuilding(Long id, Integer status, String operator) {
		int count = officeBuildingDao.deleteOfficeBuilding(id, status, operator);
		return count;
	}
	
	public OfficeBuilding getById(Long id){
		OfficeBuilding officeBuildingInfo = officeBuildingDao.getById(id);
		return officeBuildingInfo;
	}
	
}
