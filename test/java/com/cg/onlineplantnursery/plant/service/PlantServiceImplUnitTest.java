package com.cg.onlineplantnursery.plant.service;

import static org.mockito.Mockito.*;

import java.util.List;
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

import com.cg.onlineplantnursery.exceptions.*;
import com.cg.onlineplantnursery.plant.entity.Plant;
import com.cg.onlineplantnursery.plant.repository.IPlantRepository;

@ExtendWith(MockitoExtension.class)
class PlantServiceImplUnitTest {

	@Mock
	IPlantRepository repository;

	@Spy
	@InjectMocks
	PlantServiceImpl service;

	/*
	 * To Test: addPlant 
	 * Scenario: when plant object is added successfully
	 */
	@Test
	void test_addPlant_1() {

		Plant plant = mock(Plant.class);
		Plant saved = mock(Plant.class);
		doNothing().when(service).validatePlant(plant);
		Mockito.when(repository.save(plant)).thenReturn(saved);
		Plant result = service.addPlant(plant);
		Assertions.assertNotNull(result);
		Assertions.assertSame(saved, result);
		verify(repository).save(plant);
	}

	/*
	 * To Test: addPlant 
	 * Scenario: when passed plant object is null
	 */
	@Test
	void test_addPlant_2() {

		Plant plant = mock(Plant.class);
		doThrow(AddPlantException.class).when(service).validatePlant(plant);
		Executable executable = () -> service.addPlant(plant);
		Assertions.assertThrows(AddPlantException.class, executable);
		verify(repository, never()).save(plant);
	}

	/*
	 * To Test: updatePlant 
	 * Scenario: when plant object to be updated exists in store and is updated successfully
	 */
	@Test
	void test_updatePlant_1() {

		Plant plant = mock(Plant.class);
		doNothing().when(service).validatePlantById(plant);
		Mockito.when(repository.save(plant)).thenReturn(plant);
		Plant result = service.updatePlant(plant);
		Assertions.assertNotNull(result);
		Assertions.assertSame(plant, result);
		verify(repository).save(plant);
	}

	/*
	 * To Test: updatePlant 
	 * Scenario: when plant object to be updated does not exist in store
	 */
	@Test
	void test_updatePlant_2() {

		Plant plant = mock(Plant.class);
		doThrow(PlantNotFoundException.class).when(service).validatePlantById(plant);
		Executable executable = () -> service.updatePlant(plant);
		Assertions.assertThrows(PlantNotFoundException.class, executable);
		verify(repository, never()).save(plant);
	}

	/*
	 * To Test: deletePlant 
	 * Scenario: when plant object to be deleted does not exist in store
	 */
	@Test
	void test_deletePlant_1() {

		Plant plant = mock(Plant.class);
		doThrow(PlantNotFoundException.class).when(service).validatePlantById(plant);
		Executable executable = () -> service.deletePlant(plant);
		Assertions.assertThrows(PlantNotFoundException.class, executable);
		verify(repository, never()).delete(plant);
	}

	/*
	 * To Test: deletePlant 
	 * Scenario: when plant object to be deleted exists in store and is deleted successfully
	 */
	@Test
	void test_deletePlant_2() {

		Plant plant = mock(Plant.class);
		doNothing().when(service).validatePlantById(plant);
		Plant result = service.deletePlant(plant);
		Assertions.assertSame(plant, result);
		verify(repository).delete(plant);
	}

	/*
	 * To Test: viewPlant(int plantId) 
	 * Scenario: when entered plantId is invalid
	 */
	@Test
	void test_viewById_1() {
		Integer id = -10;
		doThrow(InvalidPlantIdException.class).when(service).validatePlantId(id);
		Executable executable = () -> service.viewPlant(id);
		Assertions.assertThrows(InvalidPlantIdException.class, executable);
		verify(repository, never()).findById(id);
	}

	/*
	 * To Test: viewPlant(int plantId) 
	 * Scenario: when plant object to view by id does not exist in store
	 */
	@Test
	void test_viewById_2() {

		Integer id = 1;
		doNothing().when(service).validatePlantId(id);
		Optional<Plant> optional = Optional.empty();
		Mockito.when(repository.findById(id)).thenReturn(optional);
		Executable executable = () -> service.viewPlant(id);
		Assertions.assertThrows(PlantNotFoundException.class, executable);
		verify(repository).findById(id);
	}

	/*
	 * To Test: viewPlant(int plantId) 
	 * Scenario: when plant object to view by id exists in store and is fetched successfully
	 */
	@Test
	void test_viewById_3() {

		Integer id = 2;
		doNothing().when(service).validatePlantId(id);
		Plant fetched = mock(Plant.class);
		Optional<Plant> optional = Optional.of(fetched);
		Mockito.when(repository.findById(id)).thenReturn(optional);
		Plant result = service.viewPlant(id);
		Assertions.assertNotNull(result);
		Assertions.assertSame(fetched, result);
		verify(repository).findById(id);
	}

	/*
	 * To Test: viewPlant(String commonName) 
	 * Scenario: when commonName passed is null
	 */
	@Test
	void test_viewByCommonName_1() {

		String commonName = "";
		doThrow(InvalidPlantNameException.class).when(service).validateCommonName(commonName);
		Executable executable = () -> service.viewPlant(commonName);
		Assertions.assertThrows(InvalidPlantNameException.class, executable);
		verify(repository, never()).existsByCommonName(commonName);
		verify(repository, never()).findPlantByCommonName(commonName);
	}

	/*
	 * To Test: viewPlant(String commonName) 
	 * Scenario: when plant object to view by common name does not exist in store
	 */
	@Test
	void test_viewByCommonName_2() {

		String commonName = "abcd";
		doNothing().when(service).validateCommonName(commonName);
		Mockito.when(repository.existsByCommonName(commonName)).thenReturn(false);
		Executable executable = () -> service.viewPlant(commonName);
		Assertions.assertThrows(PlantNotFoundException.class, executable);
		verify(repository).existsByCommonName(commonName);
		verify(repository, never()).findPlantByCommonName(commonName);
	}

	/*
	 * To Test: viewPlant(String commonName) 
	 * Scenario: when plant object to view by common name exists in store and is fetched successfully
	 */
	@Test
	void test_viewByCommonName_3() {

		String commonName = "abcd";
		doNothing().when(service).validateCommonName(commonName);
		Plant fetched = mock(Plant.class);
		Mockito.when(repository.existsByCommonName(commonName)).thenReturn(true);
		Mockito.when(repository.findPlantByCommonName(commonName)).thenReturn(fetched);
		Plant result = service.viewPlant(commonName);
		Assertions.assertNotNull(result);
		Assertions.assertSame(fetched, result);
		verify(repository).existsByCommonName(commonName);
		verify(repository).findPlantByCommonName(commonName);
	}

	/*
	 * To Test: viewAllPlants() 
	 * Scenario: when all the plant objects are fetched successfully
	 */
	@Test
	void test_viewAllPlants_1() {

		List<Plant> fetchedList = mock(List.class);
		Mockito.when(repository.findAll()).thenReturn(fetchedList);
		Mockito.when(fetchedList.isEmpty()).thenReturn(false);
		List<Plant> resultList = service.viewAllPlants();
		Assertions.assertNotNull(resultList);
		Assertions.assertSame(fetchedList, resultList);
		verify(repository).findAll();
	}

	/*
	 * To Test: viewAllPlants() 
	 * Scenario: when plant objects doesnt exist in store and list is empty
	 */
	@Test
	void test_viewAllPlants_2() {

		List<Plant> fetchedList = mock(List.class);
		Mockito.when(repository.findAll()).thenReturn(fetchedList);
		Mockito.when(fetchedList.isEmpty()).thenReturn(true);
		Executable executable = () -> service.viewAllPlants();
		Assertions.assertThrows(PlantNotFoundException.class, executable);
		verify(repository).findAll();
	}

	/*
	 * To Test: viewAllPlants(String typeOfPlant) 
	 * Scenario: when typeOfPlant is null
	 */
	@Test
	void test_viewPlantsByType_1() {

		String typeOfPlant = "abcd";
		doThrow(InvalidPlantTypeException.class).when(service).validatePlantType(typeOfPlant);
		Executable executable = () -> service.viewAllPlants(typeOfPlant);
		Assertions.assertThrows(InvalidPlantTypeException.class, executable);
		verify(repository, never()).findByTypeOfPlant(typeOfPlant);
	}

	/*
	 * To Test: viewAllPlants(String typeOfPlant) 
	 * Scenario: when plant objects of specified type does not exist in store
	 */
	@Test
	void test_viewPlantsByType_2() {

		String typeOfPlant = "abcd";
		doNothing().when(service).validatePlantType(typeOfPlant);
		List<Plant> fetchedList = mock(List.class);
		Mockito.when(repository.findByTypeOfPlant(typeOfPlant)).thenReturn(fetchedList);
		Mockito.when(fetchedList.isEmpty()).thenReturn(true);
		Executable executable = () -> service.viewAllPlants(typeOfPlant);
		Assertions.assertThrows(PlantNotFoundException.class, executable);
		verify(repository).findByTypeOfPlant(typeOfPlant);
	}

	/*
	 * To Test: viewAllPlants(String typeOfPlant) 
	 * Scenario: when plant objects of specified type exists and fetched successfully
	 */
	@Test
	void test_viewAllPlantsByType_3() {

		String typeOfPlant = "abcd";
		doNothing().when(service).validatePlantType(typeOfPlant);
		List<Plant> fetchedList = mock(List.class);
		Mockito.when(repository.findByTypeOfPlant(typeOfPlant)).thenReturn(fetchedList);
		Mockito.when(fetchedList.isEmpty()).thenReturn(false);
		List<Plant> resultList = service.viewAllPlants(typeOfPlant);
		Assertions.assertNotNull(resultList);
		Assertions.assertSame(fetchedList, resultList);
		verify(repository).findByTypeOfPlant(typeOfPlant);
	}

	/*
	 * To Test: validatePlantId(Integer id) 
	 * Scenario: when InvalidPlantIdException is thrown
	 */
	@Test
	void test_validatePlantId() {

		Integer id = -10;
		Executable executable = () -> service.validatePlantId(id);
		Assertions.assertThrows(InvalidPlantIdException.class, executable);
	}

	/*
	 * To Test: validatePlantType(String typeOfPlant) 
	 * Scenario: when InvalidPlantTypeException is thrown
	 */
	@Test
	void test_validatePlantType() {

		String typeOfPlant = "";
		Executable executable = () -> service.validatePlantType(typeOfPlant);
		Assertions.assertThrows(InvalidPlantTypeException.class, executable);
	}

	/*
	 * To Test: validateCommonName(String commonName) 
	 * Scenario: when InvalidPlantNameException is thrown
	 */
	@Test
	void test_validateCommonName() {

		String commonName = "";
		Executable executable = () -> service.validateCommonName(commonName);
		Assertions.assertThrows(InvalidPlantNameException.class, executable);
	}

	/*
	 * To Test: validatePlantById(Plant plant) 
	 * Scenario: when PlantNotFoundException is thrown
	 */
	@Test
	void test_validatePlantById() {

		Integer id = 1;
		Plant plant = mock(Plant.class);
		when(plant.getPlantId()).thenReturn(id);
		when(repository.existsById(id)).thenReturn(false);
		Executable executable = () -> service.validatePlantById(plant);
		Assertions.assertThrows(PlantNotFoundException.class, executable);
		verify(repository).existsById(id);
	}

	/*
	 * To Test: validatePlant(Plant plant) 
	 * Scenario: when AddPlantException is thrown
	 */
	@Test
	void test_validatePlant_1() {

		Plant plant = null;
		Executable executable = () -> service.validatePlant(plant);
		Assertions.assertThrows(AddPlantException.class, executable);
	}

	/*
	 * To Test: validatePlant(Plant plant) 
	 * Scenario: when InvalidPlantHeightException is thrown
	 */
	@Test
	void test_validatePlant_2() {

		Plant plant = mock(Plant.class);
		when(plant.getPlantHeight()).thenReturn(0);
		Executable executable = () -> service.validatePlant(plant);
		Assertions.assertThrows(InvalidPlantHeightException.class, executable);
	}

	/*
	 * To Test: validatePlant(Plant plant) 
	 * Scenario: when InvalidPlantCostException is thrown
	 */
	@Test
	void test_validatePlant_3() {

		Plant plant = mock(Plant.class);
		when(plant.getPlantHeight()).thenReturn(10);
		when(plant.getPlantCost()).thenReturn(0D);
		Executable executable = () -> service.validatePlant(plant);
		Assertions.assertThrows(InvalidPlantCostException.class, executable);
	}

	/*
	 * To Test: validatePlant(Plant plant) 
	 * Scenario: when InvalidPlantNameException is thrown
	 */
	@Test
	void test_validatePlant_4() {

		Plant plant = mock(Plant.class);
		when(plant.getPlantHeight()).thenReturn(10);
		when(plant.getPlantCost()).thenReturn(10D);
		when(plant.getCommonName()).thenReturn("");
		Executable executable = () -> service.validatePlant(plant);
		Assertions.assertThrows(InvalidPlantNameException.class, executable);
	}

	/*
	 * To Test: validatePlant(Plant plant) 
	 * Scenario: when InvalidPlantSpreadException is thrown
	 */
	@Test
	void test_validatePlant_5() {

		Plant plant = mock(Plant.class);
		when(plant.getPlantHeight()).thenReturn(10);
		when(plant.getPlantCost()).thenReturn(10D);
		when(plant.getCommonName()).thenReturn("abc");
		when(plant.getPlantSpread()).thenReturn("");
		Executable executable = () -> service.validatePlant(plant);
		Assertions.assertThrows(InvalidPlantSpreadException.class, executable);
	}

	/*
	 * To Test: validatePlant(Plant plant) 
	 * Scenario: when InvalidPlantTypeException is thrown
	 */
	@Test
	void test_validatePlant_6() {

		Plant plant = mock(Plant.class);
		when(plant.getPlantHeight()).thenReturn(10);
		when(plant.getPlantCost()).thenReturn(10D);
		when(plant.getCommonName()).thenReturn("abc");
		when(plant.getPlantSpread()).thenReturn("50m");
		when(plant.getTypeOfPlant()).thenReturn("");
		Executable executable = () -> service.validatePlant(plant);
		Assertions.assertThrows(InvalidPlantTypeException.class, executable);
	}

}
