package com.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ims.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
