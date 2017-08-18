package org.takeback.util.exp.standard;

import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.exp.Expression;
import org.takeback.util.exp.ExpressionProcessor;
import org.takeback.util.exp.exception.ExprException;

import java.util.Date;
import java.util.List;

public class DATE extends Expression {

	@Override
	public Object run(List<?> ls, ExpressionProcessor processor) throws ExprException {
		try {
			Date result = null;
			Object lso = ls.get(1);
			if (lso instanceof List) {
				result = ConversionUtils.convert(processor.run((List<?>) lso), Date.class);
			} else {
				result = ConversionUtils.convert(ls.get(1), Date.class);
			}
			return result;
		} catch (Exception e) {
			throw new ExprException(e.getMessage());
		}
	}

	@Override
	public String toString(List<?> ls, ExpressionProcessor processor) throws ExprException {
		return "'" + ConversionUtils.convert(run(ls, processor), String.class) + "'";
	}
}
