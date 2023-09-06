package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Attendance;

@Repository
public interface Attendancreepo extends JpaRepository<Attendance, Integer> {
	
	
	@Query(value="select * from Attendance where status=:status",nativeQuery=true)
	public List<Attendance> getAttendanceInfo(@Param("status") String status);

}
