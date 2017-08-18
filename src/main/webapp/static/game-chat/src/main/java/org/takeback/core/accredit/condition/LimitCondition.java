package org.takeback.core.accredit.condition;

import org.dom4j.Element;
import org.takeback.core.accredit.list.AccreditList;
import org.takeback.core.accredit.list.BlackList;
import org.takeback.core.accredit.list.WhiteList;
import org.takeback.util.JSONUtils;
import org.takeback.util.context.Context;
import org.takeback.util.exp.ExpressionProcessor;
import org.takeback.util.exp.exception.ExprException;

import java.util.HashMap;
import java.util.List;

public class LimitCondition implements Condition {
	Element define;
	AccreditList list;
	String value;
	List<?> exp;
	String listType;
	
	public void setDefine(Element define){
		this.define = define;
		if(define == null){
			return;
		}
		listType = define.attributeValue("list","white");
		value =  define.attributeValue("value");
		if(value != null){
			if(listType.equals("white")){
				list = new WhiteList();
			}
			else{
				list = new BlackList();
			}
			if(value.indexOf(",") > -1){
				String[] items = value.split(",");
				for(String i : items){
					list.add(i, null);
				}
			}
			else{
				list.add(value, null);
			}
		}
		else{
			try {
				String s  = define.attributeValue("exp",define.getText());
				exp = JSONUtils.parse(s, List.class);
			} 
			catch (Exception e) {
				
			}
		}
	}
	
	public Element getDefine() {
		return define;
	}

	public String getMessage() {
		return "";
	}

	public Object run(Context ctx) {
		if(list != null){
			String v = (String) ctx.get("value");
			return list.authorize(v).getResult() != 0;
		}
		if(exp != null){
			try {
				return (Boolean) ExpressionProcessor.instance().run(exp);
			} catch (ExprException e) {
				e.printStackTrace();
			}
		}
		return true;
	}

	public HashMap<String,Object> data() {
		HashMap<String,Object> h = new HashMap<String,Object>();
		h.put("type", "limit");
		h.put("value", value);
		h.put("list", listType);
		h.put("exp", exp);
		return h;
	}


	public String getQueryType() {
		return "limit";
	}


	public int type() {
		return Condition.LIMIT;
	}

}
