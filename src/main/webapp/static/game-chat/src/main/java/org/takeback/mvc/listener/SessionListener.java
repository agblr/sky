package org.takeback.mvc.listener;

import com.google.common.collect.Lists;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.takeback.util.context.Context;

import javax.servlet.http.HttpSessionAttributeListener;
import javax.servlet.http.HttpSessionBindingEvent;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class SessionListener implements HttpSessionListener, HttpSessionAttributeListener {

    private static final Logger log = LoggerFactory.getLogger(SessionListener.class);
    private static Map<Integer, List<String>> users = Maps.newConcurrentMap();

    public static Map<Integer, List<String>> getUsers() {
        return Collections.unmodifiableMap(users);
    }

    public static List<String> getUser(int uid){
        return getUsers().get(uid);
    }

    public static int getOnlineNumber(){
        int c = 0;
        for(List<String> sids:users.values()){
            c += sids.size();
        }
        return c;
    }

    public static boolean isOnline(Integer uid){
        if(users.get(uid)!=null){
            return true ;
        }
        return false ;
    }

    private void login(int uid, String sid){
        List<String> sids = users.get(uid);
        if(sids == null){
            sids = Lists.newCopyOnWriteArrayList();
            users.put(uid, sids);
        }
        if (!sids.contains(sid)) {
            sids.add(sid);
        }
        log.info("user {} login with session id {}, he login from {} place, online users is {} now", uid ,sid, sids.size(), getOnlineNumber());
    }

    private void logout(int uid, String sid){
        List<String> sids = users.get(uid);
        if(sids != null){
            sids.remove(sid);
            if(sids.size() == 0){
                users.remove(uid);
            }
        }
        log.info("user {} left, online users is {} now", uid, getOnlineNumber());
    }

    @Override
    public void attributeAdded(HttpSessionBindingEvent se) {
        if(Context.UID.equals(se.getName())){
            int uid = (int) se.getValue();
            String sid = se.getSession().getId();
            login(uid, sid);
        }
    }

    @Override
    public void attributeReplaced(HttpSessionBindingEvent se) {
        attributeAdded(se);
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent se) {

    }

    @Override
    public void sessionCreated(HttpSessionEvent se) {

    }

    @Override
    public void attributeRemoved(HttpSessionBindingEvent se) {
        if(Context.UID.equals(se.getName())){
            int uid = (int) se.getValue();
            String sid = se.getSession().getId();
            logout(uid, sid);
        }
    }
}
