package org.takeback.core.user;

public class UserFundStatistics {
	//累计收益
	private Double accumulatedIncome=0.0;
	
	//预期收益
	private Double expectIncome=0.0;
	
	//待回收本金
	private Double recyclePrincipal=0.0;
	
	//融资总额
	private Double totalFinanAmount=0.0;
	
	//应还总额
	private Double repayAmount=0.0;
	
	//已还款总额
	private Double alreadyRepayAmount=0.0;

	//累计投资
	private Double totalInvest=0.0;

	//投资记录数
	private Integer countInvest = 0;

	//融资记录数
	private Integer countFinanAmount = 0;

	public Double getAccumulatedIncome() {
		return accumulatedIncome;
	}

	public void setAccumulatedIncome(Double accumulatedIncome) {
		this.accumulatedIncome = accumulatedIncome;
	}
	
	public void addAccumulatedIncome(Double accumulatedIncome) {
		this.accumulatedIncome += accumulatedIncome;
	}

	public Double getExpectIncome() {
		return expectIncome;
	}

	public void setExpectIncome(Double expectIncome) {
		this.expectIncome = expectIncome;
	}
	

	public void addExpectIncome(Double expectIncome) {
		this.expectIncome += expectIncome;
	}

	public Double getRecyclePrincipal() {
		return recyclePrincipal;
	}

	public void setRecyclePrincipal(Double recyclePrincipal) {
		this.recyclePrincipal = recyclePrincipal;
	}
	
	public void addRecyclePrincipal(Double recyclePrincipal) {
		this.recyclePrincipal += recyclePrincipal;
	}

	public Double getTotalFinanAmount() {
		return totalFinanAmount;
	}

	public void setTotalFinanAmount(Double totalFinanAmount) {
		this.totalFinanAmount = totalFinanAmount;
	}
	
	public void addTotalFinanAmount(Double totalFinanAmount) {
		this.totalFinanAmount += totalFinanAmount;
	}

	public Double getRepayAmount() {
		return repayAmount;
	}

	public void setRepayAmount(Double repayAmount) {
		this.repayAmount = repayAmount;
	}
	
	public void addRepayAmount(Double repayAmount) {
		this.repayAmount += repayAmount;
	}

	public Double getAlreadyRepayAmount() {
		return alreadyRepayAmount;
	}

	public void setAlreadyRepayAmount(Double alreadyRepayAmount) {
		this.alreadyRepayAmount = alreadyRepayAmount;
	}
	
	public void addAlreadyRepayAmount(Double alreadyRepayAmount) {
		this.alreadyRepayAmount += alreadyRepayAmount;
	}


	public void setCountInvest(Integer countInvest) {
		this.countInvest = countInvest;
	}

	public void setTotalInvest(Double totalInvest) {
		this.totalInvest = totalInvest;
	}

	public void setCountFinanAmount(Integer countFinanAmount) {
		this.countFinanAmount = countFinanAmount;
	}

	public Double getTotalInvest() {
		return totalInvest;

	}

	public void addTotalInvest(Double totalInvest) {
		this.totalInvest += totalInvest;
	}

	public Integer getCountInvest() {
		return countInvest;
	}

	public void addCountInvest(Integer countInvest) {
		this.countInvest += countInvest;
	}

	public Integer getCountFinanAmount() {
		return countFinanAmount;
	}

	public void addCountFinanAmount(Integer countFinanAmount) {
		this.countFinanAmount += countFinanAmount;
	}
}
