package org.takeback.core.accredit.result;

import org.takeback.core.accredit.condition.Condition;
import org.takeback.core.accredit.list.AccreditList;

import java.util.List;

public interface AuthorizeResult {
	public static final int UNDERCONDITION = 2;
	public static final int YES = 1;
	public static final int NO = 0;
	public static final AuthorizeResult NegativeResult = new NegativeResult();
	public static final AuthorizeResult PositiveResult = new PositiveResult();
	
	public void setContextList(AccreditList list);
	public AccreditList getContextList();
	public int getResult();
	public int conditionCount();
	public Condition getCondition(String target);
	public List<Condition> getAllConditions();
	public String getAuthorizeValue();
	public AuthorizeResult unite(AuthorizeResult cr);
}
