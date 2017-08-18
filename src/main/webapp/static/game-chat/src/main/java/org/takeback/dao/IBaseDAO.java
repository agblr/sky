package org.takeback.dao;

import org.hibernate.Session;

public interface IBaseDAO {
	public Session getSession();
}