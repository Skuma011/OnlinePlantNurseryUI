package com.cg.onlineplantnursery.customer.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;


@Entity
public class Customer {

	@Id
	@GeneratedValue
	private Integer customerId;
	private String customerName;
	private String customerEmail;
	private String username;
	private String password;

	@OneToOne
	private Address address;

	public Customer() {

	}

	public Integer getCustomerId() {
		return customerId;

	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;

	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmail() {
		return customerEmail;

	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getUsername() {
		return username;

	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;

	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Address getAddress() {
		return address;

	}

	public void setAddress(Address address) {
		this.address = address;
	}

	@Override
	public int hashCode() {
		return customerId;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null || !(obj instanceof Customer)) {
			return false;
		}
		Customer that = (Customer) obj;
		return this.customerId == that.customerId;
	}

	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", customerName=" + customerName + ", customerEmail="
				+ customerEmail + ", username=" + username + ", password=" + password + ", address=" + address + "]";
	}

}
