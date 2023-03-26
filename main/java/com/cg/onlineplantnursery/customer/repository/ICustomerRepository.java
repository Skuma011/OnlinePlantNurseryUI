package com.cg.onlineplantnursery.customer.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

import com.cg.onlineplantnursery.customer.entity.Customer;
import org.springframework.stereotype.Repository;


public interface ICustomerRepository extends JpaRepository<Customer,Integer>
{
		//boolean validateCustomer(String userName, String password);

	
}
