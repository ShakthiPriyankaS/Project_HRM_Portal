package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Department;

@RestController

public interface Departmentrepo extends JpaRepository<Department, Integer> {

}
