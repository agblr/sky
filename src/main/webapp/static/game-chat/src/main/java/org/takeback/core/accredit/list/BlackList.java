package org.takeback.core.accredit.list;

import org.takeback.core.accredit.result.AuthorizeResult;

import java.io.Serializable;
import java.util.HashMap;

public class BlackList implements AccreditList,Serializable{
	private static final long serialVersionUID = 5815488500591951520L;
	private HashMap<String,Object> list = new HashMap<String,Object>();
	public void add(String id,Object ctx) {
		list.put(id, ctx);
	}
		
	public AuthorizeResult authorize(String id) {
		AuthorizeResult r = null;
		if(list.containsKey(id)){
			r = AuthorizeResult.NegativeResult;
		}else{
			r = AuthorizeResult.PositiveResult;
		}
		r.setContextList(this);
		return r;
	}
	
	public HashMap<String,Object> containers(){
		return list;
	}
}
