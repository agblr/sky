package org.takeback.core.schema;

import org.takeback.core.controller.support.AbstractController;


public class SchemaController extends AbstractController<Schema> {
	private static SchemaController instance;
	
	public SchemaController(){
		setLoader(new SchemaLocalLoader());
		instance = this;
	}
	
	public static SchemaController instance() {
		if(instance == null){
			instance = new SchemaController();
		}
		return instance;
	}
	
}
