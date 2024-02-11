package com.ims.model;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

import jakarta.persistence.*;


@Entity
@Table(name="employees")
public class Employee {
	
	@Id
	@Column(name="Empid", length=45)
	@GeneratedValue(strategy= GenerationType.AUTO)
	private int  empid;
	
	@Column(name="Empname" , length=255)
	private String  empname;
	
	@Column(name="mobileno" , length=255)
	private int mobileno;
	
	@Column(name="Email" , length=255)
	private String Email;
	
	@Column(name="password" , length=255)
	private String password;
	
	
	
	public Employee(int empid, String empname, int mobileno, String email, String password) {
		this.empid = empid;
		this.empname = empname;
		this.mobileno = mobileno;
		Email = email;
		password = password;
		
	}


	public Employee() {
		
	}


	public int getEmpid() {
		return empid;
	}


	public void setEmpid(int empid) {
		this.empid = empid;
	}


	public String getEmpname() {
		return empname;
	}


	public void setEmpname(String empname) {
		this.empname = empname;
	}


	public int getMobileno() {
		return mobileno;
	}


	public void setMobileno(int mobileno) {
		this.mobileno = mobileno;
	}


	public String getEmail() {
		return Email;
	}


	public void setEmail(String email) {
		Email = email;
	}


	public String getpassword() {
		return password;
	}


	public void setpassword(String password) {
		Base64.Encoder encoder = Base64.getEncoder();  
        String normalString = password;
        String encodedString = encoder.encodeToString(   // encrypt password in database field
        normalString.getBytes(StandardCharsets.UTF_8) );
        this.password = encodedString;
	}
	
	 @Override
	    public String toString() {
	        return "Employee{" +
	                "employeeid=" + empid +
	                ", employeename='" + empname + '\'' +
	                ",mobile=" + mobileno +
	                ", address='" + Email + '\'' +
	                ", password=" + password +
	                '}';
	    }
    }
	
	
	
	
	
	
	
	


