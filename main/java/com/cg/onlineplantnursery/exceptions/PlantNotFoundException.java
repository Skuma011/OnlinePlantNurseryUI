package com.cg.onlineplantnursery.exceptions;

public class PlantNotFoundException extends RuntimeException {

	public PlantNotFoundException() {
		
	}
	
	public PlantNotFoundException(String msg) {
		super(msg);
	}
}
