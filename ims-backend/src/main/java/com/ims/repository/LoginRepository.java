package com.ims.repository;

import com.ims.model.Employee;
import com.ims.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, Long> {
}
