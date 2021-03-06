package org.takeback.core.accredit.result;

import org.takeback.core.accredit.condition.Condition;
import org.takeback.core.accredit.list.AccreditList;

import java.util.List;

public class NegativeResult implements AuthorizeResult {
	AccreditList contextList;
	public void setContextList(AccreditList list){
		contextList = list;
	}
	public AccreditList getContextList(){
		return contextList;
	}
	
	public int conditionCount() {
		return 0;
	}

	public String getAuthorizeValue() {
		return "0000";
	}

	public Condition getCondition(String target) {
		return null;
	}

	public int getResult() {
		return AuthorizeResult.NO;
	}
	public List<Condition> getAllConditions(){
		return null;
	}
	public AuthorizeResult unite(AuthorizeResult cr){
		if(cr == null || getResult() > cr.getResult()){
			return this;
		}
		else{
			return cr;
		}
	}

	public String toString(){
		return "false";
	}
}
