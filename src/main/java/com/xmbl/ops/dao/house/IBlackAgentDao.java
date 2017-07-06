package com.xmbl.ops.dao.house;

import java.util.Date;
import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.BlackAgent;


public interface IBlackAgentDao extends IEntityDao<BlackAgent>{

	public long searchCount(Long id, String name, String phone, String remarks,String operator,Date startDate,Date endDate);
	
	public List<BlackAgent> searchList(Long id, String name, String phone, String remarks,String operator,Date startDate,Date endDate,
			Long page, int limit);
	
	public int deleteBlackAgent(Long id);
}
