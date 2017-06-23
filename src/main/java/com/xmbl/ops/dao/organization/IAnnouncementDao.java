package com.xmbl.ops.dao.organization;

import java.util.List;

import com.xmbl.ops.dao.base.IEntityDao;
import com.xmbl.ops.model.organization.Announcement;

public interface IAnnouncementDao extends IEntityDao<Announcement> {
	
	public List<Announcement> searchList(Integer status, Long page, int limit);
	
	public long searchCount(Integer status);
	
	public Announcement insertSelective(Announcement announcement);
	
//	public Announcement updateIfNecessary(Announcement announcement);
	
	public Announcement getNewAnnouncement();
}
