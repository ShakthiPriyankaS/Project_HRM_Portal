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

import com.example.demo.model.Profile;
import com.example.demo.service.Profileservice;



@RestController
@CrossOrigin

public class Profilecontroller {
	
	@Autowired
	   Profileservice sser;
		
		@PostMapping("addprofile")
		public Profile add(@RequestBody Profile ss) {		
			return sser.saveinfo(ss);
		}
		
		@PostMapping("addnprofile")
		public List<Profile> addndetails(@RequestBody List<Profile> ss)
		{
			return sser.savedetails(ss);
		}
		@GetMapping("showprofile")
		public List<Profile> show()
		{
			return sser.showinfo();
		}
		@PutMapping("updateprofile")
		public Profile modify(@RequestBody Profile ss)
		{
			return sser.changeinfo(ss);
		}
		@DeleteMapping("deleteprofile")
		
		public String delete(@RequestBody Profile ss)
		{
			sser.deleteinfo(ss);
			return "Deleted successfully";
			
		}
		@GetMapping("delpIdp/{profileid}")
		public Optional<Profile> getbyId(@PathVariable int profileid )
		{
			return sser.showbyid(profileid);

		}
		@DeleteMapping("delIdp/{profileid}")
		public void deleteById(@PathVariable int profileid)
		{
			sser.deleteid(profileid);

		}
		@DeleteMapping("delparamp")
		public void deleteBypId(@RequestParam int profileid)
		{
			sser.deletepid(profileid);

		}
		@PutMapping("updatebyidp/{profileid}")
		public String modeifybyId(@PathVariable int profileid,@RequestBody Profile ss)
		{
			return sser.updateinfobyid(profileid,ss);
		}
		

}
