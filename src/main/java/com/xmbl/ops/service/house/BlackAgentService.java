package com.xmbl.ops.service.house;


import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.house.IBlackAgentDao;
import com.xmbl.ops.model.house.BlackAgent;



@Service
public class BlackAgentService {

	@Resource
	IBlackAgentDao blackAgentDao;
	
	
	public List<BlackAgent> searchList(Long id, String name, String phone, String remarks,String operator,Date startDate,Date endDate,
			Long page, int limit) {
		List<BlackAgent> blackAgentList = blackAgentDao.searchList( id,  name,  phone,  remarks, operator, startDate, endDate, page, limit);
		
		return blackAgentList;
	}
	
		
	public long searchCount(Long id, String name, String phone, String remarks,String operator,Date startDate,Date endDate) {
		return blackAgentDao.searchCount(id,  name,  phone,  remarks, operator, startDate, endDate);
	}
	
	public BlackAgent addBlackAgent(String name,String phone,String remarks, String operator) {
		BlackAgent blackAgentInfo = new BlackAgent(name, phone, remarks,  operator);
		return blackAgentDao.insertSelective(blackAgentInfo);
	}
	
	public int updateBlackAgent(Long id, String name,String phone,String remarks, String operator) {		
		BlackAgent blackAgentInfo = new BlackAgent( id,  name, phone, remarks,  operator);
		int count = blackAgentDao.updateIfNecessary(blackAgentInfo);
		return count;
	}
	
	public int deleteBlackAgent(Long id) {
		int count = blackAgentDao.deleteBlackAgent(id);
		return count;
	}
	
	public BlackAgent getById(Long id){
		BlackAgent blackAgentInfo = blackAgentDao.getById(id);
		return blackAgentInfo;
	}

	
}
