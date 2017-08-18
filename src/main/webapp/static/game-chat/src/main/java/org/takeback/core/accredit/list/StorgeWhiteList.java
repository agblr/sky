package org.takeback.core.accredit.list;

import org.dom4j.Element;
import org.takeback.core.accredit.AccreditStore;
import org.takeback.core.accredit.result.AuthorizeResult;
import org.takeback.core.accredit.result.ConditionResult;
import org.takeback.core.app.ApplicationNode;


public class StorgeWhiteList extends WhiteList{
	private static final long serialVersionUID = -5231699451569983293L;
	
	public AuthorizeResult authorize(String id) {
		int p = id.indexOf(ApplicationNode.SIGN);
		String itemId = "";
		if(p != -1){
			itemId = id.substring(p + 1);
			id = id.substring(0,p);
		}
		AuthorizeResult r = null;
		if(list.containsKey(id)){
			AccreditStore acs = (AccreditStore)list.get(id);
			if(itemId.length() == 0){
				r = acs.getResult();
			}
			else{
				r = acs.authorize(itemId);   //调用items权限
			}
		}else{
			if(list.containsKey("$others$")){
				ConditionResult cdr = new ConditionResult();
				Element el = (Element)list.get("$others$");
				cdr.setAuthorizeValue(el.attributeValue("acValue", "1111"));
				cdr.setContextList(this);
				r = cdr;
			}
			else{
				r = AuthorizeResult.NegativeResult;
			}
		}
		r.setContextList(this);
		return r;
		
	}
}