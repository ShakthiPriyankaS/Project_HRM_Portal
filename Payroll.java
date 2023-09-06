package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Payroll {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int payrollid;
	private String employeeid;
	private String payperiod;
	private long salaryamount;
	private String deductions;
	private long netpay;
	public Payroll() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Payroll(int payrollid, String employeeid, String payperiod, long salaryamount, String deductions,
			long netpay) {
		super();
		this.payrollid = payrollid;
		this.employeeid = employeeid;
		this.payperiod = payperiod;
		this.salaryamount = salaryamount;
		this.deductions = deductions;
		this.netpay = netpay;
	}
	public int getPayrollid() {
		return payrollid;
	}
	public void setPayrollid(int payrollid) {
		this.payrollid = payrollid;
	}
	public String getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(String employeeid) {
		this.employeeid = employeeid;
	}
	public String getPayperiod() {
		return payperiod;
	}
	public void setPayperiod(String payperiod) {
		this.payperiod = payperiod;
	}
	public long getSalaryamount() {
		return salaryamount;
	}
	public void setSalaryamount(long salaryamount) {
		this.salaryamount = salaryamount;
	}
	public String getDeductions() {
		return deductions;
	}
	public void setDeductions(String deductions) {
		this.deductions = deductions;
	}
	public long getNetpay() {
		return netpay;
	}
	public void setNetpay(long netpay) {
		this.netpay = netpay;
	}
	
	

}
