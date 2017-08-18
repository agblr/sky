package org.takeback.core.accredit.result;

import org.takeback.core.accredit.condition.Condition;
import org.takeback.core.accredit.list.AccreditList;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ConditionResult implements AuthorizeResult {
	AccreditList contextList;
	HashMap<String,Condition> cnds = new HashMap<String,Condition>();
	String acValue = "";
	
	public void setContextList(AccreditList list){
		contextList = list;
	}
	public AccreditList getContextList(){
		return contextList;
	}
	
	public void addCondition(Condition cd){
		cnds.put(cd.getQueryType(),cd);
	}
	
	public void setAuthorizeValue(String acValue){
		this.acValue = acValue;
	}
	
	public void setAllConditions(List<Condition> cds) {
		for(Condition cd : cds){
			addCondition(cd);
		}
	}
	
	public List<Condition> getAllConditions() {
		List<Condition> ls = new ArrayList<Condition>();
		ls.addAll(cnds.values());
		return ls;
	}
	
	public int conditionCount() {
		return cnds.size();
	}

	public String getAuthorizeValue() {
		return this.acValue;
	}

	public Condition getCondition(String target) {
		return cnds.get(target);
	}

	public int getResult() {
		return AuthorizeResult.UNDERCONDITION;  //2
	}
	
	public AuthorizeResult unite(AuthorizeResult cr){
		if(cr == null || cr.getResult() != AuthorizeResult.UNDERCONDITION){
			return this;
		}
		if(cr.conditionCount() > 0){
			setAllConditions(cr.getAllConditions());
		}
		int i1 = Integer.valueOf(acValue,2);
		int i2 = Integer.valueOf(cr.getAuthorizeValue(),2);
		acValue = Integer.toBinaryString(i1 | i2);
		return this;
	}

}
