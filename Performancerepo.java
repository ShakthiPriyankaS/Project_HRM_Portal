package com.example.demo.repository;




import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Performance;

import jakarta.transaction.Transactional;


@Repository

public interface Performancerepo extends JpaRepository<Performance, Integer> {
	
	 @Query("SELECT p FROM Performance p WHERE p.rating > 50")
	    List<Performance> findEmployeesWithRatingGreaterThan50();
	
	@Transactional
    @Modifying
    @Query("DELETE FROM Performance p WHERE p.rating < 50")
    void deleteEmployeesWithRatingsLessThan50();
	
	 
}
