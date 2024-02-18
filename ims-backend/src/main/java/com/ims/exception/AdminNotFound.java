package com.ims.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value=HttpStatus.NOT_FOUND)
public class AdminNotFound extends Exception {

	private static final long serialVersionUID = 1L;
	public AdminNotFound(String message) {
		super("Invalid User");
	}

	
}