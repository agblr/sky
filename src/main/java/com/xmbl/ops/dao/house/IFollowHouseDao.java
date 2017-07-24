package com.xmbl.ops.dao.house;

import java.util.Date;
import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.house.FollowHouse;


public interface IFollowHouseDao extends IEntityDao<FollowHouse>{

	public long searchCount(Long id, Long houseid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate);
	
	public List<FollowHouse> searchList(Long id, Long houseid,String content,Integer status,Integer followtype,String operator,Date startDate,Date endDate,
			Long page, int limit);
	
	public int deleteFollowHouse(Long id);
}
