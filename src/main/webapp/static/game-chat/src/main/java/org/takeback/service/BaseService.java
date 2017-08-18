package org.takeback.service;

import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.takeback.dao.BaseDAO;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service(value = "baseService")
public class BaseService {

	@Autowired
	protected BaseDAO dao;

	@Transactional(readOnly = true)
	public <T> List<T> findByHql(String hql, Map<String, Object> properties, int pageSize, int pageNo) {
		return dao.findByHqlPaging(hql, properties, pageSize, pageNo);
	}

	@Transactional(readOnly = true)
	public <T> List<T> find(Class<T> cls, Map<String, Object> properties, int pageSize, int pageNo, String orderInfo) {
		return dao.find(cls, properties, pageSize, pageNo, orderInfo);
	}

	@Transactional(readOnly = true)
	public <T> List<T> findByProperties(Class<T> cls, Map<String, Object> properties) {
		return dao.findByProperties(cls, properties);
	}

	@Transactional(readOnly = true)
	public <T> List<T> findByExample(Class<T> cls, T instance) {
		return dao.findByExample(cls, instance);
	}

	@Transactional(readOnly = true)
	public <T> List<T> findByProperty(Class<T> cls, String propertyName, Object value) {
		return dao.findByProperty(cls, propertyName, value);
	}

	@Transactional(readOnly = true)
	public <T> List<T> findByProperty(Class<T> cls, String propertyName, Object value, String orderInfo) {
		return dao.findByProperty(cls, propertyName, value,orderInfo);
	}

	@Transactional(readOnly = true)
	public <T> T get(Class<T> cls, Serializable id) {
		return dao.get(cls, id);
	}

	@Transactional(rollbackFor = Throwable.class)
	public <T> void update(Class<T> cls, T t) {
		dao.update(cls, t);
	}

	@Transactional(rollbackFor = Throwable.class)
	public <T> void merge(Class<T> cls, T t) {
		dao.merge(cls, t);
	}

	@Transactional(rollbackFor = Throwable.class)
	public <T> void delete(Class<T> cls, T t) {
		dao.delete(cls, t);
	}
	
	@Transactional(rollbackFor = Throwable.class)
	public <T> void save(Class<T> cls, T t) {
		dao.save(cls, t);
	}

	@Transactional(rollbackFor = Throwable.class)
	public int executeUpdate(String hql, Map<String, Object> pramas) {
		return dao.executeUpdate(hql, pramas);
	}

    @Transactional(readOnly = true)
    public <T> long count(Class<T> cls, Map<String, Object> properties) {
        return dao.count(cls,properties);
    }

    @Transactional(readOnly = true)
    public long count(String hql, Map<String,Object> map){
        return dao.count(hql, map);
    }

	@Transactional(readOnly = true)
	public <T> T getUnique(Class<T> cls, String propertyName, Object value){
		return dao.getUnique(cls, propertyName, value);
	}

	@Transactional(readOnly = true)
	public <T> Map entityPagingByProperties(Class<T> cls, Map<String, Object> properties, int pageSize, int pageNo, String orderInfo) {
		List<T> list = dao.find(cls, properties, pageSize, pageNo, orderInfo);
		long total = 0;
		if(list != null && list.size() > 0){
			total = dao.count(cls, properties);
		}

		HashMap result = new HashMap();
		result.put("data",list);
		result.put("total", total);
		return result;
	}

	@Transactional(readOnly = true)
	public <T> Map hqlPagingByProperties(String hql, Map<String, Object> properties, int pageSize, int pageNo, String orderInfo) {
		List<T> list = dao.findByHqlPaging(
				StringUtils.isNotEmpty(orderInfo) ? hql + " order by " + orderInfo : hql, properties, pageSize, pageNo);

		long total = 0 ;
		if(list != null && list.size() > 0){
			if(hql.indexOf("select ") != -1){
				total = dao.count(new StringBuffer("select count(*) ").append(hql.substring(hql.indexOf(" from "))).toString(), properties);
			}else{
				total = dao.count(new StringBuffer("select count(*) ").append(hql).toString(), properties);
			}
		}

		HashMap result = new HashMap();
		result.put("data",list);
		result.put("total", total);
		return result;
	}
}
