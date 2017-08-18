package org.takeback.util;

import org.takeback.util.converter.ConversionUtils;

import java.math.RoundingMode;
import java.text.NumberFormat;
import java.util.Locale;

public class ConvertUtil {
	public static String toFixed(double f,int digists){
		return String.format("%."+digists+"f", f);
	}
	
	public static String toMoney(double f){
        //默认使用中文人民币符号
		NumberFormat formatter = NumberFormat.getCurrencyInstance(Locale.CHINA);
		 formatter.setRoundingMode(RoundingMode.HALF_UP);
         return formatter.format(f);
	}
	
	public static String dateToString(Object source){
		return ConversionUtils.convert(source, String.class);
	}
}
