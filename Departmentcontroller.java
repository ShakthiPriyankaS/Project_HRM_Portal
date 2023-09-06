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

import com.example.demo.model.Department;
import com.example.demo.service.Departmentservice;


@RestController

public class Departmentcontroller {
	
	
	@Autowired
	   Departmentservice sser;
		
		@PostMapping("adddepartment")
		public Department add(@RequestBody Department ss) {		
			return sser.saveinfo(ss);
		}
		
		@PostMapping("addndepartment")
		public List<Department> addndetails(@RequestBody List<Department> ss)
		{
			return sser.savedetails(ss);
		}
		@GetMapping("showdepartment")
		public List<Department> show()
		{
			return sser.showinfo();
		}
		@PutMapping("updatedepartment")
		public Department modify(@RequestBody Department ss)
		{
			return sser.changeinfo(ss);
		}
		@DeleteMapping("deletedepartment")
		
		public String delete(@RequestBody Department ss)
		{
			sser.deleteinfo(ss);
			return "Deleted successfully";
			
		}
		@GetMapping("delpIdd/{departmentid}")
		public Optional<Department> getbyId(@PathVariable int departmentid )
		{
			return sser.showbyid(departmentid);

		}
		@DeleteMapping("delIdd/{departmentid}")
		public void deleteById(@PathVariable int departmentid)
		{
			sser.deleteid(departmentid);

		}
		@DeleteMapping("delparamd")
		public void deleteBypId(@RequestParam int departmentid)
		{
			sser.deletepid(departmentid);

		}
		@PutMapping("updatebyidd/{departmentid}")
		public String modeifybyId(@PathVariable int departmentid,@RequestBody Department ss)
		{
			return sser.updateinfobyid(departmentid,ss);
		}		

}
