package org.takeback.core.organ;

import org.dom4j.Document;
import org.dom4j.Element;
import org.takeback.core.controller.support.AbstractConfigurableLoader;
import org.takeback.util.converter.ConversionUtils;

import java.util.List;

public class OrganLocalLoader extends AbstractConfigurableLoader<Organization> {
	
	public OrganLocalLoader(){
		postfix = ".org";
	}
	
	@SuppressWarnings("unchecked")
	@Override
	public Organization createInstanceFormDoc(String id, Document doc, long lastModi) {
		Element root = doc.getRootElement();
		if(root == null){
			return null;
		}
		try{
			Organization organ = ConversionUtils.convert(root, Organization.class);
			organ.setLastModify(lastModi);
			
			List<Element> installedApps = root.selectNodes("installedApps/app");
			for(Element appEl : installedApps){
				organ.addInstalledApp(appEl.attributeValue("id"));
			}
			parseChilds(organ,root);
			return organ;
		}
		catch(Exception e){
			return null;
		}	
	}
	
	private void parseChilds(Organization parent,Element el){
		setupProperties(parent,el);
		List<Element> children = el.elements("unit");
		for(Element u : children){
			Organization unit = ConversionUtils.convert(u, Organization.class);
			parent.appendChild(unit);
			parseChilds(unit,u);
		}
	}
	
	private void setupProperties(Organization unit,Element el){
		List<Element> ls = el.selectNodes("properties/p");
		for(Element p : ls){
			unit.setProperty(p.attributeValue("name"), p.getTextTrim());
		}
	}
}
