package org.takeback.util.exp.standard;

import org.takeback.util.context.ContextUtils;
import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.exp.Expression;
import org.takeback.util.exp.ExpressionProcessor;
import org.takeback.util.exp.exception.ExprException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class REF extends Expression {

	public REF() {
		symbol = "$";
		name = symbol;
	}

	@Override
	public Object run(List<?> ls, ExpressionProcessor processor) throws ExprException {
		try {
			String nm = (String) ls.get(1);
			if (nm.startsWith("%")) {
				nm = nm.substring(1);
			}
			return ContextUtils.get(nm);
		} catch (Exception e) {
			throw new ExprException(e.getMessage());
		}
	}

	@Override
	@SuppressWarnings("unchecked")
	public String toString(List<?> ls, ExpressionProcessor processor) throws ExprException {
		try {
			String nm = (String) ls.get(1);
			if (!nm.startsWith("%")) {
				return nm;
			}
			boolean forPreparedStatement = ContextUtils.get("$exp.forPreparedStatement", boolean.class);
			Object o = run(ls, processor);

			if (forPreparedStatement) {

				Map<String, Object> parameters = ContextUtils.get("$exp.statementParameters", HashMap.class);
				String key = "arg" + parameters.size();
				parameters.put(key, o);
				return ":" + key;
			} else {
				String s = ConversionUtils.convert(o, String.class);
				if (o instanceof Number) {
					return s;
				} else {
					return "'" + s + "'";
				}
			}
		} catch (Exception e) {
			throw new ExprException(e);
		}
	}

}
