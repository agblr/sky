package org.takeback.mvc;

import org.springframework.web.util.WebUtils;
import org.takeback.util.context.Context;

import javax.servlet.http.HttpServletRequest;

public class ServletUtils {

    public static final String TOKEN = "$token";

    /**
     * 登录后将信息设置到session，要剔除相关机密信息
     * @param ka
     * @param request
     */
//    public static void setUserInfo(NwAccount ka,HttpServletRequest request){
//        ka.setPassword("******");
//        ka.setPaypassword(ka.getPaypassword()==null || "".equals(ka.getPaypassword())?null:"******");
//        WebUtils.setSessionAttribute(request, UserService.USER, ka);
//        WebUtils.setSessionAttribute(request, UserService.TOKEN, ka.getId());
//        WebUtils.setSessionAttribute(request, UserService.USERNAME, ka.getAccount());
//        WebUtils.setSessionAttribute(request, UserService.PHONENUMBER, ka.getPhonenumb().replaceAll("^(\\d{3})(\\d{4})(\\d{4})$", "$1****$3"));
//        if(ka.getIdcard()!=null){
//            WebUtils.setSessionAttribute(request, UserService.IDCARD, ka.getIdcard().replaceAll("^(\\d{5})(\\d+)(\\w{3})$", "$1**********$3"));
//        }else{
//            WebUtils.setSessionAttribute(request, UserService.IDCARD, null);
//        }
//
//        if(ka.getEmail()!=null){
//            WebUtils.setSessionAttribute(request, UserService.EMAIL, ka.getEmail().replaceAll("^(\\d{3})(\\d+)(\\w{9})$", "$1****$3"));
//        }
//        if(ka.getAccounttype()!=null){
//            WebUtils.setSessionAttribute(request, UserService.ACCOUNTTYPE, ka.getAccounttype());
//        }
//    }

    /**
     * 获得客户端的ip地址
     * @param request
     * @return
     */
    public static String getClientIP(HttpServletRequest request){
        String ip = request.getHeader("x-forwarded-for");
        if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || ip.equalsIgnoreCase("unknown")) {
            ip = request.getRemoteAddr();
        }
        return ip;
    }

    /**
     * 判断是不是登录已经过期
     * @param request
     * @return
     */
    public static boolean isLogonExpired(HttpServletRequest request){
        return WebUtils.getSessionAttribute(request, Context.UID) == null ||
                WebUtils.getSessionAttribute(request, Context.USER_ROLE_TOKEN) == null;
    }

}
