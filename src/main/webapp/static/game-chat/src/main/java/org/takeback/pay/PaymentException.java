/*
 * @(#)PaymenetException.java 创建于 2016-04-17 13:49:49
 *
 * 版权：版权所有 CHINNSII 保留所有权力。
 */
package org.takeback.pay;

/**
 * @author <a href="mailto:chinnsii@163.com">zhengshi</a>
 */
public class PaymentException extends Exception {

    public PaymentException() {
        super();
    }

    public PaymentException(String message) {
        super(message);
    }

    public PaymentException(String message, Throwable throwable) {
        super(message, throwable);
    }

    public PaymentException(Throwable throwable) {
        super(throwable);
    }
}
