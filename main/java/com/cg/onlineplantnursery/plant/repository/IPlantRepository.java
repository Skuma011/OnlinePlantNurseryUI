package com.cg.onlineplantnursery.plant.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.onlineplantnursery.plant.entity.Plant;

public interface IPlantRepository extends JpaRepository<Plant, Integer> {
	
	Plant findPlantByCommonName(String commonName);
	boolean existsByCommonName(String commonName);
	List<Plant> findByTypeOfPlant(String typeOfPlant);
}
