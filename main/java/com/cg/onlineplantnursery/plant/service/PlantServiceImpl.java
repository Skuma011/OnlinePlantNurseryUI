package com.cg.onlineplantnursery.plant.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.onlineplantnursery.exceptions.AddPlantException;
import com.cg.onlineplantnursery.exceptions.InvalidPlantCostException;
import com.cg.onlineplantnursery.exceptions.InvalidPlantHeightException;
import com.cg.onlineplantnursery.exceptions.InvalidPlantIdException;
import com.cg.onlineplantnursery.exceptions.InvalidPlantNameException;
import com.cg.onlineplantnursery.exceptions.InvalidPlantSpreadException;
import com.cg.onlineplantnursery.exceptions.InvalidPlantTypeException;
import com.cg.onlineplantnursery.exceptions.PlantNotFoundException;
import com.cg.onlineplantnursery.plant.entity.Plant;
import com.cg.onlineplantnursery.plant.repository.IPlantRepository;

@Service
public class PlantServiceImpl implements IPlantService {

	@Autowired
	private IPlantRepository repository;
	
	// Adding a plant object to store 
	@Transactional
	@Override
	public Plant addPlant(Plant plant) {
		
		validatePlant(plant);
		return repository.save(plant);
	}
	
	// Updating a plant object present in store
	@Transactional
	@Override
	public Plant updatePlant(Plant plant) {
		
		validatePlantById(plant);
		return repository.save(plant);
	}
	
	// Deleting a plant object from store
	@Transactional
	@Override
	public Plant deletePlant(Plant plant) {
		
		validatePlantById(plant);
		repository.delete(plant);
		return plant;
	}
	
	// Fetching a plant object from store by ID
	@Override
	public Plant viewPlant(int plantId) {
		
		validatePlantId(plantId);
		Optional<Plant> optional = repository.findById(plantId);
		if(!optional.isPresent()) {
			throw new PlantNotFoundException("Plant does not exist");
		}
		return optional.get();		
	}

	// Fetching a plant object from store by Common Name
	@Override
	public Plant viewPlant(String commonName) {
		
		validateCommonName(commonName);
		boolean exists = repository.existsByCommonName(commonName);
		if(!exists) {
			throw new PlantNotFoundException("Plant does not exist!");
		}
		return repository.findPlantByCommonName(commonName);
	}

	// Fetching all plant objects from store
	@Override
	public List<Plant> viewAllPlants(){
		
		List<Plant> plantList = repository.findAll();
		if(plantList.isEmpty()) {
			throw new PlantNotFoundException("No plants found!");
		}
		return plantList;
	}

	// Fetching all plant objects based on a particular type from store
	@Override
	public List<Plant> viewAllPlants(String typeOfPlant){
		
		validatePlantType(typeOfPlant);
		List<Plant> plantList = repository.findByTypeOfPlant(typeOfPlant);
		if(plantList.isEmpty()) {
			throw new PlantNotFoundException("No plants found!");
		}
		return plantList;
	}
	
	// To validate the plant object if it is null or based on plantHeight, plantCost, commonName, plantSpread,
	// typeOfPlant
	public void validatePlant(Plant plant) {
		
		if(plant == null) {   
			throw new AddPlantException("No plant passed!");
		}
		
		if(plant.getPlantHeight() <= 0) {
			throw new InvalidPlantHeightException("Plant height must be greater than 0");
		}
		
		if(plant.getPlantCost() <= 0) {
			throw new InvalidPlantCostException("Plant cost must be greater than 0");
		}
		
		if(plant.getCommonName().equals("")) {
			throw new InvalidPlantNameException("Plant name cannot be empty");
		}
		
		if(plant.getPlantSpread().equals("")) {
			throw new InvalidPlantSpreadException("Plant spread cannot be empty");
		}
		
		if(plant.getTypeOfPlant().equals("")) {
			throw new InvalidPlantTypeException("Plant type cannot be empty");
		}
	}
	
	// to validate plantId if it is less than 0
	public void validatePlantId(Integer id) {
		
		if(id<0) {
		throw new InvalidPlantIdException("Invalid plant ID passed");
		}
	}
	
	// to validate typeOfPlant if it is passed empty
	public void validatePlantType(String typeOfPlant) {
		
		if(typeOfPlant.equals("")) {
			throw new InvalidPlantTypeException("Plant type cannot be empty");
		}
	}
	
	// to validate commonName if it is passed empty
	public void validateCommonName(String commonName) {
		
		if(commonName.equals("")) {
			throw new InvalidPlantNameException("Plant name cannot be empty"); 
		}
	}
	
	// to validate if a plant object exists in store by plantId
	public void validatePlantById(Plant plant) {
		
		Integer id = plant.getPlantId();
		boolean exists = repository.existsById(id);
		if(!exists) {
			throw new PlantNotFoundException("Plant does not exist");
		}
	}

}
