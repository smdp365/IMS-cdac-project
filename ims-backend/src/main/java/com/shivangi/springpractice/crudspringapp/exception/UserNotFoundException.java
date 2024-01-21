package com.shivangi.springpractice.crudspringapp.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Oops....Could not found the user with id " + id);
    }

}
