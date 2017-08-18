package org.takeback.core.accredit;

import org.dom4j.Element;
import org.takeback.core.accredit.condition.Condition;
import org.takeback.core.accredit.condition.ConditionFactory;
import org.takeback.core.accredit.result.AuthorizeResult;
import org.takeback.core.accredit.result.ConditionResult;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class AccreditStoreItem implements Serializable{
	private static final long serialVersionUID = -6747079386253280933L;
	List<Condition> cds = new ArrayList<Condition>();
	private String acValue = "0000";
	
	public AccreditStoreItem(Element define){
		if(define == null){
			return;
		}
		define.attributeValue("id");
		acValue = define.attributeValue("acValue","1111");
		List<Element> els = define.elements("condition");
		for(Element el:els){
			Condition cd = ConditionFactory.createCondition(el);
			cds.add(cd);
		}
	}
	
	public AuthorizeResult getResult(){
		ConditionResult r = new ConditionResult();
		r.setAuthorizeValue(acValue);
		r.setAllConditions(cds);
		return r;
	}
}
