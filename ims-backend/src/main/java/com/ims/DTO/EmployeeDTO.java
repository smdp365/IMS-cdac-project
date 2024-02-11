package com.ims.DTO;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

public class EmployeeDTO {
	

    private int empid;
    private String empname;
    private int mobileno;
    private String Email;
    private String password;

    public EmployeeDTO(int empid, String empname, int mobileno, String email, String password) {
		this.empid = empid;
		this.empname = empname;
		this.mobileno = mobileno;
		this.Email = email;
		this.password = password;
	
		
	}

    public EmployeeDTO() {
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
        return "EmployeeDTO{"  +
                "employeeid=" + empid +
                ", employeename='" + empname + '\'' +
                ",mobile=" + mobileno +
                ", address='" + Email + '\'' +
                ", password=" + password +
                '}';
    }

}
