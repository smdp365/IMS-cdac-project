package com.ims.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
//@Getter
//@Setter
public class Login {

    @Id
    @GeneratedValue
    private Long id;
    private String email;
    private String passwordHash;

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean admin) {
		isAdmin = admin;
	}

	private boolean isAdmin = false;

	public Login(Long id, String email, String passwordHash) {
		this.id = id;
		this.email = email;
		this.passwordHash = passwordHash;
	}

	public Login() {
		// TODO Auto-generated constructor stub
	}
	
    
    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPasswordHash() {
		return passwordHash;
	}


	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}


	


}
