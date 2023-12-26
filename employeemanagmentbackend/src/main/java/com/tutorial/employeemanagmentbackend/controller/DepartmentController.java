package com.tutorial.employeemanagmentbackend.controller;

import com.tutorial.employeemanagmentbackend.model.Department;
import com.tutorial.employeemanagmentbackend.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/department")
@CrossOrigin("*")
public class DepartmentController {
    @Autowired
    private DepartmentService departmentService; //we are bringing in Employee Service instance

    /**This is a post Request, here we are gonna ba saving an employee*/
    @PostMapping
    public Department saveDepartment(@RequestBody Department department){
        return departmentService.saveDepartment(department);
    }
    /** Here, we are getting all Department*/
    @GetMapping
    public List<Department> getAllEmployee(){
        return departmentService.getAllDepartment();
    }
    /**here, we are geting one department*/
    @GetMapping("/{id}")
    public Optional<Department> getDepartmentById(@PathVariable int id){
        return departmentService.getDepartmentById(id);
    }
    /**here, we get gonna be updating an department*/
    @PutMapping("/{id}")
    public Department updateDepartment(@PathVariable int id, @RequestBody Department department){
        return departmentService.updateDepartment(id,department);
    }
    /**Here, we are gonna be deleting an department*/
    @DeleteMapping("/{id}")
    public void deleteDepartment(@PathVariable int id){
        departmentService.deleteDepartment(id);
    }
}
