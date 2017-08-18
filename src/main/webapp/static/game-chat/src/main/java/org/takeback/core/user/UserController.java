package org.takeback.core.user;

import org.takeback.core.controller.support.AbstractController;

public class UserController extends AbstractController<User> {
	private static UserController instance;
	
	public UserController(){
		setLoader(new UserLocalLoader());
		instance = this;
	}
	
	public static UserController instance() {
		if(instance == null){
			instance = new UserController();
		}
		return instance;
	}
	
}
