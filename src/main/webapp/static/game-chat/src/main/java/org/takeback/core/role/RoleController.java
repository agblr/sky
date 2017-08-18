package org.takeback.core.role;

import org.takeback.core.controller.support.AbstractController;

public class RoleController extends AbstractController<Role> {
	private static RoleController instance;
	
	public RoleController(){
		setLoader(new RoleLocalLoader());
		instance = this;
	}
	
	public static RoleController instance() {
		if(instance == null){
			instance = new RoleController();
		}
		return instance;
	}

}
