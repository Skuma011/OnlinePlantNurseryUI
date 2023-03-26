package com.cg.onlineplantnursery.customer.dto;

public class ChangeCustomerAddressRequest {
private int customerId;
private String houseNo;
private String colony;
private String city;
private String state;
private int pincode;
public int getCustomerId() {
	return customerId;
}
public void setCustomerId(int customerId) {
	this.customerId = customerId;
}


public String getHouseNo() {
	return houseNo;
}
public void setHouseNo(String houseNo) {
	this.houseNo = houseNo;
}
public String getColony() {
	return colony;
}
public void setColony(String colony) {
	this.colony = colony;
}
public String getCity() {
	return city;
}
public void setCity(String city) {
	this.city = city;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
public int getPincode() {
	return pincode;
}
public void setPincode(int pincode) {
	this.pincode = pincode;
}


}
