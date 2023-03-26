package com.cg.onlineplantnursery.customer.service;
import static org.mockito.Mockito.*;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import java.util.List;
import java.util.Optional;

import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.function.Executable;
import com.cg.onlineplantnursery.customer.repository.*;
import org.junit.jupiter.api.Test;
import com.cg.onlineplantnursery.customer.entity.*;
import com.cg.onlineplantnursery.exceptions.*;

import org.junit.jupiter.api.Assertions;

@ExtendWith(MockitoExtension.class)
public class CustomerServiceImplTest {
	
	@Mock
	private ICustomerRepository repository;
	
	@Mock
	private IAddressRepository addressRepository;
	
	
	@Spy
	@InjectMocks
	CustomerServiceImpl service;	

	/*
	 * Scenario: when customer is successfully added
	 */
	
	@Test
	public void test_AddCustomer_1() {
		Customer customer = mock(Customer.class);
		Customer saved = mock(Customer.class);
		doNothing().when(service).validateCustomer(customer);
		when(repository.save(customer)).thenReturn(saved);
		Customer result = service.addCustomer(customer);
		Assertions.assertNotNull(result);
	    Assertions.assertEquals(saved, result);
	    verify(repository).save(customer);
	
}
	
	/*
	 * Scenario: when customer is null
	 */
	@Test
	public void test_AddCustomer_2() {
		Customer customer= mock(Customer.class);
		doThrow(CustomerNotAddedException.class).when(service).validateCustomer(customer);
		Executable executable=()-> service.addCustomer(customer);
		Assertions.assertThrows(CustomerNotAddedException.class,executable);
		verify(repository,never()).save(customer);
	}
	
	
	
	/*
	 Scenario: when customer is updated successfully*/
	@Test
	public void test_updateCustomer_1(){
		Integer id=5;
		Customer tenant=mock(Customer.class);
		when(tenant.getCustomerId()).thenReturn(id);
		when(repository.existsById(id)).thenReturn(true);
		when(repository.save(tenant)).thenReturn(tenant);
		Customer result=service.updateCustomer(tenant);
		Assertions.assertNotNull(result);
		Assertions.assertSame(tenant, result);
		verify(repository).save(tenant);
		
		}
	
	/*
	 * Scenario: when customer doesn't exist*/
	@Test
	public void test_updateCustomer_2() {
		Integer id=6;
		Customer tenant=mock (Customer.class);
		when(tenant.getCustomerId()).thenReturn(id);
		when(repository.existsById(id)).thenReturn(false);
		Executable executable=()-> service.updateCustomer(tenant);
		Assertions.assertThrows(CustomerNotFoundException.class, executable);
		verify(repository,never()).save(tenant);
	}
	
	
	
	@Test
	public void test_deleteCustomer_1() {
		Integer id = 1;
		Customer tenant = mock(Customer.class);
		when(tenant.getCustomerId()).thenReturn(id);
		when(repository.existsById(id)).thenReturn(false);
		Executable executable = ()-> service.deleteCustomer(tenant);
		
		Assertions.assertThrows(CustomerNotAddedException.class,executable);
		verify(repository,never()).delete(tenant);
	}
	
	@Test
	public void test_deleteCustomer_2() {
		Integer id =2;
		Customer tenant = mock(Customer.class);
		when(tenant.getCustomerId()).thenReturn(id);
		when(repository.existsById(id)).thenReturn(true);
		//when(repository.delete(tenant)).thenReturn(null);
		Customer result = service.deleteCustomer(tenant);
		Assertions.assertNull(result);
		
	}
	
	@Test
	public void test_viewCustomerid_1() {
		Integer id =3;
		Customer customer =mock(Customer.class);
		Optional<Customer> optional = Optional.of(customer);
		when(repository.findById(id)).thenReturn(optional);
		Customer result = service.viewCustomer(id);
		Assertions.assertNotNull(result);
		Assertions.assertEquals(customer,result);
		
	}
	
	/*
	 * Scenario: when all customers are viewed
	 * */
	@Test
	void test_ViewAllCustomers_1(){
		List<Customer>list=mock(List.class);
		when (repository.findAll()).thenReturn(list);
		when(list.isEmpty()).thenReturn(false);
		List<Customer>result = service.viewAllCustomers();
		Assertions.assertNotNull(result);
		Assertions.assertEquals(list, result);
	}

	@Test
	/*
	 * Scenario: when list is empty
	 * */
	void test_ViewAllCustomers_2(){
		List<Customer>list=mock(List.class);
		when (repository.findAll()).thenReturn(list);
		when(list.isEmpty()).thenReturn(true);
		Executable executable=()->service.viewAllCustomers();
		Assertions.assertThrows(CustomerNotFoundException.class,executable);
	}
	
	/*Scenario: when no customer is added*/
	@Test
	void test_validateCustomer_1() {
		Customer customer = null;
		Executable executable = () -> service.validateCustomer(customer);
		Assertions.assertThrows(CustomerNotAddedException.class, executable);
		
	}
	
	/*
	 * when InvalidCustomerNameException is thrown*/
	@Test
	void test_validateCustomer_2() {
		Customer customer=mock(Customer.class);
		when(customer.getCustomerName()).thenReturn("");
		Executable executable = () -> service.validateCustomer(customer);
		Assertions.assertThrows(InvalidCustomerNameException.class, executable);
		
	}
	
	/*
	 * when InvalidCustomerEmailException is thrown*/
	@Test
	void test_validateCustomer_3() {
		Customer customer=mock(Customer.class);
		when(customer.getCustomerName()).thenReturn("ggh");
		when(customer.getCustomerEmail()).thenReturn("");
		Executable executable = () -> service.validateCustomer(customer);
		Assertions.assertThrows(InvalidCustomerEmailException.class, executable);
		
	}
	
	/*
	 * when InvalidCustomerNameException is thrown*/
	@Test
	void test_validateCustomer_4() {
		Customer customer=mock(Customer.class);
		when(customer.getCustomerName()).thenReturn("ggh");
		when(customer.getCustomerEmail()).thenReturn("abeer@gmail.com");
		when(customer.getPassword()).thenReturn("");
		Executable executable = () -> service.validateCustomer(customer);
		Assertions.assertThrows(InvalidCustomerPasswordException.class, executable);
		
	}
	
	@Test
	void test_validateCustomerId() {

		Integer id = -10;
		Executable executable = () -> service.validateCustomerId(id);
		Assertions.assertThrows(InvalidCustomerIdException.class, executable);
	}

	
	

}
