package com.cg.onlineplantnursery.customer.ui;
import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cg.onlineplantnursery.customer.entity.*;
import com.cg.onlineplantnursery.customer.repository.ICustomerRepository;
import com.cg.onlineplantnursery.customer.service.ICustomerService;

@Component
public class CustomerUI {
	
	
	@Autowired
	ICustomerService customerService;
	
	@Autowired
	ICustomerRepository customerRepository;
	
	public void start(){
		
		Address address1= new Address();
		Address address2= new Address();
		Address address3= new Address();
		
		address1.setHouseNo("M8");
		address1.setColony("Korattur");
		address1.setCity("Chennai");
		address1.setState("Tamil Nadu");
		address1.setPincode(6998086);
		
		address2.setHouseNo("Y178");
		address2.setColony("Anna nagar");
		address2.setCity("Chennai");
		address2.setState("Tamil Nadu");
		address2.setPincode(69980342);
		
		address3.setHouseNo("BA3");
		address3.setColony("Vadapalani");
		address3.setCity("Chennai");
		address3.setState("Tamil Nadu");
		address3.setPincode(69982412); 
		
		
		
		System.out.println("adding Customer");
		
		Customer customer1 = new Customer();
		Customer customer2 = new Customer();
		Customer customer3 = new Customer();
		
		
		customer1.setCustomerName("abeer");
		customer1.setCustomerEmail("abeer@gmail.com");
		customer1.setUsername("abeer100");
		customer1.setPassword("abeer@100");
		customer1.setAddress(address1);
		
		
	
		customer2.setCustomerName("abc");
		customer2.setCustomerEmail("abc102@gmail.com");
		customer2.setUsername("abc102");
		customer2.setPassword("abc@102");
		customer2.setAddress(address2);
		
	
		customer3.setCustomerName("saurabh");
		customer3.setCustomerEmail("saurabh@gmail.com");
		customer3.setUsername("saurabh.103");
		customer3.setPassword("saurabh@103");
		customer3.setAddress(address3);
		
		customerService.addCustomer(customer1);
		customerService.addCustomer(customer2);
		customerService.addCustomer(customer3);
		
		System.out.println("\n********************* Saved Customers in database *********************\n");
		display(customer1);
		display(customer2);
		display(customer3);
		
		customer1.setCustomerName("wolf");
		customer2.setPassword("haha");
		
		customerService.updateCustomer(customer1);
		customerService.updateCustomer(customer2);
		
		Customer fetchedCustomer1= customerService.viewCustomer(customer1.getCustomerId());
		Customer fetchedCustomer2= customerService.viewCustomer(customer2.getCustomerId());
		
		System.out.println("\n********************* Updated Customers in database *********************\n");
		
		customerService.deleteCustomer(fetchedCustomer1);
		
		System.out.println("\n********************* deleted a customer *********************\n");
		
		List<Customer> listOfCustomers = customerService.viewAllCustomers();
		
		for(Customer customer:listOfCustomers) {
			display(customer);
		}
	}
public void display(Customer customer) {
	System.out.println("CustomerId: "+customer.getCustomerId()+"\ncustomer name: "+customer.getCustomerName()
	+"\nCustomer Email: "+customer.getCustomerEmail()+"\nCustomer Username: "+customer.getUsername()
	+"\nCustomer Password: "+customer.getPassword()+ "\nCustomer AddressId: "+ customer.getAddress().getAddressId()+"\nCustomer house no: "+ customer.getAddress().getHouseNo()
	+"\nCustomer Colony: "+ customer.getAddress().getColony()+
	"\nCustomer City: "+customer.getAddress().getCity()+
	"\nCustomer State: "+ customer.getAddress().getState()+
	"\nCustomer Pincode: "+ customer.getAddress().getPincode());
}
}


















