package org.takeback.util.exp.standard;

import org.takeback.util.converter.ConversionUtils;
import org.takeback.util.exp.Expression;
import org.takeback.util.exp.ExpressionProcessor;
import org.takeback.util.exp.exception.ExprException;

import java.math.BigDecimal;
import java.util.List;

public class NUM extends Expression {

	public NUM() {
		name = "d";
	}

	@Override
	public Object run(List<?> ls, ExpressionProcessor processor) throws ExprException {
		try {
			Number result = 0;
			Object lso = ls.get(1);
			if (lso instanceof List) {
				result = ConversionUtils.convert(processor.run((List<?>) lso), Number.class);
			} else {
				result = ConversionUtils.convert(ls.get(1), Number.class);
			}
			if (ls.size() == 3) {
				int scale = ConversionUtils.convert(ls.get(2), int.class);
				result = BigDecimal.valueOf(ConversionUtils.convert(result, Double.class))
						.setScale(scale, BigDecimal.ROUND_HALF_UP).doubleValue();
			}
			return result;
		} catch (Exception e) {
			throw new ExprException(e.getMessage());
		}
	}

	@Override
	public String toString(List<?> ls, ExpressionProcessor processor) throws ExprException {
		Number result = 0;
		Object lso = ls.get(1);
		if (lso instanceof List) {
			result = ConversionUtils.convert(processor.run((List<?>) lso), Number.class);
		} else {
			result = ConversionUtils.convert(ls.get(1), Number.class);
		}
		return String.valueOf(result);
	}

}
