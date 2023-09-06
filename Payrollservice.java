package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Payroll;
import com.example.demo.repository.Payrollrepo;


@Service

public class Payrollservice {
	@Autowired
   Payrollrepo ar;
	
	public Payroll saveinfo(Payroll ss)
	{
		return ar.save(ss);
	}
	
	public List<Payroll> savedetails(List<Payroll> ss){
		
		return (List<Payroll>)ar.saveAll(ss);
	}
	public List<Payroll> showinfo()
	{
	      return ar.findAll();
	}
	
	public Optional<Payroll> showbyid(int id)
	{
		return ar.findById(id);
	}
	public Payroll changeinfo(Payroll ss)
	{
		return ar.saveAndFlush(ss);
	}
public String updateinfobyid(int id,Payroll ss)
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
	public void deleteinfo(Payroll ss)
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



}
