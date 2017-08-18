package org.takeback.core.accredit.condition;

import org.dom4j.Element;
import org.takeback.util.StringValueParser;
import org.takeback.util.context.Context;

import java.util.HashMap;
import java.util.List;
import java.util.Set;

public class OverrideCondition implements Condition {
	Element define;
	HashMap<String,String> overrides = new HashMap<String,String>();
	@SuppressWarnings("unchecked")
	public void setDefine(Element define){
		this.define = define;
		if(define == null){
			return;
		}
		if(define.elements().size() == 0){
			String target = define.attributeValue("target");
			String value = define.attributeValue("value",define.getText());
			overrides.put(target,value);
		}
		else{
			List<Element> list =  define.elements();
			for(Element o : list){
				overrides.put(o.attributeValue("target"),o.attributeValue("value",o.getText()));
			}
		}
	}
	
	public Element getDefine() {
		return define;
	}

	public String getMessage() {
		return "";
	}

	public String run(Context ctx) {
		Set<String> keys = overrides.keySet();
		for(String target : keys){
			String v = StringValueParser.parse(overrides.get(target), String.class);
			ctx.put("cfg." + target, v);			
		}
		return null;
	}
	

	public HashMap<String,Object> data() {
		HashMap<String,Object> h = new HashMap<String,Object>();
		h.put("type", "override");
		return h;
	}


	public String getQueryType() {
		return "override";
	}


	public int type() {
		return Condition.OVERRIDE;
	}

}
