package org.takeback.core.accredit.condition;

import org.dom4j.Element;
import org.takeback.util.JSONUtils;
import org.takeback.util.context.Context;
import org.takeback.util.exp.ExpressionProcessor;
import org.takeback.util.exp.exception.ExprException;

import java.util.HashMap;
import java.util.List;

public class JsonExpCondition implements Condition {
	Element define;
	HashMap<String,Object> data;
	String queryType;
	
	public void setDefine(Element define){
		this.define = define;
		if(define == null){
			return;
		}
		Element exp = define.element("exp");
		Element msg = define.element("errMsg");
		queryType = define.attributeValue("type");
		String  expText = null;
		if(exp == null){
			expText = define.attributeValue("exp",define.getText()); 
		}
		else{
			expText = exp.getText();
		}
		
		try {
			expText = expText.trim().replaceAll("\'", "\"");
			List<?> lsExp = JSONUtils.parse(expText, List.class);
			data = new HashMap<>();
			data.put("exp", lsExp);
			if(msg != null){
				data.put("errMsg",msg.getText());
			}
		} 
		catch (Exception e) {
			e.printStackTrace();
		}	
	}
	
	public Element getDefine() {
		return define;
	}

	public String getMessage() {
		return (String)data.get("errMsg");
	}

	public Object run(Context ctx) {
		try {
			return ExpressionProcessor.instance().run((List<?>) data.get("exp"));
		} catch (ExprException e) {
			return null;
		}
	}	

	public HashMap<String,Object> data() {
		return data;
	}
	
	public String getQueryType() {
		return queryType;
	}

	public int type() {
		return Condition.EXP;
	}

}
