package com.tutorial.employeemanagmentbackend.serviceInterface;

import com.tutorial.employeemanagmentbackend.model.Department;
import com.tutorial.employeemanagmentbackend.model.Employee;

import java.util.List;
import java.util.Optional;

public interface DepartmentServiceInterface {
    public Department saveDepartment(Department department);
    public Optional<Department> getDepartmentById(int id);
    List<Department> getAllDepartment();
    Department updateDepartment(int id, Department department);
    void deleteDepartment(int id);
}
