package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Attendance;
import com.example.demo.service.Attendanceservice;

@RestController
@CrossOrigin
public class Attendancecontroller {
	
	@Autowired
   Attendanceservice sser;
	
	@PostMapping("addattendance")
	public Attendance add(@RequestBody Attendance ss) {		
		return sser.saveinfo(ss);
	}
	
	@PostMapping("addnattendance")
	public List<Attendance> addndetails(@RequestBody List<Attendance> ss)
	{
		return sser.savedetails(ss);
	}
	@GetMapping("showattendance")
	public List<Attendance> show()
	{
		return sser.showinfo();
	}
	@PutMapping("updateattendance")
	public Attendance modify(@RequestBody Attendance ss)
	{
		return sser.changeinfo(ss);
	}
	@DeleteMapping("deleteattendance")
	
	public String delete(@RequestBody Attendance ss)
	{
		sser.deleteinfo(ss);
		return "Deleted successfully";
		
	}
	@GetMapping("delpIda/{attendanceid}")
	public Optional<Attendance> getbyId(@PathVariable int attendanceid )
	{
		return sser.showbyid(attendanceid);

	}
	@DeleteMapping("delIda/{attendanceid}")
	public void deleteById(@PathVariable int attendanceid)
	{
		sser.deleteid(attendanceid);

	}
	@DeleteMapping("delparama")
	public void deleteBypId(@RequestParam int attendanceid)
	{
		sser.deletepid(attendanceid);

	}
	@PutMapping("updatebyida/{attendanceid}")
	public String modeifybyId(@PathVariable int attendanceid,@RequestBody Attendance ss)
	{
		return sser.updateinfobyid(attendanceid,ss);
	}
	
	@GetMapping("/attendance")
	public List<Attendance> getSortedAndPagedStudents(
	        @RequestParam(name = "sortField", defaultValue = "id") String sortField,
	        @RequestParam(name = "pageNo", defaultValue = "0") int pageNo,
	        @RequestParam(name = "pageSize", required = false) Integer pageSize) {
	    
	    Page<Attendance> page = sser.sortAndPage(sortField, pageNo, pageSize);
	    return page.getContent();
	}	
	@GetMapping("status/{status}")
	public List<Attendance> getattendanceinfo(@PathVariable String status)
	{
		return sser.getattendance(status);
	}

}
