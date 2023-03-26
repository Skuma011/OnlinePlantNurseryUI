package com.cg.onlineplantnursery.exceptions;

public class InvalidPlantTypeException extends RuntimeException {

	public InvalidPlantTypeException() {
		
	}
	
	public InvalidPlantTypeException(String msg) {
		super(msg);
	}
}
