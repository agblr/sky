package org.takeback.core.accredit.list;

import org.dom4j.Element;
import org.takeback.core.accredit.result.AuthorizeResult;
import org.takeback.core.app.ApplicationNode;

import java.util.HashMap;
import java.util.List;

public class ApplicationWhiteList extends WhiteList{
	private static final long serialVersionUID = -2788057587279673397L;
	HashMap<String,AccreditList> lss = new HashMap<String,AccreditList>();
	
	public void add(String id,Object ctx){
		super.add(id, ctx);
		this.add(id,(Element)ctx);
	}
	
	public void add(String id,Element ctx) {
		int n = ctx.elements().size();
		if(n > 0){
			AccreditList mls;
			String acType = ctx.attributeValue("acType","whitelist");
			if(acType.equals("whitelist")){
				mls = new ModuleWhiteList();
			}
			else{
				mls = new BlackList();
			}
			lss.put(id, mls);
			List<Element> els = ctx.elements();
			for(int i = 0; i < n ; i ++){
				Element el = els.get(i);
				if(el.getName().equals("others")){
					mls.add("$others$",el);
					continue;
				}
				String moduleId  = el.attributeValue("id");
				mls.add(moduleId, el);
			}
		}
	}
	
	public AuthorizeResult authorize(String id) {      // id = "devm.rd.Rd"
		int p = id.indexOf(ApplicationNode.SIGN);
		String itemId = "";
		if(p != -1){
			itemId = id.substring(p + 1);
			id = id.substring(0,p);
		}
		if(list.containsKey(id)){
			if(itemId.length() == 0){
				return AuthorizeResult.PositiveResult;
			}
			if(lss.containsKey(id)){
				AccreditList mls = lss.get(id);
				return mls.authorize(itemId);
			}
			return AuthorizeResult.NegativeResult;
		}else{
			if(list.containsKey("$others$")){
				return AuthorizeResult.PositiveResult;
			}
			return AuthorizeResult.NegativeResult;
		}
	}
}