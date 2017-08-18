package org.takeback.mvc.interceptor;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import org.springframework.web.util.WebUtils;
import org.takeback.mvc.listener.SessionListener;
import org.takeback.util.context.Context;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

public class LimitOneClientOnlineInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Object uid = WebUtils.getSessionAttribute(request, Context.UID);
        if(uid != null && uid instanceof Integer){
            int userId = (Integer)uid;
            List<String> sessionIds =  SessionListener.getUser(userId);
            if(sessionIds != null && sessionIds.size() > 1){
                String sid = WebUtils.getSessionId(request);
                if(sid.equals(sessionIds.get(0))){
                    request.getSession().invalidate();
                }
            }
        }
        return true;
    }
}
