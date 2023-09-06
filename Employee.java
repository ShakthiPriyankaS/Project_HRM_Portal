package com.example.demo.model;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity

public class Employee {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int employeeid;
	private String firstname;
	private String lastname;
	private String email;
	private String phonenumber;
	private String hiredate;
	private long salary;
	private int departmentid;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="fk_reviewid")
	private Payroll pc;
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name="fk_leaveid")
     private List<Leave> cs;

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Employee(int employeeid, String firstname, String lastname, String email, String phonenumber,
			String hiredate, long salary, int departmentid, Payroll pc, List<Leave> cs) {
		super();
		this.employeeid = employeeid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.phonenumber = phonenumber;
		this.hiredate = hiredate;
		this.salary = salary;
		this.departmentid = departmentid;
		this.pc = pc;
		this.cs = cs;
	}

	public int getEmployeeid() {
		return employeeid;
	}

	public void setEmployeeid(int employeeid) {
		this.employeeid = employeeid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getHiredate() {
		return hiredate;
	}

	public void setHiredate(String hiredate) {
		this.hiredate = hiredate;
	}

	public long getSalary() {
		return salary;
	}

	public void setSalary(long salary) {
		this.salary = salary;
	}

	public int getDepartmentid() {
		return departmentid;
	}

	public void setDepartmentid(int departmentid) {
		this.departmentid = departmentid;
	}

	public Payroll getPc() {
		return pc;
	}

	public void setPc(Payroll pc) {
		this.pc = pc;
	}

	public List<Leave> getCs() {
		return cs;
	}

	public void setCs(List<Leave> cs) {
		this.cs = cs;
	}

	
	
	
}

	
	
	

