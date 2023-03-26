package com.cg.onlineplantnursery.exceptions;

public class InvalidPlantCostException extends RuntimeException {

	public InvalidPlantCostException(){
		
	}
	
	public InvalidPlantCostException(String msg){
		super(msg);
	}
}
