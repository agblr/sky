package org.takeback.util.exp.exception;

import org.takeback.util.exception.CodedBaseRuntimeException;

public class ExprException extends CodedBaseRuntimeException {
	private static final long serialVersionUID = -3712765640188038285L;

	public ExprException(String msg) {
		super(msg);
	}

	public ExprException(Throwable e) {
		super(e);
	}
}
