package com.ims.exception;

public class EmployeeNotFoundException extends RuntimeException{
    public EmployeeNotFoundException(Long id){
        super("Oops....Could not found the Employee with id " + id);
    }

}
