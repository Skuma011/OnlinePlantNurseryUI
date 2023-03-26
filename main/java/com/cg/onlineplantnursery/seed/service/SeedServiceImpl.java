package com.cg.onlineplantnursery.seed.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cg.onlineplantnursery.seed.entity.Seed;
import com.cg.onlineplantnursery.seed.repository.ISeedRepository;
import com.cg.onlineplantnursery.exceptions.*;

@Service
public class SeedServiceImpl implements ISeedService {

	@Autowired
	private ISeedRepository repository;

	// Add seed
	@Transactional
	@Override
	public Seed addSeed(Seed seed) {
		validateSeed(seed);
		Seed saved = repository.save(seed);
		return saved;

	}

	// Update seed by id
	@Transactional
	@Override
	public Seed updateSeed(Seed seed) {
		validateSeedById(seed);
		Seed seed1 = repository.save(seed);
		return seed1;

	}
	// Delete seed by id
	@Transactional
	@Override
	public Seed deleteSeed(Seed seed) {
		validateSeedById(seed);
		repository.delete(seed);
		return seed;
	}
	// View seed
	@Override
	public Seed viewSeed(int seedId) {
		validateSeedId(seedId);
		Optional<Seed> optional = repository.findById(seedId);
		if(!optional.isPresent()) {
			throw new SeedNotFoundException("Seed does not exist");
		}
		return optional.get();		
	}
	// View seed By commonName
	@Override
	public Seed viewSeed(String commonName) {
		validateCommonName(commonName);
		boolean exists = repository.existsByCommonName(commonName);
		if(!exists) {
			throw new SeedNotFoundException("Seed does not exist");
		}
		return repository.findSeedByCommonName(commonName);
	}

	// View all seeds
	@Override
	public List<Seed> viewAllSeeds() {
		List<Seed> seedList = repository.findAll();
		if (seedList.isEmpty()) {
			throw new SeedNotFoundException("Seedlist not found");

		}
		return seedList;
	}

	// View all seeds of typeOfSeed
	@Override
	public List<Seed> viewAllSeeds(String typeOfSeed) {
		validateSeedByType(typeOfSeed);
		List<Seed> seedList = repository.findAllByTypeOfSeeds(typeOfSeed);
		if (seedList.isEmpty()) {
			throw new SeedNotFoundException("Seedlist not found");
		}
		return seedList;
	}
	
	public void validateSeed(Seed seed) {
		if (seed == null) {
			throw new SeedAddException("Null seed");
		}
	}
	
	public void validateSeedById(Seed seed) {
	Integer id = seed.getSeedId();
	boolean exists = repository.existsById(id);
	if (!exists) {
		throw new SeedNotFoundException("Seed does not exists for id=" + id);
	}
	}
	
	public void validateSeedId(Integer id) {
		if(id<0) {
			throw new InvalidSeedIdException("invalid seed id");
		}
	}
	

	public void validateCommonName(String commonName) {		
		if(commonName.equals("")) {
			throw new InvalidSeedNameException("Seed name is empty"); 
		}
	}
	
	public void validateSeedByType(String typeOfSeed) {
		if(typeOfSeed.equals("")) {
			throw new InvalidSeedTypeException("Seed type is empty ");
		}
	}
	
	
}