package org.takeback.core.accredit.list;

import org.dom4j.Element;
import org.takeback.core.accredit.result.AuthorizeResult;
import org.takeback.core.accredit.result.ConditionResult;

import java.io.Serializable;
import java.util.HashMap;

public class WhiteList implements AccreditList,Serializable{
	private static final long serialVersionUID = 467436151043085270L;
	
	HashMap<String,Object> list = new HashMap<String,Object>();
	public void add(String id,Object ctx) {
		list.put(id, ctx);
	}
	
	public AuthorizeResult authorize(String id) {
		AuthorizeResult r = null;
		if(list.containsKey(id)){
			r = AuthorizeResult.PositiveResult;
		}else{
			if(list.containsKey("$others$")){
				Element el = (Element)list.get("$others$");
				String acValue = el.attributeValue("acValue","");
				if(acValue.length() > 0){
					ConditionResult cr = new ConditionResult();
					cr.setAuthorizeValue(acValue);
					r = cr;
				}else{
					r = AuthorizeResult.PositiveResult;
				}
			}else{
				r =  AuthorizeResult.NegativeResult;
			}
		}
		r.setContextList(this);
		return r;
	}
	
	public HashMap<String,Object> containers(){
		return list;
	}
}
