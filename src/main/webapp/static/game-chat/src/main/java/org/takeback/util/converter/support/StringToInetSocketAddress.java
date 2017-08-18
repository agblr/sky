package org.takeback.util.converter.support;

import org.springframework.core.convert.converter.Converter;
import org.takeback.util.NetUtils;

import java.net.InetSocketAddress;

public class StringToInetSocketAddress implements Converter<String,InetSocketAddress> {
	
	@Override
	public InetSocketAddress convert(String source) {
		return NetUtils.toAddress(source);
	}

}
