package com.cg.onlineplantnursery.seed.service;

import java.util.List;
import java.util.Optional;

import com.cg.onlineplantnursery.seed.repository.ISeedRepository;
import com.cg.onlineplantnursery.seed.service.SeedServiceImpl;
import com.cg.onlineplantnursery.seed.entity.Seed;
import com.cg.onlineplantnursery.exceptions.*;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.function.Executable;

import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.InjectMocks;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class SeedServiceImplUnitTest {

	@Mock
	ISeedRepository repository;

	@Spy
	@InjectMocks
	SeedServiceImpl service;

	/*
	 * Test : addSeed  
	 * success scenario: seed added
	 */
	@Test
	public void testAddSeed_1() {
		Seed seed = Mockito.mock(Seed.class);
		Seed saved = Mockito.mock(Seed.class);
		Mockito.doNothing().when(service).validateSeed(seed);
		Mockito.when(repository.save(seed)).thenReturn(saved);
		Seed result = service.addSeed(seed);

		Assertions.assertNotNull(result);
		Assertions.assertSame(saved, result);
		Mockito.verify(repository).save(seed);
	}

	/*
	 * Test : addSeed 
	 * Scenario: seed is null
	 */
	@Test
	public void testAddSeed_2() {

		Seed seed = Mockito.mock(Seed.class);
		Mockito.doThrow(SeedAddException.class).when(service).validateSeed(seed);

		Executable executable = () -> service.addSeed(seed);
		Assertions.assertThrows(SeedAddException.class, executable);
		Mockito.verify(repository, Mockito.never()).save(seed);

	}

	/*
	 * Test : updateSeed  
	 * success scenario: seed is updated
	 */
	@Test
	public void testUpdateSeed_1() {
		Seed seed = Mockito.mock(Seed.class);
		Mockito.doNothing().when(service).validateSeedById(seed);
		Mockito.when(repository.save(seed)).thenReturn(seed);
		Seed result = service.updateSeed(seed);

		Assertions.assertNotNull(result);
		Assertions.assertSame(seed, result);
		Mockito.verify(repository).save(seed);
	}

	/*
	 * Test : updateSeed 
	 * Scenario: seed id does not exist
	 */
	@Test
	public void testUpdateSeed_2() {
		Seed seed = Mockito.mock(Seed.class);
		Mockito.doThrow(SeedNotFoundException.class).when(service).validateSeedById(seed);

		Executable executable = () -> service.updateSeed(seed);
		Assertions.assertThrows(SeedNotFoundException.class, executable);
		Mockito.verify(repository, Mockito.never()).save(seed);
	}

	/*
	 * Test : deleteSeed 
	 * Scenario: seed exists is deleted
	 */
	@Test
	void testDeleteSeed_1() {
		Seed seed = Mockito.mock(Seed.class);
		Mockito.doNothing().when(service).validateSeedById(seed);
		Seed result = service.deleteSeed(seed);
		Assertions.assertSame(seed, result);
		Mockito.verify(repository).delete(seed);
	}

	/*
	 * Test : deleteSeed 
	 * Scenario: seed id not found to delete seed
	 */
	@Test
	void testDeleteSeed_2() {
		Seed seed = Mockito.mock(Seed.class);
		Mockito.doThrow(SeedNotFoundException.class).when(service).validateSeedById(seed);
		Executable executable = () -> service.deleteSeed(seed);
		Assertions.assertThrows(SeedNotFoundException.class, executable);
		Mockito.verify(repository, Mockito.never()).delete(seed);
	}

	/*
	 * Test: viewSeed(int seedId) 
	 * Scenario: seed exists and viewed
	 */
	@Test
	void testViewById_1() {
		Integer id = 1;
		Mockito.doNothing().when(service).validateSeedId(id);
		Seed viewseed = Mockito.mock(Seed.class);
		Optional<Seed> optional = Optional.of(viewseed);
		Mockito.when(repository.findById(id)).thenReturn(optional);
		Seed result = service.viewSeed(id);

		Assertions.assertNotNull(result);
		Assertions.assertSame(viewseed, result);
		Mockito.verify(repository).findById(id);
	}
	
	/*
	 * Test: viewSeed(int seedId) 
	 * Scenario: seed with given id does not exist 
	 */
	@Test
	void testViewById_2() {

		Integer id = 21;
		Mockito.doNothing().when(service).validateSeedId(id);
		Optional<Seed> optional = Optional.empty();
		Mockito.when(repository.findById(id)).thenReturn(optional);
		
		Executable executable = () -> service.viewSeed(id);
		Assertions.assertThrows(SeedNotFoundException.class, executable);
		Mockito.verify(repository).findById(id);
	}
	
	/*
	 * Test: viewSeed(int seedId) 
	 * Scenario: invalid id found 
	 */
	@Test
	void testViewById_3() {
		Integer id = -10;
		Mockito.doThrow(InvalidSeedIdException.class).when(service).validateSeedId(id);
		Executable executable = () -> service.viewSeed(id);
		Assertions.assertThrows(InvalidSeedIdException.class, executable);
		Mockito.verify(repository, Mockito.never()).findById(id);
	}
	
	/*
	 * Test: viewSeed(String commonName) 
	 * Scenario: seed exists and viewed 
	 */
	@Test
	void testViewByCommonName_1() {

		String commonName = "Pine apple";
		Mockito.doNothing().when(service).validateCommonName(commonName);
		Seed viewseed = Mockito.mock(Seed.class);
		Mockito.when(repository.existsByCommonName(commonName)).thenReturn(true);
		Mockito.when(repository.findSeedByCommonName(commonName)).thenReturn(viewseed);
		Seed result = service.viewSeed(commonName);
		Assertions.assertNotNull(result);
		Assertions.assertSame(viewseed, result);
		Mockito.verify(repository).existsByCommonName(commonName);
		Mockito.verify(repository).findSeedByCommonName(commonName);
	}
	
	/*
	 * Test: viewSeed(String commonName) 
	 * Scenario: common name of seed does not exist 
	 */
	@Test
	void testViewByCommonName_2() {

		String commonName = "pine apple";
		Mockito.doNothing().when(service).validateCommonName(commonName);
		Mockito.when(repository.existsByCommonName(commonName)).thenReturn(false);
		Executable executable = () -> service.viewSeed(commonName);
		Assertions.assertThrows(SeedNotFoundException.class, executable);
		Mockito.verify(repository).existsByCommonName(commonName);
		Mockito.verify(repository, Mockito.never()).findSeedByCommonName(commonName);
	}
	
	/*
	 * Test: viewSeed(String commonName) 
	 * Scenario: commonName of seed is null
	 */
	@Test
	void testViewByCommonName_3() {
		String commonName = "";
		Mockito.doThrow(InvalidSeedNameException.class).when(service).validateCommonName(commonName);
		Executable executable = () -> service.viewSeed(commonName);
		Assertions.assertThrows(InvalidSeedNameException.class, executable);
		Mockito.verify(repository, Mockito.never()).existsByCommonName(commonName);
		Mockito.verify(repository, Mockito.never()).findSeedByCommonName(commonName);
	}

	/*
	 * Test : viewAllSeed()
	 * success scenario: all seeds are viewed
	 */
	@Test
	public void testViewAllSeeds_1() {
		List<Seed> seedList = Mockito.mock(List.class);
		Mockito.when(repository.findAll()).thenReturn(seedList);
		Mockito.when(seedList.isEmpty()).thenReturn(false);
		List<Seed> result = service.viewAllSeeds();
		Assertions.assertNotNull(result);
		Assertions.assertSame(seedList, result);
		Mockito.verify(repository).findAll();
	}

	/*
	 * Test : viewAllSeed()
	 * scenario: seedList does not exist
	 */
	@Test
	public void testViewAllSeeds_2() {
		List<Seed> seedList = Mockito.mock(List.class);
		Mockito.when(repository.findAll()).thenReturn(seedList);
		Mockito.when(seedList.isEmpty()).thenReturn(true);
		Executable executable = () -> service.viewAllSeeds();
		Assertions.assertThrows(SeedNotFoundException.class, executable);
		Mockito.verify(repository).findAll();
	}

	/* 
	 * Test: viewAllSeed(String typeOfSeed) 
	 * success scenario: all seeds of typeOfSeed viewed
	 */
	@Test
	public void testViewAllSeedsByType_1() {
		String typeOfSeed = "Pineapple";
		Mockito.doNothing().when(service).validateSeedByType(typeOfSeed);
		List<Seed> seedList = Mockito.mock(List.class);
		Mockito.when(repository.findAllByTypeOfSeeds(typeOfSeed)).thenReturn(seedList);
		Mockito.when(seedList.isEmpty()).thenReturn(false);
		List<Seed> result = service.viewAllSeeds(typeOfSeed);
		Assertions.assertNotNull(result);
		Assertions.assertSame(seedList, result);
		Mockito.verify(repository).findAllByTypeOfSeeds(typeOfSeed);
	}

	/*
	 * Test: viewAllSeed(String typeOfSeed) 
	 * scenario: when seedList is empty
	 */
	@Test
	public void testViewAllBySeedsType_2() {
		String typeOfSeed = "apple";
		Mockito.doNothing().when(service).validateSeedByType(typeOfSeed);
		List<Seed> seedList = Mockito.mock(List.class);
		Mockito.when(repository.findAllByTypeOfSeeds(typeOfSeed)).thenReturn(seedList);
		Mockito.when(seedList.isEmpty()).thenReturn(true);
		Executable executable = () -> service.viewAllSeeds(typeOfSeed);
		Assertions.assertThrows(SeedNotFoundException.class, executable);
		Mockito.verify(repository).findAllByTypeOfSeeds(typeOfSeed);
	}
	
	/*
	 * Test: viewAllSeed(String typeOfSeed) 
	 * Scenario: typeOfSeed is null
	 */
	@Test
	void testViewAllSeedsByType_3() {
		String typeOfSeed = "";
		Mockito.doThrow(InvalidSeedTypeException.class).when(service).validateSeedByType(typeOfSeed);
		Executable executable = () -> service.viewAllSeeds(typeOfSeed);
		Assertions.assertThrows(InvalidSeedTypeException.class, executable);
		Mockito.verify(repository, Mockito.never()).findAllByTypeOfSeeds(typeOfSeed);
	}
	
	/*
	 * Test: validateSeed(Seed seed) 
	 * Scenario: SeedAddException is thrown
	 */
	@Test
	void testValidateSeed() {
		Seed seed = null;
		Executable executable = () -> service.validateSeed(seed);
		Assertions.assertThrows(SeedAddException.class, executable);
	}

	/*
	 * Test: validateSeedById(Seed seed) 
	 * Scenario: SeedNotFoundException is thrown
	 */
	@Test
	void testValidateSeedById() {
		Integer id = 1;
		Seed seed = Mockito.mock(Seed.class);
		Mockito.when(seed.getSeedId()).thenReturn(id);
		Mockito.when(repository.existsById(id)).thenReturn(false);
		Executable executable = () -> service.validateSeedById(seed);
		Assertions.assertThrows(SeedNotFoundException.class, executable);
		Mockito.verify(repository).existsById(id);
	}
	
	/*
	 * Test: validateSeedId(Integer id) 
	 * Scenario: InvalidSeedIdException is thrown
	 */
	@Test
	void testValidateSeedId() {
		Integer id = -1;
		Executable executable = () -> service.validateSeedId(id);
		Assertions.assertThrows(InvalidSeedIdException.class, executable);
	}
	
	/*
	 * Test: validateCommonName(String commonName)
	 * Scenario: InvalidSeedNameException is thrown
	 */
	@Test
	void testValidateCommonName() {
		String commonName = "";
		Executable executable = () -> service.validateCommonName(commonName);
		Assertions.assertThrows(InvalidSeedNameException.class, executable);
	}

	/*
	 * Test : validateSeedByType(String typeOfSeed)
	 * Scenario: InvalidSeedTypeException is thrown
	 */
	@Test
	void testValidateSeedByType() {

		String typeOfSeed = "";
		Executable executable = () -> service.validateSeedByType(typeOfSeed);
		Assertions.assertThrows(InvalidSeedTypeException.class, executable);
	}
}