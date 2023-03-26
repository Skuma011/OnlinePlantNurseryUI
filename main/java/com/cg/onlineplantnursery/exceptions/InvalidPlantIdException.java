package com.cg.onlineplantnursery.exceptions;

public class InvalidPlantIdException extends RuntimeException {

	public InvalidPlantIdException() {
		
	}
	
	public InvalidPlantIdException(String msg) {
		super(msg);
	}
}
