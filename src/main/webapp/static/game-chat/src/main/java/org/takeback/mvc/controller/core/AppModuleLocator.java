package org.takeback.mvc.controller.core;

import org.apache.commons.lang3.StringUtils;
import org.dom4j.Document;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.WebUtils;
import org.takeback.core.accredit.result.AuthorizeResult;
import org.takeback.core.app.*;
import org.takeback.core.resource.ResourceCenter;
import org.takeback.core.role.Role;
import org.takeback.core.user.AccountCenter;
import org.takeback.core.user.UserRoleToken;
import org.takeback.mvc.ServletUtils;
import org.takeback.util.BeanUtils;
import org.takeback.util.context.Context;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static org.takeback.mvc.ResponseUtils.jsonView;

@RestController("appModuleLocator")
public class AppModuleLocator {

	@RequestMapping(value = "/**/*.app", method = RequestMethod.GET)
	public Object getModule(@RequestParam String moduleId, HttpServletRequest request){
		if(ServletUtils.isLogonExpired(request)){
			return jsonView(403, "notLogon");
		}
		String uid = (String) WebUtils.getSessionAttribute(request, Context.UID);
		Long urtid = (Long) WebUtils.getSessionAttribute(request, Context.USER_ROLE_TOKEN);
		UserRoleToken urt = AccountCenter.getUser(uid).getUserRoleToken(urtid);
		Role role = urt.getRole();
		Module module = (Module) ApplicationController.instance().lookupModuleNode(moduleId);
		Module m = new Module();
		BeanUtils.copy(module, m);
		m.setProperties(module.getProperties());
		List<Action> actions = module.getActions();
		if(actions != null){
			for (Action action: actions){
				AuthorizeResult result = role.authorize("apps", action.getFullId());
				if(result != null && result.getResult() == AuthorizeResult.NO){
					continue;
				}else {
					Action ac = new Action();
					BeanUtils.copy(action, ac);
					ac.setProperties(action.getProperties());
					m.appendChild(ac);
				}
			}
		}
		return m;
	}
	
	public List<Application> getApps(){
		List<Application> apps = new ArrayList<>();
		try {
			Resource r = ResourceCenter.load("app");
			if(r.exists()){
				File file = r.getFile();
				String[] appNames = file.list();
				for(String appName:appNames){
					Application app = ApplicationController.instance().get("app."+StringUtils.substringBeforeLast(appName, ".app"));
					apps.add(app);
				}
			}
		} catch (IOException e) {
			
		}
		return apps;
	}

	public Document toDic(){
		Document doc = DocumentHelper.createDocument();
		Element root = doc.addElement("dic").addAttribute("name", "应用菜单");
		List<Application> apps = getApps();
		for(Application app:apps){
			Element eleA = root.addElement("item");
			eleA.addAttribute("key", app.getFullId()).addAttribute("text", app.getName());
			List<ApplicationNode> itemsC = app.getItems();
			if(itemsC != null){
				for(ApplicationNode an:itemsC){
					Category c = (Category) an;
					Element eleC = eleA.addElement("item").addAttribute("key", c.getFullId()).addAttribute("text", c.getName());
					List<Module> itemsM = c.getModules();
					if(itemsM != null){
						for (Module m:itemsM){
							process(eleC.addElement("item"), m);
						}
					}
				}
			}
		}
		return doc;
	}

	private void process(Element ele, Module m){
		ele.addAttribute("key", m.getFullId()).addAttribute("text", m.getName()).addAttribute("script", m.getScript());
	}

}
