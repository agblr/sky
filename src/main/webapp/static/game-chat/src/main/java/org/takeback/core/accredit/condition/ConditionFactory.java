package org.takeback.core.accredit.condition;

import com.google.common.collect.Maps;
import org.dom4j.Element;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.HashMap;

public class ConditionFactory {
	private static final Logger LOGGER = LoggerFactory.getLogger(ConditionFactory.class);
	private static HashMap<String,String> cls = Maps.newHashMap();
	static{
		cls.put("exp", "org.takeback.core.accredit.condition.JsonExpCondition");
		cls.put("filter", "org.takeback.core.accredit.condition.JsonExpCondition");
		cls.put("notify", "org.takeback.core.accredit.condition.JsonExpCondition");
		cls.put("override", "org.takeback.core.accredit.condition.OverrideCondition");
		cls.put("limit", "org.takeback.core.accredit.condition.LimitCondition");
	}	
	public static Condition createCondition(Element define){
		if(define == null){
			return null;
		}
		Condition cnd;
		try {
			cnd = (Condition)Class.forName(cls.get(define.attributeValue("type","exp"))).newInstance();
			cnd.setDefine(define);
			return cnd;
		} 
		catch (Exception e) {
			LOGGER.error("condition init failed:", e);
		}
		return null;
	} 
}
