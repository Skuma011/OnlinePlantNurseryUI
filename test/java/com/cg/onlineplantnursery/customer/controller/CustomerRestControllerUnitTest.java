package com.cg.onlineplantnursery.customer.controller;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

import java.util.List;

import com.cg.onlineplantnursery.customer.dto.DeleteCustomerRequest;
import com.cg.onlineplantnursery.customer.dto.AddCustomerRequest;
import com.cg.onlineplantnursery.customer.dto.ChangeCustomerAddressRequest;
import com.cg.onlineplantnursery.customer.dto.ChangeCustomerEmailRequest;
import com.cg.onlineplantnursery.customer.dto.ChangeCustomerNameRequest;
import com.cg.onlineplantnursery.customer.dto.ChangeCustomerPasswordRequest;
import com.cg.onlineplantnursery.customer.dto.CustomerDetails;
import com.cg.onlineplantnursery.customer.entity.Address;
import com.cg.onlineplantnursery.customer.entity.Customer;
import com.cg.onlineplantnursery.customer.service.ICustomerService;
import com.cg.onlineplantnursery.customer.util.CustomerUtil;

import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class CustomerRestControllerUnitTest {

	@Mock
	ICustomerService customerService;
	
	@Mock
	CustomerUtil util;
	
	@Spy
	@InjectMocks
	CustomerRestController controller;
	
	@Test
	 void test_fetchCustomerDetails_1() {
		Integer id=7;
		Customer customer = mock(Customer.class);
		CustomerDetails customerDetails=mock(CustomerDetails.class);
		when(customerService.viewCustomer(id)).thenReturn(customer);
		when(util.toDetails(customer)).thenReturn(customerDetails);
		CustomerDetails result=controller.fetchCustomerDetails(id);
		assertSame(customerDetails,result);//CustomerDetails==result
		verify(customerService).viewCustomer(id);
		verify(util).toDetails(customer);
		
	}
	
	@Test
	void test_changeCustomerName_1() {
		Integer id=5;
		ChangeCustomerNameRequest request=mock(ChangeCustomerNameRequest.class);
		Customer customer=mock(Customer.class);
		when(request.getId()).thenReturn(id);
		when(request.getCustomerName()).thenReturn("abeer");
		when(customerService.viewCustomer(id)).thenReturn(customer);
		when(customerService.updateCustomer(customer)).thenReturn(customer);
		CustomerDetails details=mock(CustomerDetails.class);
		when(util.toDetails(customer)).thenReturn(details);
		CustomerDetails result=controller.changeCustomerName(request);
		assertNotNull(result);
		assertSame(details,result);
		verify(customerService).viewCustomer(id);
		verify(customerService).updateCustomer(customer);
		verify(util).toDetails(customer);
		
		}
	
	@Test
	void test_changeCustomerEmail_1() {
		Integer id=9;
		ChangeCustomerEmailRequest request=mock(ChangeCustomerEmailRequest.class);
		Customer customer=mock(Customer.class);
		when(request.getId()).thenReturn(id);
		when(request.getCustomerEmail()).thenReturn("abeer@gmail.com");
		when(customerService.viewCustomer(id)).thenReturn(customer);
		when(customerService.updateCustomer(customer)).thenReturn(customer);
		CustomerDetails details=mock(CustomerDetails.class);
		when(util.toDetails(customer)).thenReturn(details);
		CustomerDetails result=controller.changeCustomerEmail(request);
		assertNotNull(result);
		assertSame(details,result);
		verify(customerService).viewCustomer(id);
		verify(customerService).updateCustomer(customer);
		verify(util).toDetails(customer);
		
		
		
	
	}
	
	
	@Test
	void test_deleteCustomer_1() {
		Integer id=2;
		DeleteCustomerRequest request= mock(DeleteCustomerRequest.class);
		Customer customer=mock(Customer.class);
		when(request.getId()).thenReturn(id);
		when(customerService.viewCustomer(id)).thenReturn(customer);
		controller.deleteCustomer(request);
		verify(customerService).deleteCustomer(customer);
	}
	@Test
	public void test_AddCustomerRequest() {
		AddCustomerRequest request = mock(AddCustomerRequest.class);
		Customer saved = mock(Customer.class);
		when(customerService.addCustomer(any(Customer.class))).thenReturn(saved);
		CustomerDetails details = mock(CustomerDetails.class);
		when(util.toDetails(any(Customer.class))).thenReturn(details);
		CustomerDetails result = controller.addCustomer(request);
		Assertions.assertNotNull(result);
		Assertions.assertSame(details, result);
		verify(customerService).addCustomer(any(Customer.class));
		verify(util).toDetails(any(Customer.class));
	}

	@Test
	public void test_changeCustomerPasswordRequest() {
		Integer id = 1;
		ChangeCustomerPasswordRequest request = mock(ChangeCustomerPasswordRequest.class);
		Customer customer = mock(Customer.class);
		when(request.getCustomerId()).thenReturn(id);
		when(request.getPassword()).thenReturn("");
		when(customerService.viewCustomer(id)).thenReturn(customer);
		when(customerService.updateCustomer(customer)).thenReturn(customer);
		CustomerDetails details = mock(CustomerDetails.class);
		when(util.toDetails(customer)).thenReturn(details);
		CustomerDetails result = controller.changeCustomerPassword(request);
		Assertions.assertNotNull(result);
		Assertions.assertSame(details, result);
		verify(customerService).viewCustomer(id);
		verify(customerService).updateCustomer(customer);
		verify(util).toDetails(customer);

	}

	@Test
	public void test_changeCustomerAddressRequest() {
		Integer id = 5;
		ChangeCustomerAddressRequest request = mock(ChangeCustomerAddressRequest.class);
		Customer customer = mock(Customer.class);
		when(request.getCustomerId()).thenReturn(id);
		Address address = mock(Address.class);
		when(customer.getAddress()).thenReturn(address);

		when(customerService.viewCustomer(id)).thenReturn(customer);

		CustomerDetails details = mock(CustomerDetails.class);
		when(util.toDetails(customer)).thenReturn(details);
		CustomerDetails result = controller.changeCustomerAddress(request);
		Assertions.assertNotNull(result);
		Assertions.assertSame(details, result);
		verify(customerService).viewCustomer(id);
		verify(customerService).updateCustomer(customer);
		verify(util).toDetails(customer);

	}

	@Test
	public void test_allCustomerDetails() {

		List<Customer> customerList = mock(List.class);
		when(customerService.viewAllCustomers()).thenReturn(customerList);
		List<CustomerDetails> desiredList = mock(List.class);
		when(util.toDetailList(customerList)).thenReturn(desiredList);
		List<CustomerDetails> resultList = controller.allCustomerDetails();
		Assertions.assertNotNull(resultList);
		Assertions.assertSame(desiredList, resultList);
		verify(customerService).viewAllCustomers();
		verify(util).toDetailList(customerList);
	}
	
	
}
