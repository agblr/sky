package org.takeback.core.user;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.common.collect.Maps;
import org.apache.commons.lang3.StringUtils;
import org.takeback.core.controller.support.AbstractConfigurable;

import java.sql.Timestamp;
import java.util.Collection;
import java.util.Date;
import java.util.Map;

public class User extends AbstractConfigurable{
    private static final long serialVersionUID = 3175037043404273987L;
    public static final String DEFAULT_AVATAR = "avatar/default.jpg";
    private Map<Long, UserRoleToken> roles = Maps.newConcurrentMap();

    private String password;
    private String name;
    private String phonenumb;
    private String email;
    private String avatar;
    private Timestamp registertime;
    private Timestamp lastsignintime;
    private String lastsigninip;
    private String status;

    public String getPhonenumb() {
        return phonenumb;
    }

    public void setPhonenumb(String phonenumb) {
        this.phonenumb = phonenumb;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Timestamp getLastsignintime() {
        return lastsignintime;
    }

    public void setLastsignintime(Timestamp lastsignintime) {
        this.lastsignintime = lastsignintime;
    }

    public String getLastsigninip() {
        return lastsigninip;
    }

    public void setLastsigninip(String lastsigninip) {
        this.lastsigninip = lastsigninip;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPassword() {
        return password;
    }

    public boolean validatePassword(String pwd) {
        if(StringUtils.isEmpty(pwd) && StringUtils.isEmpty(password)){
            return true;
        }
        return password.equals(pwd);
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getRegistertime() {
        return registertime;
    }

    public void setRegistertime(Timestamp registertime) {
        this.registertime = registertime;
    }

    public String getAvatar() {
        if(StringUtils.isEmpty(avatar)){
            return DEFAULT_AVATAR;
        }
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public void addUserRoleToken(UserRoleToken ur){
        roles.put(ur.getId(), ur);
    }

    public void removeUserRoleToken(int id){
        roles.remove(id);
    }

    public boolean hasUserRoleToken(UserRoleToken ur){
        return roles.containsValue(ur);
    }

    public boolean hasUserRoleToken(Integer urId){
        return roles.containsKey(urId);
    }

    public UserRoleToken getUserRoleToken(long urId){
        return roles.get(urId);
    }

    @JsonIgnore
    public Collection<UserRoleToken> getUserRoleTokens(){
        return roles.values();
    }

    @JsonIgnore
    public boolean isForbidden(){
        if("1".equals(status)){
            return false;
        }
        return true;
    }


}
