package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.model.Attendance;
import com.example.demo.repository.Attendancreepo;

@Service

public class Attendanceservice {
	
	@Autowired
	
	Attendancreepo ar;
	
	public Attendance saveinfo(Attendance ss)
	{
		return ar.save(ss);
	}
	
	public List<Attendance> savedetails(List<Attendance> ss){
		
		return (List<Attendance>)ar.saveAll(ss);
	}
	public List<Attendance> showinfo()
	{
	      return ar.findAll();
	}
	
	public Optional<Attendance> showbyid(int id)
	{
		return ar.findById(id);
	}
	public Attendance changeinfo(Attendance ss)
	{
		return ar.saveAndFlush(ss);
	}
public String updateinfobyid(int id,Attendance ss)
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
	public void deleteinfo(Attendance ss)
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
		
		public Page<Attendance> sortAndPage(String sortField, int pageNo, int pageSize) {
	        Sort sort = Sort.by(Sort.Direction.DESC, sortField);
	        PageRequest pageRequest = PageRequest.of(pageNo, pageSize, sort);

	        return ar.findAll(pageRequest);
	    }
		
		public List<Attendance> getattendance(String s)
		{
			return ar.getAttendanceInfo(s);
		}
		
}
