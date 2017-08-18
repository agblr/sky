package org.takeback.util.identity;

import java.text.*;
import java.util.Calendar;

/**
 * 流水号生成器
 */
public class SerialNumberGenerator {
    /**
     * The FieldPosition.
     */
    private static final FieldPosition HELPER_POSITION = new FieldPosition(0);

    /**
     * This Format for format the data to special format.
     */
    private final static Format dateFormat = new SimpleDateFormat("yyyyMMddHHmmssSSS");

    /**
     * This Format for format the number to special format.
     */
    private final static NumberFormat numberFormat = new DecimalFormat("0000");

    /**
     * This int is the sequence number ,the default value is 0.
     */
    private static int seq = 0;

    private static final int MAX = 9999;

    /**
     * 时间格式生成序列
     *
     * @return String
     */
    public static synchronized String generateSequenceNo() {
        return generateSequenceNo(null);
    }

    /**
     * 时间格式生成序列
     *
     * @param prefix 前缀
     * @return String
     */
    public static synchronized String generateSequenceNo(String prefix) {
        Calendar rightNow = Calendar.getInstance();
        StringBuffer sb = prefix == null ? new StringBuffer() : new StringBuffer(prefix);
        dateFormat.format(rightNow.getTime(), sb, HELPER_POSITION);
        numberFormat.format(seq, sb, HELPER_POSITION);
        if (seq == MAX) {
            seq = 0;
        } else {
            seq++;
        }
        return sb.toString();
    }

    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 10; i++) {
            Thread.sleep(50);
            System.out.println(generateSequenceNo());
            System.out.println(generateSequenceNo("GO"));
           // System.out.println(dateFormat.format(new Date()));
        }
    }
}
