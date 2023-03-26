package com.cg.onlineplantnursery.exceptions;

public class InvalidPlantNameException extends RuntimeException {

	public InvalidPlantNameException(){
		
	}
	
	public InvalidPlantNameException(String msg){
		super(msg);
	}
}
