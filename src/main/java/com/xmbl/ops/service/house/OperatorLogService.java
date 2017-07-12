package com.xmbl.ops.service.house;


import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.house.impl.OperatorLogDaoImpl;
import com.xmbl.ops.model.house.OperatorLog;

import javax.annotation.Resource;

import java.util.Date;
import java.util.List;

@Service
public class OperatorLogService {
	
	@Resource
	OperatorLogDaoImpl operatorLogDao;

	
	public long searchCount(String username, Date startDate, Date endDate) {
		return operatorLogDao.searchCount(username, startDate, endDate);
	}
	
	public List<OperatorLog> searchList(String username, Date startDate, Date endDate,
			Long page, int limit) {
		List<OperatorLog> userLogList = operatorLogDao.searchList(username, startDate, endDate,
				page, limit);
		return userLogList;
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