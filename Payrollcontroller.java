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

import com.example.demo.model.Payroll;
import com.example.demo.service.Payrollservice;



@RestController
@CrossOrigin
public class Payrollcontroller {
	
	@Autowired
	  Payrollservice sser;
		
		@PostMapping("addpayroll")
		public Payroll add(@RequestBody Payroll ss) {		
			return sser.saveinfo(ss);
		}
		
		@PostMapping("addnpayroll")
		public List<Payroll> addndetails(@RequestBody List<Payroll> ss)
		{
			return sser.savedetails(ss);
		}
		@GetMapping("showpayroll")
		public List<Payroll> show()
		{
			return sser.showinfo();
		}
		@PutMapping("updatepayroll")
		public Payroll modify(@RequestBody Payroll ss)
		{
			return sser.changeinfo(ss);
		}
		@DeleteMapping("deletepayroll")
		
		public String delete(@RequestBody Payroll ss)
		{
			sser.deleteinfo(ss);
			return "Deleted successfully";
			
		}
		@GetMapping("showpIdpa/{payrollid}")
		public Optional<Payroll> getbyId(@PathVariable int payrollid )
		{
			return sser.showbyid(payrollid);

		}
		@DeleteMapping("delIdpa/{payrollid}")
		public void deleteById(@PathVariable int payrollid)
		{
			sser.deleteid(payrollid);

		}
		
		@DeleteMapping("delparampa")
		public void deleteBypId(@RequestParam int payrollid)
		{
			sser.deletepid(payrollid);

		}
		@PutMapping("updatebyidpa/{payrollid}")
		public String modeifybyId(@PathVariable int payrollid,@RequestBody Payroll ss)
		{
			return sser.updateinfobyid(payrollid,ss);
		}
		

}
