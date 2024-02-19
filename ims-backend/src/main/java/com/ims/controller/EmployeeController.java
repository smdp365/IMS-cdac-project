package com.ims.controller;

import com.ims.model.Employee;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
import com.ims.model.EmployeeEntity;
import com.ims.repository.EmployeeRepository;
import java.util.List;

import static com.ims.utils.Mapper.toEmployeeEntity;

@RestController
@CrossOrigin("http://localhost:5174")
//@Slf4j
public class EmployeeController {    

	Logger logger = LoggerFactory.getLogger(getClass().getName());

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/employee")
    EmployeeEntity addEmployee(@RequestBody Employee employee){
    	logger.info("Adding new employee {}", employee);
//    	log.info(newEmployee.getId());
        return employeeRepository.save(toEmployeeEntity(employee));
    }

    @GetMapping("/allemployees")
    List<EmployeeEntity> getAllEmployees(){
        return employeeRepository.findAll();
    }

//    @GetMapping("/employee/{id}")
//    ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
//        return ResponseEntity.badRequest().body(employeeRepository.findById(id)
//                .orElseThrow(()->new EmployeeNotFoundException(id)));
//    }

    @GetMapping("/employee/{id}")
    EmployeeEntity getEmployeeById(@PathVariable Long id){
        return employeeRepository.findById(id)
                .orElseThrow(()->new EmployeeNotFoundException(id));
    }


    @PutMapping("/employee/{id}")
    EmployeeEntity updateEmployee(@RequestBody EmployeeEntity newEmployeeEntity, @PathVariable Long id){
        return employeeRepository.findById(id)
                .map(employeeEntity ->{
                	employeeEntity.setFirstName(newEmployeeEntity.getFirstName());
                	employeeEntity.setLastName(newEmployeeEntity.getLastName());
                	employeeEntity.setEmail(newEmployeeEntity.getEmail());
                	employeeEntity.setMobNo(newEmployeeEntity.getMobNo());
                    return employeeRepository.save(employeeEntity);
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
    
////    
//    @PostMapping("/login")
//	public ResponseEntity<Boolean> loginEmployee(@Validated @RequestBody Employee employee) throws EmployeeNotFoundException
//	{
//		Boolean isAuthenticated = false;
//		String email=employee.getEmail();
//		String password=employee.getPassword();
//	
//		Employee e = dservice.loginDealer(email).orElseThrow(() ->
//		new ResourceNotFoundException("Dealer not found for this email :: " + email));
//		
//		if(email.equals(d.getEmail()) && password.equals(d.getPassword()))
//		{
//			isAuthenticated = true;
//
//		}
//		return ResponseEntity.ok(isAuthenticated);
//	}
    
    


}
