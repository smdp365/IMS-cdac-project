package com.ims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ims.exception.EmployeeNotFoundException;
import com.ims.model.Employee;
import com.ims.repository.EmployeeRepository;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:5173")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/employee")
    Employee addEmployee(@RequestBody Employee newEmployee){
        return employeeRepository.save(newEmployee);
    }

    @GetMapping("/allemployees")
    List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

//    @GetMapping("/employee/{id}")
//    ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
//        return ResponseEntity.badRequest().body(employeeRepository.findById(id)
//                .orElseThrow(()->new EmployeeNotFoundException(id)));
//    }

    @GetMapping("/employee/{id}")
    Employee getEmployeeById(@PathVariable Long id){
        return employeeRepository.findById(id)
                .orElseThrow(()->new EmployeeNotFoundException(id));
    }


    @PutMapping("/employee/{id}")
    Employee updateEmployee(@RequestBody Employee newEmployee, @PathVariable Long id){
        return employeeRepository.findById(id)
                .map(employee->{
                	employee.setFirstName(newEmployee.getFirstName());
                	employee.setLastName(newEmployee.getLastName());
                	employee.setEmail(newEmployee.getEmail());
                	employee.setMobNo(newEmployee.getMobNo());
                    return employeeRepository.save(employee);
                }).orElseThrow(()-> new EmployeeNotFoundException(id));

    }

    @DeleteMapping("employee/{id}")
    String deleteEmployeeById(@PathVariable Long id){
        if(!employeeRepository.existsById(id)){
            throw new EmployeeNotFoundException(id);
        }

        employeeRepository.deleteById(id);
        return "MySuccessfulMessage: Successfully deleted Employee with id " + id + " .";
    }


}
