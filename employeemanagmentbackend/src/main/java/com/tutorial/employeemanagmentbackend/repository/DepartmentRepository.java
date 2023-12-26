package com.tutorial.employeemanagmentbackend.repository;

import com.tutorial.employeemanagmentbackend.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department,Integer> {
}
