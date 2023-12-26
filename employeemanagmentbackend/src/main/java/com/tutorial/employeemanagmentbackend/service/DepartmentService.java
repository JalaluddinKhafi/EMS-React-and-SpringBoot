package com.tutorial.employeemanagmentbackend.service;

import com.tutorial.employeemanagmentbackend.model.Department;
import com.tutorial.employeemanagmentbackend.repository.DepartmentRepository;
import com.tutorial.employeemanagmentbackend.serviceInterface.DepartmentServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DepartmentService implements DepartmentServiceInterface {
    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public Optional<Department> getDepartmentById(int id) {
        return departmentRepository.findById(id);
    }

    @Override
    public List<Department> getAllDepartment() {
        return departmentRepository.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    @Override
    public Department updateDepartment(int id, Department department) {
        Department departmentToUpdate = departmentRepository.findById(id).orElseThrow();
        departmentToUpdate.setName(department.getName());
        departmentToUpdate.setDescription(department.getDescription());
        return departmentRepository.save(departmentToUpdate);
    }

    @Override
    public void deleteDepartment(int id) {
        departmentRepository.deleteById(id);
    }
}
