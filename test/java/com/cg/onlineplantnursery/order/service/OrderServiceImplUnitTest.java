package com.cg.onlineplantnursery.order.service;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertSame;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.function.Executable;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import com.cg.onlineplantnursery.exceptions.OrderUpdateException;
import com.cg.onlineplantnursery.order.entity.Order;
import com.cg.onlineplantnursery.order.repository.IOrderRepository;

@ExtendWith(MockitoExtension.class)
class OrderServiceImplUnitTest {
	
	@Mock
	IOrderRepository repository;
	

	@Spy
	@InjectMocks
	OrderServiceImpl service;
	
	/*
	 * * Scenario if the order is null Test case for addOrder
	 */
	@Test
	void testAddOrder_1() {
		Order order = mock(Order.class);
		doThrow(OrderUpdateException.class).when(service).validateOrder(order);
		Executable executable=()->service.addOrder(order);
		Assertions.assertThrows(OrderUpdateException.class, executable);
		verify(repository,never()).save(order);
	}
	
	/*
	 * * Scenario if the order is added
	 */
	@Test
	void testAddOrder_2() {
		Integer id=5;
		String transactionMode="online";
		int quantity=5;
		Order order=Mockito.mock(Order.class);
		Order saved = Mockito.mock(Order.class);
		doNothing().when(service).validateOrder(order);
		when(order.getBookingOrderId()).thenReturn(id);
		when(order.getTransactionMode()).thenReturn(transactionMode);
		when(order.getQuantity()).thenReturn(quantity);
		doNothing().when(service).validateBookingId(id);
		doNothing().when(service).validateTransactionMode(transactionMode);
		doNothing().when(service).validateQuantity(quantity);
		when(repository.save(order)).thenReturn(saved);
		Order result = service.addOrder(order);
		Assertions.assertSame(saved, result);
		verify(repository).save(order);
	}
	
	/*
	 * Scenario Order is updated successfully Test case for update oder
	 */
	
	@Test
	void testUpdateOrder_1() {
	Integer id=97;
	Order order=mock(Order.class);
	when(order.getBookingOrderId()).thenReturn(id);
	when(repository.save(order)).thenReturn(order);
	when(repository.existsById(id)).thenReturn(true);
	
	Order result=service.updateOrder(order);
	assertNotNull(result);
	assertSame(order, result);
	verify(repository).save(order);	
	}
	/*
	 * Scenario updating order which is not in the database Test case for update
		 */
	@Test
	void testUpdateOrder_2() {
	Integer id=97;
	Order order=mock(Order.class);
	when(order.getBookingOrderId()).thenReturn(id);
	when(repository.existsById(id)).thenReturn(false);
    Executable executable=()->service.updateOrder(order);
    assertThrows(OrderUpdateException.class, executable);
    verify(repository,never()).save(order);
	}
	
	/*
	 * Scenario view the Order by id test case for view Order
	 */
	@Test
	public void testViewOrder_1() {
		int id = 5;
		doNothing().when(service).validateBookingId(id);
		Order order=Mockito.mock(Order.class);
		Optional<Order> optional = Optional.of(order);
		when(repository.findById(id)).thenReturn(optional);
		Order result = service.viewOrder(id);
		assertNotNull(result);
		assertEquals(order, result);
	}
	/*
	 * Scenario delete the Order test case for delete Order
	 */
	@Test
	public void testDeleteOrder_1() {
		int id=10;
		Order order = Mockito.mock(Order.class);
		doNothing().when(service).validateOrder(order);
		when(order.getBookingOrderId()).thenReturn(id);
		when(repository.existsById(id)).thenReturn(true);
		Order result = service.deleteOrder(order);
		assertSame(order,result);
		verify(repository).delete(order);

	}
	

	/*
	 * Scenario deleting the Order when it does not exist test case for delete
	 * Order
	 */
	@Test
	public void testDeleteOrder_2() {
		int id=10;
		Order order = Mockito.mock(Order.class);
		doNothing().when(service).validateOrder(order);
		when(order.getBookingOrderId()).thenReturn(id);
		doNothing().when(service).validateBookingId(id);
		when(repository.existsById(id)).thenReturn(false);
		Executable executable = () -> service.deleteOrder(order);
		assertThrows(OrderUpdateException.class, executable);
		verify(repository, never()).delete(order);

	}
	
	
	


	

}
