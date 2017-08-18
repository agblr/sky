package org.takeback.mvc.interceptor;

import com.google.common.collect.ImmutableMap;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
//import org.takeback.chat.store.user.User;
//import org.takeback.chat.store.user.UserStore;
import org.takeback.util.JSONUtils;
import org.takeback.util.annotation.AuthPassport;
import org.takeback.util.context.Context;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;

public class AuthInterceptor extends HandlerInterceptorAdapter {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthInterceptor.class);

//    @Autowired
//    private UserStore userStore;

    /**
     *
     * @param request
     * @param response
     * @param handler
     * @return
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (!handler.getClass().isAssignableFrom(HandlerMethod.class)) {
            return true;
        }
        AuthPassport authPassport = ((HandlerMethod) handler).getMethodAnnotation(AuthPassport.class);
        if (authPassport == null || !authPassport.value()) {
            return true;
        }
//        String uid = request.getHeader("x-access-uid");
//        if (uid == null || uid.equals("null")) {
//            writeAuthorizeFailResponse(response);
//            LOGGER.error("No x-access-uid found, failed to authorize.");
//            return false;
//        }
//        User user = userStore.get(Integer.valueOf(uid));
//        if (user == null) {
//            writeAuthorizeFailResponse(response);
//            LOGGER.error("User not found with id: {}, failed to authorize.", uid);
//            return false;
//        }
//        String token = request.getHeader("x-access-token");
//        if (token == null) {
//            writeAuthorizeFailResponse(response);
//            LOGGER.error("No x-access-token found, failed to authorize.");
//            return false;
//        }
//        if (!token.equals(user.getAccessToken())) {
//            writeAuthorizeFailResponse(response);
//            LOGGER.error("Token is not validate, failed to authorize.");
//            return false;
//        }
//        if (user.getTokenExpireTime().compareTo(new Date()) >= 0) {
//            if (request.getSession(true).getAttribute(Context.UID) == null) {
//                request.getSession().setAttribute(Context.UID, user.getId());
//            }
//            return true;
//        }
        writeAuthorizeFailResponse(response);
        return false;
    }

    /**
     *
     * @param response
     * @throws IOException
     */
    private void writeAuthorizeFailResponse(HttpServletResponse response) throws IOException {
        String json = JSONUtils.toString(ImmutableMap.of("code", 401, "msg", "请登录账号。"));
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(json);
    }
}
