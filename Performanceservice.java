package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Performance;
import com.example.demo.repository.Performancerepo;

@Service

public class Performanceservice {
	
	@Autowired
Performancerepo ar;
	
	public Performance saveinfo(Performance ss)
	{
		return ar.save(ss);
	}
	
	public List<Performance> savedetails(List<Performance> ss){
		
		return (List<Performance>)ar.saveAll(ss);
	}
	public List<Performance> showinfo()
	{
	      return ar.findAll();
	}
	
	public Optional<Performance> showbyid(int id)
	{
		return ar.findById(id);
	}
	public Performance changeinfo(Performance ss)
	{
		return ar.saveAndFlush(ss);
	}
public String updateinfobyid(int id,Performance ss)
{
	ar.saveAndFlush(ss);
	if(ar.existsById(id))
	{
		return "updated";
	}
		else
		{
			return "Enter valid id";
		}
	}
	public void deleteinfo(Performance ss)
	{
		ar.delete(ss);
	}
	//delete by pathvariable
	public void deleteid(int id)
	{
		ar.deleteById(id);
	}
	//delete by requestparam
		public void deletepid(int id)
		{
			ar.deleteById(id);
		}
		 public void deleteEmployeesWithRatingLessThan50() {
		       ar.deleteEmployeesWithRatingsLessThan50();
		    }
		 public List<Performance> getEmployeesWithRatingGreaterThan50() {
		        return ar.findEmployeesWithRatingGreaterThan50();
		    }
		 
}
