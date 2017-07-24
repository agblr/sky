package com.xmbl.ops.dao.house;

import java.util.Date;
import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.OperatorLog;


public interface IOperatorLogDao extends IEntityDao<OperatorLog>{

	long searchCount(String username, Date startDate, Date endDate);
	
	long searchCount(Long visitId);

	List<OperatorLog> searchList(Long visitId);
	
	List<OperatorLog> searchList(String username, Date startDate, Date endDate, Long page, int limit);
	
	public OperatorLog addOperatorLog(OperatorLog operatorLog);
	
	public int updateOperatorLog(OperatorLog userLog);
	
}
