package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.model.Leave;
import com.example.demo.service.Leaveservice;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class Leavecontroller {
	
	@Autowired
	   Leaveservice sser;
		
		@PostMapping("addleave")
		public Leave add(@RequestBody Leave ss) {		
			return sser.saveinfo(ss);
		}
		
		@PostMapping("addnleave")
		public List<Leave> addndetails(@RequestBody List<Leave> ss)
		{
			return sser.savedetails(ss);
		}
		@GetMapping("showleave")
		public List<Leave> show()
		{
			return sser.showinfo();
		}
		@PutMapping("updateleave")
		public Leave modify(@RequestBody Leave ss)
		{
			return sser.changeinfo(ss);
		}
		@DeleteMapping("deleteleave")
		
		public String delete(@RequestBody Leave ss)
		{
			sser.deleteinfo(ss);
			return "Deleted successfully";
			
		}
		@GetMapping("delpIdl/{leaveid}")
		public Optional<Leave> getbyId(@PathVariable int leaveid )
		{
			return sser.showbyid(leaveid);

		}
		@DeleteMapping("delIdl/{leaveid}")
		public void deleteById(@PathVariable int leaveid)
		{
			sser.deleteid(leaveid);

		}
		@DeleteMapping("delparaml")
		public void deleteBypId(@RequestParam int leaveid)
		{
			sser.deletepid(leaveid);

		}
		@PutMapping("updatebyidl/{leaveid}")
		public String modeifybyId(@PathVariable int leaveid,@RequestBody Leave ss)
		{
			return sser.updateinfobyid(leaveid,ss);
		}
		

}
