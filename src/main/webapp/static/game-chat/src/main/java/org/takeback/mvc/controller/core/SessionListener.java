package org.takeback.mvc.controller.core;

import com.google.common.collect.Maps;
import org.takeback.mvc.ServletUtils;

import javax.servlet.http.*;
import java.util.Map;

public class SessionListener implements HttpSessionListener, HttpSessionAttributeListener {

    public static final String Anonymous = "Anonymous";
    private static Map<String,Object> users = Maps.newConcurrentMap();

    public static Map<String, Object> getUsers() {
        return users;
    }

    @Override
    public void sessionCreated(HttpSessionEvent se) {
        HttpSession session = se.getSession();
        Object uid = session.getAttribute(ServletUtils.TOKEN) == null ? Anonymous: session.getAttribute(ServletUtils.TOKEN);
        users.put(session.getId(), uid);
    }

    @Override
    public void sessionDestroyed(HttpSessionEvent se) {
        HttpSession session = se.getSession();
        users.remove(session.getId());
    }

    @Override
    public void attributeAdded(HttpSessionBindingEvent se) {
        HttpSession session = se.getSession();
        if(session.getAttribute(ServletUtils.TOKEN) != null){
            users.put(session.getId(), session.getAttribute(ServletUtils.TOKEN));
        }
    }

    @Override
    public void attributeRemoved(HttpSessionBindingEvent se) {

    }

    @Override
    public void attributeReplaced(HttpSessionBindingEvent se) {
        attributeAdded(se);
    }
}
