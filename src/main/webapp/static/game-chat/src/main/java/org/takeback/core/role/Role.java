package org.takeback.core.role;

import org.apache.commons.lang3.StringUtils;
import org.dom4j.Element;
import org.takeback.core.accredit.AccreditStore;
import org.takeback.core.accredit.list.*;
import org.takeback.core.accredit.result.AuthorizeResult;
import org.takeback.core.accredit.result.NegativeResult;
import org.takeback.core.controller.support.AbstractConfigurable;
import org.takeback.core.user.AccountCenter;

import java.util.HashMap;
import java.util.List;

public class Role extends AbstractConfigurable {
	private static final long serialVersionUID = -2219302553517602005L;
	private String name;
	private String desc;
	private String type;
	private String parent;
	private HashMap<String,AccreditList> accredits = new HashMap<>();

	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getDescription() {
		return desc;
	}
	
	public void setDescription(String desc) {
		this.desc = desc;
	}

	public String getType() {
		return type != null ? type : "";
	}

	public void setType(String type) {
		this.type = type;
	}

	public Role getParent() {
		if(!StringUtils.isEmpty(parent)){
			return AccountCenter.getRole(parent);
		}
		return null;

	}

	public void setParent(String parent) {
		this.parent = parent;
	}

	public void initAccreditList(Element el){
		String acType = el.attributeValue("acType","whitelist");
		if(acType.equals("whitelist")){
			String nm = el.getName();
			if(nm.equals("storage")){ 
				initStorageWhiteList(el);
			}
			else if(nm.equals("apps")){
				initAppsWhiteList(el);
			}
			else{
				initWhiteList(el);   
			}
		}
		else{
			initBlackList(el);
		}
	}
	
	private void initAppsWhiteList(Element parent){
		WhiteList White = new ApplicationWhiteList();
		List<Element> items = parent.elements();
		for(Element el : items){
			if(el.getName().equals("others")){
				White.add("$others$",el);
				continue;
			}
			White.add(el.attributeValue("id"),el);
		}
		accredits.put(parent.getName(), White);
	}
	
	private void initStorageWhiteList(Element parent){
		StorgeWhiteList White = new StorgeWhiteList();
		List<Element> items = parent.elements();
		for(Element el : items){
			if(el.getName().equals("others")){
				White.add("$others$",el);
				continue;
			}
			White.add(el.attributeValue("id"),new AccreditStore(el));
		}
		accredits.put(parent.getName(), White);
	}
	
	private void initWhiteList(Element parent){
		WhiteList White = new WhiteList();
		List<Element> items = parent.elements();
		for(Element el : items){
			if(el.getName().equals("others")){
				White.add("$others$",el);
				continue;
			}
			White.add(el.attributeValue("id"),el);
		}
		accredits.put(parent.getName(), White);
	}
	
	private void initBlackList(Element parent){
		BlackList black = new BlackList();
		List<Element> items = parent.elements();
		for(Element el : items){
			black.add(el.attributeValue("id"),el);
		}
		accredits.put(parent.getName(), black);
	}
	
	public AccreditList getAccreditList(String name){
		return accredits.get(name);
	}


	/**
	 *
	 * @param name	accredit name,如apps,service,storage
	 * @param id
	 * @return
	 */
	public AuthorizeResult authorize(String name, String id){
		AuthorizeResult p = null;
		Role parentRole = getParent();
		if(parentRole != null){
			p = parentRole.authorize(name, id);
		}
		AuthorizeResult r = null;
		if(!accredits.containsKey(name)){
			r = new NegativeResult();
			return r.unite(p);
		}
		AccreditList ls = accredits.get(name);
		r = ls.authorize(id);
		return r.unite(p);
	}
	
}
