package com.ims.repository;

//import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import com.ims.model.Employee;

@EnableJpaRepositories
@Repository
public interface RegisterRepository extends JpaRepository<Employee, Integer>{
	
	
	//public Optional<Employee> findByEmail(String email);

}
