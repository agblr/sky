package org.takeback.core.organ;

import org.takeback.core.controller.support.AbstractController;

public class OrganController extends AbstractController<Organization> {
	private static OrganController instance;
	
	public OrganController(){
		setLoader(new OrganLocalLoader());
		instance = this;
	}
	
	public static OrganController instance() {
		if(instance == null){
			instance = new OrganController();
		}
		return instance;
	}

	public static Organization getRoot(){
		return instance().get("unit");
	}

}
