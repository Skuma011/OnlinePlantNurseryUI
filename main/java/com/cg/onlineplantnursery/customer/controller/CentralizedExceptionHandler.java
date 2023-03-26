package com.cg.onlineplantnursery.customer.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.cg.onlineplantnursery.exceptions.*;

@RestControllerAdvice
public class CentralizedExceptionHandler {
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler(CustomerNotFoundException.class)
	public String handleCustomerNotFound(CustomerNotFoundException e) {
		return e.getMessage();
	}
	

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(CustomerNotAddedException.class)
	public String handleCustomerNotAdded(CustomerNotAddedException e) {
		return e.getMessage();
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(InvalidCustomerNameException.class)
	public String handleInvalidCustomerNameException(InvalidCustomerNameException e) {
		return e.getMessage();
	}
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(InvalidCustomerEmailException.class)
	public String handleInvalidCustomerEmailException(InvalidCustomerEmailException e) {
		return e.getMessage();
	}
	

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(InvalidCustomerPasswordException.class)
	public String handleInvalidCustomerPasswordException(InvalidCustomerPasswordException e) {
		return e.getMessage();
	}
	
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(InvalidCustomerIdException.class)
	public String handleInvalidCustomerIdException(InvalidCustomerIdException e) {
		return e.getMessage();
	}
	
	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(Exception.class)
	public String handleCatchAllException(Exception e) {
		return e.getMessage();
	}
	
	
}
