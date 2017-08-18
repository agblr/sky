package org.takeback.core.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.takeback.core.user.User;
import org.takeback.core.user.UserRoleToken;
import org.takeback.dao.BaseDAO;

/**
 * Created by Administrator on 2015/12/17.
 */
@Service("initializeService")
public class InitializeService {

    @Autowired
    protected BaseDAO dao;

    @Transactional(readOnly = true)
    public Boolean queryInitialized() {
        long count = dao.count(User.class,null);
        return count > 0;
    }

    @Transactional
    public void initUser(User user,UserRoleToken role) {
        dao.save(User.class,user);
        dao.save(UserRoleToken.class,role);
    }

}
