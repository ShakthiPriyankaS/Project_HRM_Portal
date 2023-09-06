package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Performance {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reviewid;
	private int employeeid;
	private String employeename;
	private String reviewdate;
	private int reviewerid;
	private String comments;
	private int rating;
	public Performance() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Performance(int reviewid, int employeeid, String employeename, String reviewdate, int reviewerid,
			String comments, int rating) {
		super();
		this.reviewid = reviewid;
		this.employeeid = employeeid;
		this.employeename = employeename;
		this.reviewdate = reviewdate;
		this.reviewerid = reviewerid;
		this.comments = comments;
		this.rating = rating;
	}
	public int getReviewid() {
		return reviewid;
	}
	public void setReviewid(int reviewid) {
		this.reviewid = reviewid;
	}
	public int getEmployeeid() {
		return employeeid;
	}
	public void setEmployeeid(int employeeid) {
		this.employeeid = employeeid;
	}
	public String getEmployeename() {
		return employeename;
	}
	public void setEmployeename(String employeename) {
		this.employeename = employeename;
	}
	public String getReviewdate() {
		return reviewdate;
	}
	public void setReviewdate(String reviewdate) {
		this.reviewdate = reviewdate;
	}
	public int getReviewerid() {
		return reviewerid;
	}
	public void setReviewerid(int reviewerid) {
		this.reviewerid = reviewerid;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}
		
}
