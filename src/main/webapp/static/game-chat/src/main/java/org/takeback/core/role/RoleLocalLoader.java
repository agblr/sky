package org.takeback.core.role;

import org.dom4j.Document;
import org.dom4j.Element;
import org.takeback.core.controller.support.AbstractConfigurableLoader;
import org.takeback.util.converter.ConversionUtils;

import java.util.List;

public class RoleLocalLoader extends AbstractConfigurableLoader<Role> {
	
	public RoleLocalLoader(){
		postfix = ".r";
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Role createInstanceFormDoc(String id, Document doc, long lastModi) {
		Element root = doc.getRootElement();
		if(root == null){
			return null;
		}
		try {
			Role r = ConversionUtils.convert(root, Role.class);
			r.setId(id);
			r.setLastModify(lastModi);
			List<Element> els =  root.selectNodes("accredit/*");
			for(Element el:els){
				r.initAccreditList(el);
			}
			setupProperties(r, root);
			return r;
		} catch (Exception e) {
			return null;
		}
	}
	
	private void setupProperties(Role o, Element el){
		List<Element> ls = el.selectNodes("properties/p");
		for(Element p : ls){
			o.setProperty(p.attributeValue("name"), p.getTextTrim());
		}
	}

}
