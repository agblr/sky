package org.takeback.core.organ;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.google.common.collect.Maps;
import com.google.common.collect.Sets;
import org.apache.commons.lang3.StringUtils;
import org.takeback.core.controller.support.AbstractConfigurable;
import org.takeback.util.context.Context;
import org.takeback.util.context.ContextUtils;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;
import java.util.Set;

public class Organization extends AbstractConfigurable {
    private static final long serialVersionUID = 5344390118571868091L;

    private Map<String,Organization> children = Maps.newLinkedHashMap();
    private Set<String> installedApps = Sets.newLinkedHashSet();
    private Organization parent;
    private Set<String> roles = Sets.newHashSet();
    private int deep;
    private String name;
    private String type;
    private String ref;
    private String pyCode;

    public void appendChild(Organization unit){
        unit.setParent(this);
        children.put(unit.getId(), unit);
    }

    public Organization getChild(String id){
        if(StringUtils.isEmpty(id)){
            return null;
        }
        if(!id.contains(".")){
            return children.get(id);
        }
        String[] oid = id.split("\\.");
        Organization organ = this;
        for(int i=0;i<oid.length;i++){
            Organization o = organ.getChild(oid[i]);
            if(o == null){
                return null;
            }
            organ = o;
        }
        return organ;
    }

    public void addRoleId(String id){
        roles.add(id);
    }

    @JsonIgnore
    public Collection<Organization> getChildren(){
        if(deep >= getRequestDeep()){
            return null;
        }
        Collection<Organization> c =  children.values();
        if(c.isEmpty()){
            return null;
        }
        return c;
    }

    public void addInstalledApp(String id){
        installedApps.add(id);
    }

    public Set<String> installedApps(){
        return Collections.unmodifiableSet(installedApps);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getRef() {
        return ref;
    }

    public void setRef(String ref) {
        this.ref = ref;
    }

    public String getPyCode() {
        return pyCode;
    }

    public void setPyCode(String pyCode) {
        this.pyCode = pyCode;
    }

    @JsonIgnore
    public Organization getParent() {
        return parent;
    }

    public String getParentId(){
        if(parent != null){
            return parent.getId();
        }
        return null;
    }

    private void setParent(Organization parent) {
        this.parent = parent;
        deep = parent.deep() + 1;
    }

    protected int getRequestDeep(){
        if(ContextUtils.hasKey(Context.REQUEST_UNIT_DEEP)){
            return (Integer) ContextUtils.get(Context.REQUEST_UNIT_DEEP);
        }
        return Integer.MAX_VALUE;
    }

    protected int deep(){
        return deep;
    }


}
