package com.ims.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ims.model.Login;
import com.ims.repository.LoginRepository;

import jakarta.transaction.Transactional;

@Service
	@Transactional
	public class LoginService {
		
		@Autowired
		private LoginRepository arepo;
		
		public Login registerAdmin(Login l) {
			return arepo.save(l);
		}
		/*
		Optional is a container object used to contain not-null objects introduced in Java 8. 
		Optional object is used to represent null with absent value. 
		This class has various utility methods to facilitate code to handle values as ‘available’ or ‘not available’ instead of checking null values. */

		public Login loginAdmin(String email) {
			return arepo.findByEmail(email).orElse(null); // Invoke Custom method
		}	
	}


