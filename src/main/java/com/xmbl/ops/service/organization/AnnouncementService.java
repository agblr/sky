package com.xmbl.ops.service.organization;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.xmbl.ops.dao.organization.IAnnouncementDao;
import com.xmbl.ops.model.organization.Announcement;



@Service
public class AnnouncementService {
	
	@Resource
	IAnnouncementDao announcementDao;

	public List<Announcement> searchList(Integer status, Long page, int limit) {


		List<Announcement> announcementList = announcementDao.searchList(status, page, limit);

		return announcementList;
	}
	
	public long searchCount(Integer status) {
	
		return announcementDao.searchCount(status);
	}
	
	public Announcement insertSelective(Announcement announcement) {
		return announcementDao.insertSelective(announcement);
	}
	public Announcement getNewAnnouncement() {
		return announcementDao.getNewAnnouncement();
	}
	
	
	private boolean updateIfNecessary(Announcement announcement) {
		int updateNum = announcementDao.updateIfNecessary(announcement);
		if (updateNum == 1) {
			return true;
		} else {
			return false;
		}
	}
	public boolean updateAnnouncement(Announcement announcement) {
		return updateIfNecessary(announcement);
	}
}
