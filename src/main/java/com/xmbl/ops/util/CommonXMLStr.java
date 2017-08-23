package com.xmbl.ops.util;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.sql.Timestamp;
import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.ResourceBundle;
import java.util.TreeMap;

import javax.servlet.http.HttpSession;




import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import ch.qos.logback.classic.Logger;
@SuppressWarnings("unchecked")
public class CommonXMLStr {
	private static final Logger logger = (Logger) LoggerFactory.getLogger(CommonXMLStr.class);

	public CommonXMLStr() {
	}

	//public static TopicsSearch psearch = null;// 简单题库搜索器，临时放这里
	public static final int sms_log_send_no = 0;// 报警日志未检查
	public static final int sms_log_send_yes = 1;// 报警日志已检查
	public static final int sms_control_send_no = 0;// 报警短信未发送
	public static final int sms_control_send_yes = 1;// 报警短信已发送
	public static final String share_page_domain = "http://m.91xuexibao.com:3000/app/liveaaImage/";
	// 又拍云相关
	public static final String UPYHOST = "http://simg.91xuexibao.com";
	public static final String BUCKET_NAME = "xuexibao1";
	public static final String USER_NAME = "xxbadmin";
	public static final String USER_PWD = "XxbmdkJ1509";
	public static final String DIR_ROOT = "/";
	// 指标预定标识
	public static final int sms_no = 0;// 无指标预定
	public static final int sms_yes = 1;// 有指标预定

	// KPI指标值报警时间窗口
	public static final int sms_warn_hour_start = 15;
	public static final int sms_warn_hour_end = 20;
	// KPI指标值常规时间窗口
	public static final int sms_routine_hour_start = 15;
	public static final int sms_routine_hour_end = 20;

	public static final String date_str_12 = "yyyy-MM-dd hh:mm:ss";
	public static final String date_str_24 = "yyyy-MM-dd HH:mm:ss";

	public static final String basePath = "/report3/";
	// public static final String basePath = "/";
	// 定义文件上传保存文件地址
	public static final String MEDIA_PRODUCT_REPORT_UPLOAD_PATH = "/upload/week_report/media_product/";// 媒介产品报告上传文件地址
	// public static final String createIndexPath =
	// "D:\\tomcat6020\\webapps\\report3\\searchIndex";//题库索引位置
	// public static final String createIndexPath =
	// "/home/mudi/local/tomcat/webapps/ROOT/searchIndex";
	public static final String createIndexPath = "/data/bin/tomcat7054/webapps/report2/searchIndex";
	public static final String sysReplyUserMobile = "11111111111";// 学习宝系统回帖用户

	// 格式化数字
	public static final String FORMAT_STRING = "#,###";

	public static final SimpleDateFormat sdfForDate = new SimpleDateFormat(
			"yyyy-MM-dd");
	public static final SimpleDateFormat sdfForDateTime = new SimpleDateFormat(
			"yyyy-MM-dd HH:mm:ss");
	public static final SimpleDateFormat sdfForMillSecond = new SimpleDateFormat(
			"yyyy-MM-dd HH:mm:ss.sss");

	// 新增运营人员时的初始化密码
	public static final String initPassword = "1234";
	public static final Integer logLevel = 2;

	// 星期数组
	public static final List<String> weekList = new ArrayList();
	static {
		weekList.add("1");
		weekList.add("2");
		weekList.add("3");
		weekList.add("4");
		weekList.add("5");
		weekList.add("6");
		weekList.add("0");
	}

	public static final List<String> monthList = new ArrayList();
	static {
		monthList.add("01");
		monthList.add("02");
		monthList.add("03");
		monthList.add("04");
		monthList.add("05");
		monthList.add("06");
		monthList.add("07");
		monthList.add("08");
		monthList.add("09");
		monthList.add("10");
		monthList.add("11");
		monthList.add("12");
		monthList.add("13");
		monthList.add("14");
		monthList.add("15");
		monthList.add("16");
		monthList.add("17");
		monthList.add("18");
		monthList.add("19");
		monthList.add("20");
		monthList.add("21");
		monthList.add("22");
		monthList.add("23");
		monthList.add("24");
		monthList.add("25");
		monthList.add("26");
		monthList.add("27");
		monthList.add("28");
		monthList.add("29");
		monthList.add("30");
		monthList.add("31");
	}

	public static String platformWeekTemplate = "";// 邮件模板

	public static final String XML_Widgets = "<chart bgAlpha='0' bgColor='FCB541' lowerLimit='0' upperLimit='0' "
			+ "numberSuffix='单位' showBorder='0' basefontColor='000000' chartTopMargin='25' "
			+ "chartBottomMargin='25' chartLeftMargin='25' chartRightMargin='25' toolTipBgColor='80A905' "
			+ "gaugeFillMix='{dark-10},FFFFFF,{dark-10}' gaugeFillRatio='3'>"
			+ "<colorRange>"
			+ "<color minValue='0' maxValue='100000000' code='FF0000'/>"
			+
			// "<color minValue='45' maxValue='80' code='F6BD0F'/>" +
			// "<color minValue='80' maxValue='100' code='8BBA00'/>" +
			"</colorRange>"
			+ "<dials><dial value='0' rearExtension='10'/>"
			+ "</dials>"
			+ "<trendpoints><point value='0' displayValue='基线' fontcolor='FF4400' "
			+ "useMarker='1' dashed='1' dashLen='2' dashGap='2' valueInside='1' />"
			+ "</trendpoints>"
			+ "<!--Rectangles behind the gauge -->"
			+ "<annotations>"
			+ "<annotationGroup id='Grp1' showBelow='1' >"
			+ "<annotation type='' x='5' y='5' toX='345' toY='195' radius='10' "
			+ "color='#FFFFFF,#FFFFFF' showBorder='0' />"
			+ "</annotationGroup>"
			+ "</annotations>"
			+ "<styles>"
			+ "<definition><style name='RectShadow' type='shadow' strength='3'/>"
			+ "</definition><application><apply toObject='Grp1' styles='RectShadow' />"
			+ "</application></styles></chart>";

	public static final String XML_Charts = "<chart caption='' subcaption='' "
			+ "lineThickness='1' showValues='0' yAxisMinValue='' yAxisMaxValue='' formatNumberScale='0' anchorRadius='1'   "
			+ "divLineAlpha='20' divLineColor='CC3300' divLineIsDashed='1' "
			+ "showAlternateHGridColor='1' alternateHGridColor='CC3300' shadowAlpha='40' "
			+ "labelStep='1' numvdivlines='5' chartRightMargin='35' bgColor='#2F5BA3,#2F5BA3' "
			+ "bgAngle='270' bgAlpha='10,10'>"
			+ "<categories >"
			+ "<category label='1900-01-01' />"
			+

			"</categories>"
			+ "<dataset seriesName='测试' color='1D8BD1' "
			+ "anchorBorderColor='1D8BD1' anchorBgColor='1D8BD1'>"
			+ "<set value='0' />"
			+

			"</dataset>"
			+ "<dataset seriesName='基线' color='F1683C' anchorBorderColor='F1683C' anchorBgColor='F1683C'>"
			+ "<set value='0' />"
			+

			"</dataset>"
			+ "<styles><definition><style name='CaptionFont' type='font' size='12'/>"
			+ "</definition><application><apply toObject='CAPTION' styles='CaptionFont' />"
			+ "<apply toObject='SUBCAPTION' styles='CaptionFont' /></application></styles></chart>";

	public static final String XML_Cylinder = "<chart upperLimit='100' "
			+ "lowerLimit='0' tickMarkGap='5' numberSuffix='％' paletteThemeColor='8A2BE2'><value>0</value></chart>";

	public static final String XML_Pie_2D = "<chart caption='' showPercentageValues='1' palette='0' baseFontSize='15'><set label='Item A' value='4' /></chart>";

	// rotateNames='0' 这个属性设置为1时，不支持汉字
	public static final String XML_Combi2D = "<chart caption='' palette='3' "
			+ "lineThickness='2' showValues='0'  rotateNames='0' "
			+ "slantLabels='1' areaOverColumns='0' formatNumberScale='0' "
			+ "labelStep='1' baseFontSize='12'>"
			+ "<categories ><category label='1900-01-01' /></categories>"
			+ "<dataset seriesName='测试'><set value='0'/></dataset>"
			+ "<dataset seriesName='基线' renderAs='Line' color='0372AB' "
			+ "lineThickness='4'><set value='0' /></dataset>" + "</chart>";

	public static final String XML_3dLine = "<chart caption='' palette='1' showValues='0' "
			+ "yAxisValuesPadding='10' labelStep='1' baseFontSize='12' formatNumberScale='0'>"
			+ "<categories ><category label='1900-01-01' /></categories>"
			+ "<dataset seriesName='测试'>"
			+ "<set value='0'/></dataset>"
			+ "<dataset seriesname='基线' renderAs='Line' >"
			+ "<set value='0' /></dataset>" + "</chart>";

	public static final String XML_MS_Column_3D = "<chart palette='1' xaxisname='Continent' yaxisname='Export' numdivlines='9' ccaption='' subcaption=''>"
			+ "<categories font='Arial'>"
			+ "<category label='Game1' toolText=''/>"
			+ "</categories>"
			+ "<dataset seriesname='Rice' color='A66EDD'>"
			+ "<set value='30'/>" + "</dataset>" + "</chart>";

	public static ApplicationContext applicationContext;
	public static ResourceBundle bundle;

	/**
	 * 科目名称定义
	 */
	public static final Map<Integer, String> gameMap = new TreeMap<Integer, String>();
	static {
		// 自主运营
		gameMap.put(0, "全部学科");
		gameMap.put(1, "数学");
		gameMap.put(2, "语文");
		gameMap.put(7, "物理");
		gameMap.put(8, "化学");

	}

	/**
	 * 订单状态定义
	 */
	public static final Map<Integer, String> orderStatusMap = new TreeMap<Integer, String>();
	static {

		orderStatusMap.put(1, "审核中");
		orderStatusMap.put(2, "已出货");
		orderStatusMap.put(3, "已签收");
		orderStatusMap.put(4, "拒收");

	}

	/**
	 * 用户来源定义
	 */
	public static final Map<String, String> user_sourceMap = new HashMap<String, String>();
	static {

		user_sourceMap.put("360shoufa", "360首发");
		user_sourceMap.put("360helper", "360助手");

		user_sourceMap.put("91helper", "91助手");
		user_sourceMap.put("91_anzhuo", "91安卓市场");
		user_sourceMap.put("91_huodong", "91活动");

		user_sourceMap.put("anzhuoshichang", "安卓市场");
		user_sourceMap.put("anzhishichang", "安智市场");
		user_sourceMap.put("apphezuo", "app合作");

		user_sourceMap.put("baiduhelper", "百度助手");
		user_sourceMap.put("baiduhelper_shoufa", "百度助手首发");
		user_sourceMap.put("baidu_91_anzhuoshichang", "百度91安卓市场");
		user_sourceMap.put("baidujingjia", "百度竞价");
		user_sourceMap.put("baiduwangmeng", "百度网盟");

		user_sourceMap.put("changweituiguang", "长尾推广");

		user_sourceMap.put("fensitong", "粉丝通");

		user_sourceMap.put("googleplay", "谷歌play");
		user_sourceMap.put("guangwangxiazai", "官网下载");
		user_sourceMap.put("guangdiantong", "广点通");
		user_sourceMap.put("gfan", "机锋市场");
		user_sourceMap.put("guizhou_mobile", "贵州移动");

		user_sourceMap.put("luntantuiguang", "论坛推广");
		user_sourceMap.put("lianxiangleshangdian", "联想乐商店");

		user_sourceMap.put("Nduo", "N多市场");
		user_sourceMap.put("mumaoyi", "木蚂蚁");
		user_sourceMap.put("meizuyingyongshangdian", "应用商店");

		user_sourceMap.put("qqgroup", "qq群");

		user_sourceMap.put("offline", "线下");
		user_sourceMap.put("offical", "官方");
		user_sourceMap.put("oppo", "oppo市场");

		user_sourceMap.put("sougouhelper", "搜狗助手");
		user_sourceMap.put("sougoushichang", "搜狗市场");
		user_sourceMap.put("sousoujingjia", "搜搜竞价");

		user_sourceMap.put("taobaoshoujizhushou", "淘宝手机助手");

		user_sourceMap.put("uc", "uc下载");

		user_sourceMap.put("xinweiyuan", "新闻源");
		user_sourceMap.put("xiaomi", "小米");
		user_sourceMap.put("xiaomishichang", "小米市场");

		user_sourceMap.put("wandoujia", "豌豆荚");
		user_sourceMap.put("wangyiyingyongzhongxin", "网易应用中心");
		user_sourceMap.put("weixintuiguang", "微信推广");

		user_sourceMap.put("yingyongbao_shoufa", "应用宝首发");
		user_sourceMap.put("yingyongbao", "应用宝");
		user_sourceMap.put("yingyonghui", "应用汇");
		user_sourceMap.put("yiyonghui", "易用汇");

		user_sourceMap.put("zhihuiyunyingyongshangdian", "智慧云应用商店");

	}

	/**
	 * Key白名单列表
	 */
	public static final List<String> allowUserArr = new ArrayList<String>();
	static {
		allowUserArr.add("fangxionggui01158");
		allowUserArr.add("zhangming");
		allowUserArr.add("lixinsheng");
	}
	/**
	 * 手机号白名单列表
	 */
	public static final List<String> allowMobileArr = new ArrayList<String>();
	static {
		allowMobileArr.add("18612444585");
		allowMobileArr.add("18605811078");
		allowMobileArr.add("13910092202");
		allowMobileArr.add("18601052138");
		// allowMobileArr.add("8613693502701");
	}
	public static final String allowMobileArrStr = "13701157294,18605811078";
	/**
	 * 菜单树所有连接列表
	 */
	public static final List<String> channelArray = new ArrayList<String>();// 所有菜单的url连接
//	public static final Map<String, Channel> channelMap = new HashMap<String, Channel>();// 所有菜单id对应的Channel对象

	/**
	 * 用户菜单树权限Map
	 */
	public static Map<String, List<String>> roleChannel = new HashMap<String, List<String>>();
	/**
	 * 用户连接权限Map
	 */
	public static Map<String, List<String>> roleLink = new HashMap<String, List<String>>();
	/**
	 * 用户学科权限Map
	 */
	public static Map<String, List<String>> roleGame = new HashMap<String, List<String>>();
	/**
	 * 用户动作权限Map
	 */
	public static Map<String, List<String>> roleAction = new HashMap<String, List<String>>();

	/**
	 * 按格式返回日期的字符串表示
	 * 
	 * @param _date
	 * @return
	 */
	public static String getDateForStr(Date _date, String formatStr) {
		try {
			if (null != _date) {
				SimpleDateFormat sf = new SimpleDateFormat(formatStr);
				String date_str = sf.format(_date);
				return date_str;
			} else
				return "";
		} catch (Exception e) {
			System.out.println(e.toString());
			return "";
		}
	}

	/**
	 * 根据某年的周，得到该周的日期范围
	 * 
	 * @param year
	 *            年份
	 * @param weekOfYear
	 *            全年的第几周
	 * @return 2009年06月1日 至 2009年06年7日
	 */
	public static String getWeek_of_year_beginAndEndDate(Integer year,
			Integer weekOfYear) {
		Calendar now = Calendar.getInstance();
		now.set(Calendar.YEAR, year);
		now.set(Calendar.WEEK_OF_YEAR, weekOfYear);
		now.set(Calendar.DAY_OF_WEEK, Calendar.MONDAY);// 声明要取的是周一的日期

		if (weekOfYear.intValue() == 52) {// 如果是年末，则需计算跨年日期
			year = year + 1;
			weekOfYear = 1;
		} else {
			weekOfYear += 1;
		}
		Calendar next = Calendar.getInstance();
		next.set(Calendar.YEAR, year);
		next.set(Calendar.WEEK_OF_YEAR, weekOfYear);
		next.set(Calendar.DAY_OF_WEEK, Calendar.SUNDAY);// 声明要取的是周日的日期
		return new SimpleDateFormat("yyyy-MM-dd").format(now.getTime()) + " 至 "
				+ new SimpleDateFormat("yyyy-MM-dd").format(next.getTime());
	}

	/**
	 * 根据输入日期判断该日期属于该年的第几周
	 * 
	 * @param inputDate
	 *            输入的日期的格式如下："2009-01-01"
	 * @return
	 */
	public static int getWeekOfYear(String inputDate) {
		Calendar c = Calendar.getInstance();

		String temp[] = inputDate.split("-");
		int year = Integer.valueOf(temp[0]);
		int month = Integer.valueOf(temp[1]);
		int date = Integer.valueOf(temp[2]);
		c.set(Calendar.YEAR, year);
		c.set(Calendar.MONTH, month - 1);
		c.set(Calendar.DATE, date);

		int week_of_year = c.get(Calendar.WEEK_OF_YEAR);
		return week_of_year - 1;
	}

	/**
	 * 格式化日期 modify by xuepeng 20090527
	 * 
	 * @param date
	 * @return
	 */
	public static String getFormatDate(String date) {
		String value = date.substring(0, 2) + "月" + date.substring(2) + "日";
		return value;
	}

	/**
	 * 按格式返回日期的字符串表示
	 * 
	 * @param _date
	 * @return
	 */
	public static String getDateForStr(String _date, String oldFormat,
			String formatStr) {
		try {
			// SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
			if (null != _date) {
				SimpleDateFormat sf = new SimpleDateFormat(oldFormat);
				Date date = sf.parse(_date);
				sf = new SimpleDateFormat(formatStr);
				String date_str = sf.format(date);
				return date_str;
			} else
				return "";
		} catch (Exception e) {
			System.out.println(e.toString());
			return "";
		}
	}

	/**
	 * 计算日期 原日期字符串，需要增加的天数
	 * 
	 * @param _date
	 * @param day
	 * @return
	 */
	@SuppressWarnings("static-access")
	public static String computerDate(String _date, int day) {
		try {
			if (null != _date) {
				SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
				Date date = sf.parse(_date);
				Calendar calendar = Calendar.getInstance();
				calendar.setTime(date);
				calendar.add(calendar.DATE, day);
				date = calendar.getTime();
				String new_date = sf.format(date);
				return new_date;
			}
			return "";
		} catch (Exception e) {
			System.out.println(e.toString());
			return "";
		}
	}

	/**
	 * 计算日期 原日期字符串，需要增加的月数
	 * 
	 * @param _date
	 * @param day
	 * @return
	 */
	@SuppressWarnings("static-access")
	public static String computerDateForMonth(String format, String _date,
			int month) {
		try {
			if (null != _date) {
				SimpleDateFormat sf = new SimpleDateFormat(format);
				Date date = sf.parse(_date);
				Calendar calendar = Calendar.getInstance();
				calendar.setTime(date);
				calendar.add(calendar.MONTH, month);
				date = calendar.getTime();

				String new_date = sf.format(date);
				return new_date;
			} else
				return "";
		} catch (Exception e) {
			System.out.println(e.toString());
			return null;
		}
	}

	/**
	 * 获得月份
	 * 
	 * @param _date
	 * @param day
	 * @return
	 */
	@SuppressWarnings("deprecation")
	public static Integer getMonth(String _date) {
		try {
			if (null != _date) {
				SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
				Date date = sf.parse(_date);
				return date.getMonth() + 1;
			} else
				return 0;
		} catch (Exception e) {
			System.out.println(e.toString());
			return 0;
		}
	}

	/**
	 * 返回月天数
	 * 
	 * @param _date
	 * @return
	 */
	public static Integer getDayOfMonth(Date _date) {
		try {
			if (null != _date) {
				Calendar calendar = Calendar.getInstance();
				calendar.setTime(_date);
				return calendar.getActualMaximum(Calendar.DAY_OF_MONTH);
			} else
				return 0;
		} catch (Exception e) {
			System.out.println(e.toString());
			return 0;
		}
	}

	/**
	 * 返回月天数
	 * 
	 * @param _date
	 * @param oldFormat
	 * @return
	 */
	public static Integer getDayOfMonth(String _date, String oldFormat) {
		try {
			if (null != _date) {
				SimpleDateFormat sf = new SimpleDateFormat(oldFormat);
				Date date = sf.parse(_date);
				Integer count = getDayOfMonth(date);
				return count;
			} else
				return 0;
		} catch (Exception e) {
			System.out.println(e.toString());
			return 0;
		}
	}

	/**
	 * 
	 * 计算日期：得到前一天
	 * 
	 * @author xuepeng01264
	 * @param date
	 *            格式如下：(String) 2009-07-10
	 * @return (String) 2009-07-09
	 * @throws ParseException
	 */
	public static String getPrecedingDay(String _date) {
		SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");
		Date date;
		Calendar c = Calendar.getInstance();
		try {
			date = sf.parse(_date);
			c.setTime(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}

		c.roll(Calendar.DAY_OF_YEAR, -1);
		String return_date = new SimpleDateFormat("yyyy-MM-dd").format(c
				.getTime());
		return return_date;
	}

	/**
	 * @author xuepeng01264 任意时间段之间的所有日期 getDateList("2010-07-01","2010-08-11")
	 * @param beginDate
	 * @param endDate
	 * @return
	 * @throws ParseException
	 */
	public static List<String> getDateList(String beginDate, String endDate)
			throws ParseException {
		List<String> dateList = new ArrayList<String>();
		dateList.add(beginDate);
		SimpleDateFormat sf = new SimpleDateFormat("yyyy-MM-dd");

		Date temp1 = sf.parse(beginDate);
		Date temp2 = sf.parse(endDate);
		Calendar calTemp = Calendar.getInstance();
		calTemp.setTime(temp1);
		while (calTemp.getTime().getTime() != temp2.getTime()) {
			calTemp.add(Calendar.DAY_OF_YEAR, 1);
			String tmp = sf.format(calTemp.getTime());
			dateList.add(tmp);
		}
		return dateList;
	}

	/**
	 * 
	 * MD5加密
	 * <p>
	 * Example: String str = getMD5("a".getBytes());
	 * </p>
	 * 
	 * @author xuepeng01264
	 * @param source
	 * @return
	 */
	public static String getMD5(byte[] source) {
		String s = null;
		char hexDigits[] = { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
				'a', 'b', 'c', 'd', 'e', 'f' };
		try {
			java.security.MessageDigest md = java.security.MessageDigest
					.getInstance("MD5");
			md.update(source);
			byte tmp[] = md.digest();
			char str[] = new char[16 * 2];
			int k = 0;
			for (int i = 0; i < 16; i++) {
				byte byte0 = tmp[i];
				str[k++] = hexDigits[byte0 >>> 4 & 0xf];
				str[k++] = hexDigits[byte0 & 0xf];
			}
			s = new String(str);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return s;
	}

	/**
	 * MD5加密对现有字符串加密
	 * 
	 * @author xuepeng01264
	 * @param str
	 * @return
	 */
	public static String getMD5forString(String str) {
		if (null != str) {
			String s = getMD5(str.getBytes());
			return s;
		}
		return null;
	}

	/**
	 * 
	 * @author chenhao
	 * @description 把日期改为int的格式
	 * @param version
	 * @return
	 */
	public static int formatStringDate(String version) {
		String[] dates = version.split("-");
		return Integer.parseInt(dates[0] + dates[1] + dates[2]);
	}

	/**
	 * 用千分位符格式化数据
	 * 
	 * @param obj
	 * @return
	 */
	public static String getFormatData(Object obj) {
		String str = "0";
		try {
			java.text.DecimalFormat df = new DecimalFormat("###,###.##");
			str = df.format(obj);
		} catch (Exception e) {
			str = "0";
		}

		return str;
	}

	/**
	 * 用千分位符格式化数据
	 * 
	 * @param obj
	 * @return
	 */
	public static String getFormatData3(Object obj) {
		String str = "0";
		try {
			java.text.DecimalFormat df = new DecimalFormat("###,###.###");
			str = df.format(obj);
		} catch (Exception e) {
			str = "0";
		}

		return str;
	}

	/**
	 * 四舍五入
	 * 
	 * @param v
	 * @return
	 */
	public static String round(Double v) {

		try {
			// double dd = Double.parseDouble(v);
			String temp = "0.00"; // #代表如果0是无效位则忽略，0代表0是无效位仍为0；
			DecimalFormat decimalFormat = new DecimalFormat(temp);
			String s = decimalFormat.format(v); // 四舍五入

			return s;
		} catch (Exception ex) {
			ex.printStackTrace();
			return "0";
		}
	}

	/**
	 * long型数 add by xuepeng 2009-05-19
	 * 
	 * @param number
	 * @return 格式化后的字符串
	 */
	/*
	 * public static String getFormatNumber(long number) { DecimalFormat dft =
	 * new DecimalFormat(FORMAT_STRING); return dft.format(number); }
	 */

	public static long getFormatNumber(long number) {
		return number;
	}

	/**
	 * <p>
	 * 返回用户科目Json格式数据 map
	 * </p>
	 * 
	 * @return JSON
	 */
	public String getGameMap() {
		JSONArray array = new JSONArray();
		Iterator it = CommonXMLStr.gameMap.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry<Integer, String> entry = (Map.Entry<Integer, String>) it
					.next();
			Integer key = entry.getKey();
			String value = entry.getValue();
			JSONObject obj = new JSONObject();
			obj.put("value", key);
			obj.put("name", value);
			array.add(obj);
		}

		return array.toString();
	}

	/**
	 * 根据用户userKey，得到科目权限
	 * 
	 * @param userKey
	 * @return
	 */
/*	@SuppressWarnings({ "unchecked", "deprecation" })
	public String getGameRole(String userKey) {
		JSONArray array = new JSONArray();
		Iterator it = CommonXMLStr.gameMap.entrySet().iterator();
		// List<String> listGame = CommonXMLStr.roleGame.get(userKey);
		HttpSession session = WebContextFactory.get().getSession();// dwr中获得session对象
		if (null != session.getAttribute("roleGame")) {
			List<String> listGame = ((Map<String, List<String>>) session
					.getAttribute("roleGame")).get(userKey);
			while (it.hasNext()) {
				Map.Entry<Integer, String> entry = (Map.Entry<Integer, String>) it
						.next();
				Integer key = entry.getKey();
				String value = entry.getValue();
				if (listGame.contains(key.toString())) {
					JSONObject obj = new JSONObject();
					obj.put("value", key);
					obj.put("name", value);
					array.add(obj);
				}
			}
		}

		return array.toString();
	}*/

	/**
	 * 防止Tomcat服务器乱码，转码函数
	 * 
	 * @param str
	 * @return
	 */
	public static String decode(String str) {
		try {
			return new String(str.getBytes("iso-8859-1"), "utf-8");
		} catch (UnsupportedEncodingException e) {
			logger.error("转码失败 iso-8859-1 ==》utf-8 ", e);
		}
		return null;
	}

	/**
	 * 写文件
	 * 
	 * @param outputFile
	 * @param content
	 */
	public static void writeContent(File outputFile, String content,
			boolean flag) {

		try {
			FileWriter out = new FileWriter(outputFile, flag);
			out.write(content);

			out.flush();
			out.close();
		} catch (IOException ex) {
			// TODO Auto-generated catch block
			ex.printStackTrace();
		}

	}

	/**
	 * 读文件
	 * 
	 * @param outputFile
	 * @return
	 */
	public static String readContent(File outputFile, String encode) {

		try {
			FileInputStream fin = new FileInputStream(outputFile);
			InputStreamReader read = new InputStreamReader(fin, encode);
			BufferedReader reader = new BufferedReader(read);

			String content = reader.readLine();
			String tmpString = "";
			while (content != null) {
				tmpString += content;
				content = reader.readLine();
			}
			reader.close();
			read.close();
			fin.close();

			return tmpString;
		} catch (IOException ex) {
			// TODO Auto-generated catch block
			ex.printStackTrace();
			return "";
		}

	}

	/**
	 * 根据年份计算出该年所有的周一的时间列表
	 * 
	 * @param year
	 *            指定的年份
	 */
	public static List<String> convertWeekByYear(Integer year) {
		List<String> list = new ArrayList<String>();

		Calendar c = Calendar.getInstance();
		SimpleDateFormat f = new SimpleDateFormat("yyyy/MM/dd");
		c.set(year, 0, 1);
		c.setFirstDayOfWeek(Calendar.MONDAY);
		while (true) {
			if (c.get(Calendar.YEAR) != year) {
				break;
			} else {
				if (c.get(Calendar.DAY_OF_WEEK) == Calendar.MONDAY) {
					String date = f.format(c.getTime());
					list.add(date);
				}
				c.set(Calendar.DATE, c.get(Calendar.DATE) + 1);
			}
		}

		return list;
	}

	/**
	 * 根据年份计算所在周的周一和周日
	 * 
	 * @param year
	 *            指定的年份
	 */
	public static List<String[]> getMondaySundayListByYear(Integer year) {
		List<String[]> list = new ArrayList<String[]>();

		Calendar c = Calendar.getInstance();
		SimpleDateFormat f = new SimpleDateFormat("yyyy/MM/dd");
		c.set(year, 0, 1);
		c.setFirstDayOfWeek(Calendar.MONDAY);
		try {
			while (true) {
				if (c.get(Calendar.YEAR) != year) {
					break;
				} else {
					if (c.get(Calendar.DAY_OF_WEEK) == Calendar.MONDAY) {
						String date = f.format(c.getTime());

						Date tmp = f.parse(date);
						c.setTime(tmp);
						c.add(Calendar.DATE, 6);
						String sunday = f.format(c.getTime());
						String[] arr = { date, sunday };
						list.add(arr);
					}

					c.set(Calendar.DATE, c.get(Calendar.DATE) + 1);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return list;
	}

	/**
	 * <p>
	 * 使用[] 方括号 将Object包含起来，用于logger
	 * </p>
	 * 
	 * @param obj
	 * @return
	 */
	public static String loggerWrapWithBrackets(Object obj) {
		StringBuilder builder = new StringBuilder();
		if (null == obj) {
			return builder.append("\t[null]").toString();
		} else {
			return builder.append("\t[").append(obj.toString()).append("] ")
					.toString();
		}
	}

	public static Integer nullForInteger(Object obj) {
		if (null == obj) {
			return null;
		} else {
			return Integer.valueOf(obj.toString());
		}
	}

	public static Long nullForLong(Object obj) {
		if (null == obj) {
			return null;
		} else {
			return Long.valueOf(obj.toString());
		}
	}

	public static String nullForString(Object obj) {
		if (null == obj) {
			return null;
		} else {
			return obj.toString();
		}
	}

	public static String nullForDateTimeStamp(Object obj) {
		if (null == obj) {
			return null;
		} else {
			if (obj instanceof Timestamp) {
				Timestamp timestamp = (Timestamp) obj;
				long ms = timestamp.getTime();
				Date date = new Date();
				date.setTime(ms);
				return sdfForDate.format(date);
			} else {
				return obj.toString();
			}
		}
	}

	public static String nullForDateTimeTimeStamp(Object obj) {
		if (null == obj) {
			return null;
		} else {
			if (obj instanceof Timestamp) {
				Timestamp timestamp = (Timestamp) obj;
				long ms = timestamp.getTime();
				Date date = new Date();
				date.setTime(ms);
				return sdfForDateTime.format(date);
			} else {
				return obj.toString();
			}
		}
	}

	/**
	 * 根据科目名称得到id
	 * 
	 * @param gameMap
	 * @param gameName
	 * @return
	 */
	public static Integer getGameId(Map<Integer, String> gameMap,
			String gameName) {
		Integer rt = null;
		Iterator<Integer> it = gameMap.keySet().iterator();
		while (it.hasNext()) {
			Integer gameId = it.next();
			if (gameMap.get(gameId).equals(gameName)) {
				rt = gameId;
				break;
			}
		}
		return rt;
	}

	public static Integer getGameId(String gameName) {
		Integer rt = null;
		Iterator<Integer> it = gameMap.keySet().iterator();
		while (it.hasNext()) {
			Integer gameId = it.next();
			if (gameMap.get(gameId).equals(gameName)) {
				rt = gameId;
				break;
			}
		}
		return rt;
	}
}
