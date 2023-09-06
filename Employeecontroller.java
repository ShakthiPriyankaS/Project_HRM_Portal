package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Employee;
import com.example.demo.service.Employeeservice;

@RestController
public class Employeecontroller {
	
	@Autowired
	   Employeeservice sser;
		
		@PostMapping("addemployee")
		public Employee add(@RequestBody Employee ss) {		
			return sser.saveinfo(ss);
		}
		
		@PostMapping("addnemployee")
		public List<Employee> addndetails(@RequestBody List<Employee> ss)
		{
			return sser.savedetails(ss);
		}
		@GetMapping("showemployee")
		public List<Employee> show()
		{
			return sser.showinfo();
		}
		@PutMapping("updateemployee")
		public Employee modify(@RequestBody Employee ss)
		{
			return sser.changeinfo(ss);
		}
		@DeleteMapping("deleteemployee")
		
		public String delete(@RequestBody Employee ss)
		{
			sser.deleteinfo(ss);
			return "Deleted successfully";
			
		}
		@GetMapping("delpIde/{employeeid}")
		public Optional<Employee> getbyId(@PathVariable int employeeid )
		{
			return sser.showbyid(employeeid);

		}
		@DeleteMapping("delIde/{employeeid}")
		public void deleteById(@PathVariable int employeeid)
		{
			sser.deleteid(employeeid);

		}
		@DeleteMapping("delparame")
		public void deleteBypId(@RequestParam int employeeid)
		{
			sser.deletepid(employeeid);

		}
		@PutMapping("updatebyide/{employeeid}")
		public String modeifybyId(@PathVariable int employeeid,@RequestBody Employee ss)
		{
			return sser.updateinfobyid(employeeid,ss);
		}
		@PostMapping("addempleave")
		public Employee add1(@RequestBody Employee ss) {		
			return sser.savestucoursedetails(ss);
		}
		@GetMapping("showdetails1")
		public List<Employee> show1()
		{
			return sser.showstucourseinfo();
		}
		
		
		@PostMapping("addemprecord")
		public Employee add11(@RequestBody Employee ss) {		
			return sser.saveinfo(ss);
		}
		@PostMapping("addnemprecord")
		public List<Employee> addndetails1(@RequestBody List<Employee> ss)
		{
			return sser.savedetails(ss);
		}
		@GetMapping("showdetails11")
		public List<Employee> show2()
		{
			return sser.showstucourseinfo1();
		}
		
		
}
