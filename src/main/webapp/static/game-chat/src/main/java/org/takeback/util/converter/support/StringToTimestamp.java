package org.takeback.util.converter.support;

import org.springframework.core.convert.converter.Converter;
import org.takeback.util.converter.ConversionUtils;

import java.sql.Timestamp;
import java.util.Date;

public class StringToTimestamp implements Converter<String,Timestamp> {
	
	@Override
	public Timestamp convert(String source) {
		Date dt = ConversionUtils.convert(source, Date.class);
		return new Timestamp(dt.getTime());
	}

}
