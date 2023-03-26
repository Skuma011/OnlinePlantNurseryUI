package com.cg.onlineplantnursery.customer.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.onlineplantnursery.customer.entity.Address;

public interface IAddressRepository extends JpaRepository<Address, Integer> {

}
