package org.takeback.core.service;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.takeback.core.dictionary.DictionaryController;
import org.takeback.core.user.User;
import org.takeback.core.user.UserController;
import org.takeback.util.BeanUtils;
import org.takeback.util.MD5StringUtil;
import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.exception.CodedBaseRuntimeException;

import java.util.List;
import java.util.Map;

/**
 * 关于用户和角色的所有操作
 */
@Service("authorityService")
public class AuthorityService extends MyListService{


    @Transactional
    @Override
    public void save(Map<String, Object> req) {
        String entityName = (String) req.get(ENTITYNAME);
        if (StringUtils.isEmpty(entityName)) {
            throw new CodedBaseRuntimeException(404, "missing entityName");
        }
        Map<String, Object> data = (Map<String, Object>) req.get("data");
        String cmd = (String) req.get(CMD);
        beforeProcessSaveData(data);
        try {
            Class<?> cls = Class.forName(entityName);
            User user = (User) ConversionUtils.convert(data, cls);
            String id = user.getId();
            String password = user.getPassword();
            if(!"******".equals(password)){
                user.setPassword(MD5StringUtil.MD5Encode(password));
            }
            if("update".equals(cmd)){
                User oUser = dao.get(User.class, id);
                if("******".equals(user.getPassword())){
                    user.setPassword(oUser.getPassword());
                }
                BeanUtils.copy(user, oUser);
                beforeSave(oUser);
                dao.getSession().update(oUser);
                DictionaryController.instance().reload("dic.users");
                UserController.instance().reload(id);
                return;
            }
            beforeSave(user);
            dao.getSession().save(user);
            DictionaryController.instance().reload("dic.users");
        } catch (ClassNotFoundException e) {
            throw new CodedBaseRuntimeException(510, "parse class["+entityName+"] failed");
        }

    }

    @Override
    protected void afterList(List<?> ls) {
        for(Object user:ls){
            ((User)user).setPassword("******");
        }
    }

    protected void afterLoad(Object entity) {
        ((User)entity).setPassword("******");
    }
}
