package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.Leave;
import com.example.demo.repository.Leaverepo;

@Service

public class Leaveservice {
	@Autowired
 Leaverepo ar;
	
	public Leave saveinfo(Leave ss)
	{
		return ar.save(ss);
	}
	
	public List<Leave> savedetails(List<Leave> ss){
		
		return (List<Leave>)ar.saveAll(ss);
	}
	public List<Leave> showinfo()
	{
	      return ar.findAll();
	}
	
	public Optional<Leave> showbyid(int id)
	{
		return ar.findById(id);
	}
	public Leave changeinfo(Leave ss)
	{
		return ar.saveAndFlush(ss);
	}
public String updateinfobyid(int id,Leave ss)
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
	public void deleteinfo(Leave ss)
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
