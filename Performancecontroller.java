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

import com.example.demo.model.Performance;
import com.example.demo.service.Performanceservice;


@RestController
@CrossOrigin
public class Performancecontroller {
	
	@Autowired
	   Performanceservice sser;
		
		@PostMapping("addperformance")
		public Performance add(@RequestBody Performance ss) {		
			return sser.saveinfo(ss);
		}
		
		@PostMapping("addnperformance")
		public List<Performance> addndetails(@RequestBody List<Performance> ss)
		{
			return sser.savedetails(ss);
		}
		@GetMapping("showperformance")
		public List<Performance> show()
		{
			return sser.showinfo();
		}
		@PutMapping("updateperformance")
		public Performance modify(@RequestBody Performance ss)
		{
			return sser.changeinfo(ss);
		}
		@DeleteMapping("deleteperformance")
		
		public String delete(@RequestBody Performance ss)
		{
			sser.deleteinfo(ss);
			return "Deleted successfully";
			
		}
		@GetMapping("showpIdpe/{reviewid}")
		public Optional<Performance> getbyId(@PathVariable int reviewid )
		{
			return sser.showbyid(reviewid);

		}
		@DeleteMapping("delIdpe/{reviewid}")
		public void deleteById(@PathVariable int reviewid)
		{
			sser.deleteid(reviewid);

		}
		@DeleteMapping("delparampe")
		public void deleteBypId(@RequestParam int reviewid)
		{
			sser.deletepid(reviewid);

		}
		@PutMapping("updatebyidpe/{reviewid}")
		public String modeifybyId(@PathVariable int reviewid,@RequestBody Performance ss)
		{
			return sser.updateinfobyid(reviewid,ss);
		}
		
		 @GetMapping("/ratingGreaterThan50")
		    public List<Performance> getEmployeesWithRatingGreaterThan50() {
		        return sser.getEmployeesWithRatingGreaterThan50();
		    }
		@DeleteMapping("/delete-low-ratings")
	    public String deleteEmployeesWithRatingssLessThan50() {
	        sser.deleteEmployeesWithRatingLessThan50();
	        return "Deleted employees with rating < 50";
	    }
}
