package org.takeback.util.converter.support;


import org.springframework.core.convert.converter.Converter;
import org.takeback.util.JSONUtils;

import java.util.List;

@SuppressWarnings("rawtypes")
public class StringToList implements Converter<String,List> {
	
	@Override
	public List convert(String source) {
		return JSONUtils.parse(source, List.class);
	}

}
