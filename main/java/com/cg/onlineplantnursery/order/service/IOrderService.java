package com.cg.onlineplantnursery.order.service;

import java.util.List;

import com.cg.onlineplantnursery.order.entity.Order;

public interface IOrderService {
	Order addOrder(Order order);

	Order updateOrder(Order order);

	Order deleteOrder(Order order);

	Order viewOrder(int orderId);

	List<Order> viewAllOrders();
}
