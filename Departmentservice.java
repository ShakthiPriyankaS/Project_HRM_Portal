package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Department;
import com.example.demo.repository.Departmentrepo;

@Service

public class Departmentservice {
	
	@Autowired
	Departmentrepo ar;
	
	public Department saveinfo(Department ss)
	{
		return ar.save(ss);
	}
	
	public List<Department> savedetails(List<Department> ss){
		
		return (List<Department>)ar.saveAll(ss);
	}
	public List<Department> showinfo()
	{
	      return ar.findAll();
	}
	
	public Optional<Department> showbyid(int id)
	{
		return ar.findById(id);
	}
	public Department changeinfo(Department ss)
	{
		return ar.saveAndFlush(ss);
	}
public String updateinfobyid(int id,Department ss)
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
	public void deleteinfo(Department ss)
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
