/*
 * @(#)PayOrderNoGenerator.java 创建于 2016-04-17 13:59:29
 *
 * 版权：版权所有 CHINNSII 保留所有权力。
 */
package org.takeback.pay;

import java.util.UUID;

/**
 * @author <a href="mailto:chinnsii@163.com">zhengshi</a>
 */
public class PayOrderNoGenerator {

    /**
     *
     * @return
     */
    public static String generator() {
        return UUID.randomUUID().toString().replace("-", "");
    }
}
