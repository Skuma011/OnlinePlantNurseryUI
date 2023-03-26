package com.cg.onlineplantnursery.customer.util;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.cg.onlineplantnursery.customer.dto.CustomerDetails;
import com.cg.onlineplantnursery.customer.entity.Customer;


import com.cg.onlineplantnursery.customer.entity.Address;

@Component
public class CustomerUtil {
	
	public CustomerDetails toDetails(Customer customer) {
		CustomerDetails details = new CustomerDetails();
		details.setCustomerId(customer.getCustomerId());
		details.setCustomerName(customer.getCustomerName());
		details.setCustomerEmail(customer.getCustomerEmail());
		details.setUsername(customer.getUsername());
	
		
		if(customer.getAddress()!=null) {
		details.setAddressId(customer.getAddress().getAddressId());
		details.setHouseNo(customer.getAddress().getHouseNo());
		details.setColony(customer.getAddress().getColony());
		details.setCity(customer.getAddress().getCity());
		details.setState(customer.getAddress().getState());
		details.setPincode(customer.getAddress().getPincode());
		}
	
		return details;
	}

	public List<CustomerDetails> toDetailList(List<Customer> customerList){
		List<CustomerDetails> desiredList = new ArrayList<>();
		for(Customer customer:customerList) {
			desiredList.add(toDetails(customer));
			
		}
		return desiredList;
	}
}
