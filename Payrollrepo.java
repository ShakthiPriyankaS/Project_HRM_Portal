package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Payroll;


@Repository

public interface Payrollrepo extends JpaRepository<Payroll, Integer> {
	

}
