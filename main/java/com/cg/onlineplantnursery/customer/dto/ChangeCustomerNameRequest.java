package com.cg.onlineplantnursery.customer.dto;

public class ChangeCustomerNameRequest {
	
	private Integer id;
	private String customerName;
	
	 public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	    public String getCustomerName() {
	        return customerName;
	    }

	    public void setCustomerName(String customerName) {
	        this.customerName = customerName;
	    }

}
