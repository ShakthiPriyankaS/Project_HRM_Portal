package com.example.demo.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity

@Table(name="employee_leave")
public class Leave {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int leaveid;
	private int employeeid;
	private LocalDate startdate;
	private LocalDate enddate;
	private String reason;
	public Leave() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Leave(int leaveid, int employeeid, LocalDate startdate, LocalDate enddate, String reason) {
		super();
		this.leaveid = leaveid;
		this.employeeid = employeeid;
		this.startdate = startdate;
		this.enddate = enddate;
		this.reason = reason;
	}
	public int getLeaveid() {
		return leaveid;
	}
	public void setLeaveid(int leaveid) {
		this.leaveid = leaveid;
	}
	public int getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(int employeeid) {
		this.employeeid = employeeid;
	}
	public LocalDate getStartdate() {
		return startdate;
	}
	public void setStartdate(LocalDate startdate) {
		this.startdate = startdate;
	}
	public LocalDate getEnddate() {
		return enddate;
	}
	public void setEnddate(LocalDate enddate) {
		this.enddate = enddate;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	
	

	
	
}
	
	
