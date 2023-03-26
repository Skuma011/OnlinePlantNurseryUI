package com.cg.onlineplantnursery.customer.dto;

public class ChangeCustomerEmailRequest {

	private Integer id;
	private String customerEmail;
	
	 public int getId() {
	        return id;
	    }

	    public void setId(int id) {
	        this.id = id;
	    }

	    public String getCustomerEmail() {
	        return customerEmail;
	    }

	    public void setEmail(String customerEmail) {
	        this.customerEmail = customerEmail;
	    }
}
