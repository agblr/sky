package org.takeback.core.app;

import org.apache.commons.lang3.StringUtils;
import org.takeback.core.controller.support.AbstractController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class ApplicationController extends AbstractController<Application> {
	private static ApplicationController instance;
	private static Map<String, Map<String, String>> ref = new ConcurrentHashMap<>();
	
	public ApplicationController(){
		setLoader(new ApplicationLocalLoader());
		instance = this;
	}
	
	public static ApplicationController instance() {
		if(instance == null){
			instance = new ApplicationController();
		}
		return instance;
	}
	
	@Override
	public void reload(String id) {
		super.reload(id);
		ref.remove(id);
		
	}
	
	@Override
	public void reloadAll() {
		store.clear();
		ref.clear();
	}
	
	@Override
	public Application get(String id) {
		Application app = super.get(id);
		Map<String, String> r = app.getRefItems();
		if(r.size() > 0){
			ref.put(app.getId(), app.getRefItems());
		}
		return app;
	}

	public ApplicationNode lookupModuleNode(String id){
		//id 如 platform.reg.REG/REGCATA1/REG_01
		ApplicationNode node = null;
		if(!StringUtils.isEmpty(id)){
//			List<String> mappings = findMappingId(id);
			String[] nodes = id.split(ApplicationNode.SIGN);
			if(nodes.length > 1){
				Application app = ApplicationController.instance().get(nodes[0]);
				if(app == null){
					return null;
				}
				node = app;
				for(int i=1; i<nodes.length; i++){
					node = node.getChild(nodes[i]);
					if(node == null){
						break;
					}
				}
			}else{
				return null;
			}
		}
		if(node == null){
			return null;
		}
		return node;

	}

	private List<String> findMappingId(String id){
		List<String> n = new ArrayList<>();
		for(Map<String, String> m : ref.values()){
			if(m.containsKey(id)){
				n.add(m.get(id));
			}
		}
		n.add(id);
		return n;
	}
	
}
