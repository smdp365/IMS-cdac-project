package com.ims.repository;

import com.ims.model.Login;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Login, Long> {
	public Optional<Login> findByEmail(String email);
}
