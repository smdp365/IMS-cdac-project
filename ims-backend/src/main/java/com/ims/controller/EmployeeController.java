package com.ims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ims.DTO.EmployeeDTO;
import com.ims.Service.EmployeeService;

@RestController
@CrossOrigin("http://localhost:5172")
//@RequestMapping("api/v1/employee")

public class EmployeeController {
	
	 @Autowired
	    private EmployeeService employeeService;


	@PostMapping("/register")
	public String registerEmployee(@RequestBody EmployeeDTO employeeDTO) {
	        String id = employeeService.addEmployee(employeeDTO);
	        return id;
	    
		
	}
	
}
