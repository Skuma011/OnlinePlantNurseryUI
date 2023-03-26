package com.cg.onlineplantnursery.exceptions;

public class InvalidPlantHeightException extends RuntimeException {

	public InvalidPlantHeightException(){
		
	}
	
	public InvalidPlantHeightException(String msg){
		super(msg);
	}
}
