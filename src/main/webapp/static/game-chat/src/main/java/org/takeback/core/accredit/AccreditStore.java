package org.takeback.core.accredit;

import org.dom4j.Element;
import org.takeback.core.accredit.condition.Condition;
import org.takeback.core.accredit.condition.ConditionFactory;
import org.takeback.core.accredit.list.AccreditList;
import org.takeback.core.accredit.list.BlackList;
import org.takeback.core.accredit.list.WhiteList;
import org.takeback.core.accredit.result.AuthorizeResult;
import org.takeback.core.accredit.result.ConditionResult;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class AccreditStore implements Serializable{
	private static final long serialVersionUID = 900088790085008371L;
	List<Condition> cds = new ArrayList<Condition>();
	HashMap<String,AccreditStoreItem> items = new HashMap<String,AccreditStoreItem>();
	private AccreditList ls;
	private String acValue = "0000";
	
	public AccreditStore(Element define){		
		if(define == null){
			return;
		}
		acValue = define.attributeValue("acValue","1111");
		Element it = define.element("items");
		if(it != null){
			String acType = it.attributeValue("acType","whitelist");
			if(acType.equals("whitelist")){
				initWhiteList(it);
			}
			else{
				initBlackList(it);
			}
		}		
		List<Element> els = define.selectNodes("conditions/condition");
		for(Element el:els){
			Condition cd = ConditionFactory.createCondition(el);
			cds.add(cd);
		}
	}
		
	private void initBlackList(Element parent){
		ls = new BlackList();
		List<Element> els = parent.elements();
		for(Element el:els){
			ls.add(el.attributeValue("id"),el);
		}
	}
	
	private void initWhiteList(Element parent){
		ls = new WhiteList();
		List<Element> els = parent.elements();
		for(Element el:els){
			if(el.getName().equals("others")){
				ls.add("$others$",el);
				continue;
			}
			String id = el.attributeValue("id");
			ls.add(id,el);
			items.put(id,new AccreditStoreItem(el));
		}
	}

	public AuthorizeResult authorize(String id) {
		if(ls == null){
			return AuthorizeResult.NegativeResult;
		}
		AuthorizeResult r = ls.authorize(id);
		r.setContextList(ls);
		if(r.getResult() != AuthorizeResult.YES){
			return r;
		}		
		AccreditStoreItem item = items.get(id);
		if(item == null){ //list was blacklist
			return r;
		}
		return item.getResult();
		
	}
	
	public AuthorizeResult getResult(){
		ConditionResult r = new ConditionResult();
		r.setAuthorizeValue(acValue);
		r.setAllConditions(cds);
		return r;
	}
	
}
