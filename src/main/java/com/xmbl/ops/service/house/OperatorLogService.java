package com.xmbl.ops.service.house;



import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.house.impl.OperatorLogDaoImpl;
import com.xmbl.ops.dao.organization.impl.UserInfoDaoImpl;
import com.xmbl.ops.model.house.OperatorLog;
import com.xmbl.ops.model.organization.UserInfo;

import javax.annotation.Resource;

import java.util.Date;
import java.util.List;

@Service
public class OperatorLogService {
	
	@Resource
	OperatorLogDaoImpl operatorLogDao;
	@Resource
	UserInfoDaoImpl userInfoDao;
	
	private void setUserName(OperatorLog operatorLog) {
		String usename = operatorLog.getOperator();
    	if(usename != null) {
    		UserInfo userInfo = userInfoDao.selectOneByUserKey(usename);
    	    if(userInfo != null){
    	    	operatorLog.setOperatorName(userInfo.getUserName());
    	    }
    	}
    }
	
	public long searchCount(String username, Date startDate, Date endDate) {
		return operatorLogDao.searchCount(username, startDate, endDate);
	}
	
	public long searchCount(Long visitId) {
		return operatorLogDao.searchCount(visitId);
	}
	
	public List<OperatorLog> searchList(Long visitId) {
		List<OperatorLog> operatorLogList = operatorLogDao.searchList(visitId);
		return operatorLogList;
	}
	
	public List<OperatorLog> searchList(String username, Date startDate, Date endDate,
			Long page, int limit) {
		List<OperatorLog> operatorLogList = operatorLogDao.searchList(username, startDate, endDate,
				page, limit);
		
		for(OperatorLog operatorLog: operatorLogList){
			setUserName(operatorLog);
		}
		return operatorLogList;
	}
	
	public OperatorLog insertOperatorLog(OperatorLog userlog){
		OperatorLog userlogs= operatorLogDao.addOperatorLog(userlog);
	   return userlogs;
   }

	public int updateIfNecessary(OperatorLog userlog) {
		int count= operatorLogDao.updateOperatorLog(userlog);
		return count;
	}

}