package org.takeback.dao.exception;

import org.takeback.util.exception.CodedBaseRuntimeException;

/**
 * 用于@Transactional的扑捉的事务回滚，继承RuntimeException
 */
public class DaoException extends CodedBaseRuntimeException{

    public DaoException(){
        super();
    }

    public DaoException(int code){
        super(code);
    }

    public DaoException(int code, String msg){
        super(code, msg);
    }

    public DaoException(String msg){
        super(msg);
    }

    public DaoException(int code, Throwable t){
        super(code, t);
    }

    public DaoException(String msg, Throwable t){
        super(msg, t);
    }

    public DaoException(Throwable t){
        super(t);
    }

    public DaoException(int code, String msg, Throwable t) {
        super(msg, t);
        this.code = code;
    }

}
