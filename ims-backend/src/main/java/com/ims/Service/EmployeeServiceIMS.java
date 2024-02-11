package com.ims.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.ims.DTO.EmployeeDTO;
import com.ims.model.Employee;
import com.ims.repository.RegisterRepository;

@Service
public class EmployeeServiceIMS implements EmployeeService {
	
	@Autowired
    private RegisterRepository registerRepo;
   
	@Override
	public String addEmployee(EmployeeDTO employeeDTO) {
        Employee employee = new Employee(
                employeeDTO.getEmpid(),
                employeeDTO.getEmpname(),
                employeeDTO.getMobileno(),
                employeeDTO.getEmail(),
                employeeDTO.getpassword()
                
        );
        registerRepo.save(employee);
        return employee.getEmpname();
	}

}
