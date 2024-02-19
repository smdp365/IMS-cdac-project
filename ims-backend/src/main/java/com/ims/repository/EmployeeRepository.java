package com.ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ims.model.EmployeeEntity;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
