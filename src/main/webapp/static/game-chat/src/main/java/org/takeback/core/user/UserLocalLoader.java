package org.takeback.core.user;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.takeback.core.controller.ConfigurableLoader;
import org.takeback.util.ApplicationContextHolder;

import java.util.List;

public class UserLocalLoader implements ConfigurableLoader<User> {
	private static final Logger log = LoggerFactory.getLogger(UserLocalLoader.class);
	private static final String UserQueryHQL = "from User a where a.id = :id and (a.status is null or a.status = '1')";
	private static final String UserRolesQueryHQL = "from UserRoleToken a where a.userid = :id";
	
	@Override
	public User load(String id) {
		SessionFactory sf = ApplicationContextHolder.getBean("sessionFactory", SessionFactory.class);
		Session ss = null;
		try{
			ss = sf.openSession();
			Query q = ss.createQuery(UserQueryHQL);
			q.setString("id", id);
			User user = (User) q.uniqueResult();
			if(user == null){
				return null;
			}
			q = ss.createQuery(UserRolesQueryHQL);
			q.setString("id", id);
			List<UserRoleToken> urs = q.list();
			for(UserRoleToken ur :urs){
				user.addUserRoleToken(ur);
			}
			return user;
		}
		catch(Exception e){
			log.error("load user " + id + " failed", e);
			return null;
		}
		finally{
			if(ss != null && ss.isOpen()){
				ss.close();
			}
		}
	}

}
