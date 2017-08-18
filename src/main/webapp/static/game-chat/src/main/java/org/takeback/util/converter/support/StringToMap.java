package org.takeback.util.converter.support;

import org.springframework.core.convert.converter.Converter;
import org.takeback.util.JSONUtils;

import java.util.Map;

@SuppressWarnings("rawtypes")
public class StringToMap implements Converter<String,Map> {
	
	@Override
	public Map convert(String source) {
		return JSONUtils.parse(source, Map.class);
	}

}
