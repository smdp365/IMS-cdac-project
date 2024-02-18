package com.ims.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ims.exception.AdminNotFound;
import com.ims.model.Login;
import com.ims.service.LoginService;

	@RestController
	@CrossOrigin(origins = "http://localhost:5174")
//	@RequestMapping(value="/api")
	public class LogController {
		@Autowired
		private LoginService aservice;
		
		
		@PostMapping("/loginReal")
		public ResponseEntity<Boolean> loginAdmin(@Validated @RequestBody Login login) throws AdminNotFound
		{
			// check
			System.out.println(login.getEmail() + login.getPasswordHash());
			
			Boolean isAuthenticated = false;
			String email=login.getEmail();
			String password=login.getPasswordHash();

			
			Login a = aservice.loginAdmin(email).orElseThrow(() ->
			new AdminNotFound("Admin not found for this email :: " + email));
			
			System.out.println(a.getEmail() + a.getPasswordHash());
			if(a.getEmail().equals(email)&& password != null && password.equals(a.getPasswordHash()))
			{
				isAuthenticated = true;
 
			}
			return ResponseEntity.ok(isAuthenticated);
		}

	}


