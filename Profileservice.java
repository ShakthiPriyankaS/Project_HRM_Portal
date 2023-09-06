package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Profile;
import com.example.demo.repository.Profilerepo;

@Service

public class Profileservice {
	@Autowired
 Profilerepo ar;
	
	public Profile saveinfo(Profile ss)
	{
		return ar.save(ss);
	}
	
	public List<Profile> savedetails(List<Profile> ss){
		
		return (List<Profile>)ar.saveAll(ss);
	}
	public List<Profile> showinfo()
	{
	      return ar.findAll();
	}
	
	public Optional<Profile> showbyid(int id)
	{
		return ar.findById(id);
	}
	public Profile changeinfo(Profile ss)
	{
		return ar.saveAndFlush(ss);
	}
public String updateinfobyid(int id ,Profile ss)
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
	public void deleteinfo(Profile ss)
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
