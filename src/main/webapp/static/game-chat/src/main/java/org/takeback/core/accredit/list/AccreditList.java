package org.takeback.core.accredit.list;

import org.takeback.core.accredit.result.AuthorizeResult;

import java.util.HashMap;

public interface AccreditList {
	public void add(String id, Object ctx);
	public AuthorizeResult authorize(String id);
	public HashMap<String,Object> containers();
}
