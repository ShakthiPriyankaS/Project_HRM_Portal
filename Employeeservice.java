package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Employee;
import com.example.demo.repository.Employeerepo;





@Service

public class Employeeservice {
	
	@Autowired
   Employeerepo ar;
	
	public Employee saveinfo(Employee ss)
	{
		return ar.save(ss);
	}
	
	public List<Employee> savedetails(List<Employee> ss){
		
		return (List<Employee>)ar.saveAll(ss);
	}
	public List<Employee> showinfo()
	{
	      return ar.findAll();
	}
	
	public Optional<Employee> showbyid(int id)
	{
		return ar.findById(id);
	}
	public Employee changeinfo(Employee ss)
	{
		return ar.saveAndFlush(ss);
	}
public String updateinfobyid(int id,Employee ss)
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
	public void deleteinfo(Employee ss)
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

		public Employee savestucoursedetails(Employee ss)
		{
			return ar.save(ss);
		}
		
		public List<Employee> showstucourseinfo()
		{
		      return ar.findAll();
		}
		public Employee savestucoursedetails1(Employee ss)
		{
			return ar.save(ss);
		}
		
		public List<Employee> showstucourseinfo1()
		{
		      return ar.findAll();
		}

}
