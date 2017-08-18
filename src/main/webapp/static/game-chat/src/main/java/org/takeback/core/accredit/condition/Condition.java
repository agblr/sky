package org.takeback.core.accredit.condition;

import org.dom4j.Element;
import org.takeback.util.context.Context;

import java.io.Serializable;
import java.util.HashMap;

public interface Condition extends Serializable{
	public static final int EXP = 1;
	public static final int OVERRIDE = 2;
	public static final int LIMIT = 3;
	
	public void setDefine(Element define);
	public Object run(Context ctx);
	public Element getDefine();
	public String getMessage();
	public HashMap<String,Object> data();
	public int type();
	public String getQueryType();
}
