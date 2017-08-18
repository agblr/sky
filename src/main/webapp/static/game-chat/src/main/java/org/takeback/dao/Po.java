package org.takeback.dao;

/**
 * page and order
 */
public class Po {
    private int pageSize;
    private int pageNo;
    private String order;

    public Po(int pageNo) {
        this.pageNo = pageNo;
    }

    public Po(int pageSize, int pageNo) {
        this.pageSize = pageSize;
        this.pageNo = pageNo;
    }

    public Po(int pageSize, int pageNo, String order) {
        this.pageSize = pageSize;
        this.pageNo = pageNo;
        this.order = order;
    }

    public Po(String order){
        this.order = order;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public int getPageNo() {
        return pageNo;
    }

    public void setPageNo(int pageNo) {
        this.pageNo = pageNo;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }
}
