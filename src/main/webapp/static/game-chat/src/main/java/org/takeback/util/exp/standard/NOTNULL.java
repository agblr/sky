package org.takeback.util.exp.standard;

import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.exp.Expression;
import org.takeback.util.exp.ExpressionProcessor;
import org.takeback.util.exp.exception.ExprException;

import java.util.List;

@SuppressWarnings("rawtypes")
public class NOTNULL extends Expression {
	public NOTNULL() {
		name = "notNull";
	}

	public Object run(List ls, ExpressionProcessor processor) throws ExprException {
		Object lso = ls.get(1);
		if (lso instanceof List) {
			lso = processor.run((List<?>) lso);
		}
		return lso != null;
	}

	public String toString(List ls, ExpressionProcessor processor) throws ExprException {
		Object lso = ls.get(1);
		if (lso instanceof List) {
			lso = processor.toString((List<?>) lso);
		}
		StringBuffer sb = new StringBuffer(ConversionUtils.convert(lso, String.class));
		sb.append(" is not null");
		return sb.toString();
	}

}
