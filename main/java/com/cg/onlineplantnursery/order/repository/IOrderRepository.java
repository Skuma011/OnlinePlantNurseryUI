package com.cg.onlineplantnursery.order.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.onlineplantnursery.order.entity.Order;


public interface IOrderRepository extends JpaRepository<Order, Integer> {

	
}
