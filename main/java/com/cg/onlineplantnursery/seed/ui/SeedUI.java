package com.cg.onlineplantnursery.seed.ui;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cg.onlineplantnursery.seed.entity.Seed;
import com.cg.onlineplantnursery.seed.service.ISeedService;

@Component
public class SeedUI {

	@Autowired
	private ISeedService service;

	public void start() {

		Seed seed1 = new Seed();
		Seed seed2 = new Seed();
		Seed seed3 = new Seed();

		seed1.setCommonName("Rose seed");
		seed1.setBloomTime("3days");
		seed1.setWatering("Sprinkle");
		seed1.setDifficultyLevel("Easy");
		seed1.setTemparature("25deg");
		seed1.setTypeOfSeeds("Round");
		seed1.setSeedsDescription("Red rose seeds");
		seed1.setSeedsStock(20);
		seed1.setSeedsCost(100.0);
		seed1.setSeedsPerPacket(20);

		seed2.setCommonName("Potato seed");
		seed2.setBloomTime("4days");
		seed2.setWatering("Sprinkle");
		seed2.setDifficultyLevel("Easy");
		seed2.setTemparature("25deg");
		seed2.setTypeOfSeeds("Round");
		seed2.setSeedsDescription("Potato seeds");
		seed2.setSeedsStock(30);
		seed2.setSeedsCost(50.0);
		seed2.setSeedsPerPacket(10);

		seed3.setCommonName("Carrot seed");
		seed3.setBloomTime("5days");
		seed3.setWatering("Sprinkle");
		seed3.setDifficultyLevel("Medium");
		seed3.setTemparature("15deg");
		seed3.setTypeOfSeeds("Round");
		seed3.setSeedsDescription("Carrot seeds");
		seed3.setSeedsStock(10);
		seed3.setSeedsCost(60.0);
		seed3.setSeedsPerPacket(30);

		service.addSeed(seed1);
		service.addSeed(seed2);
		service.addSeed(seed3);

		System.out.println("\n********************* Saved Seeds *********************\n");
		display(seed1);
		display(seed2);
		display(seed3);

		seed1.setBloomTime("10days");
		seed2.setSeedsCost(80.0);
		seed3.setTemparature("35deg");

		service.updateSeed(seed1);
		service.updateSeed(seed2);
		service.updateSeed(seed3);

		Seed fetchedSeed1 = service.viewSeed(seed1.getSeedId());
		Seed fetchedSeed2 = service.viewSeed(seed2.getSeedId());
		Seed fetchedSeed3 = service.viewSeed(seed3.getSeedId());

		System.out.println("\n********************* Updated Seeds *********************\n");
		display(fetchedSeed1);
		display(fetchedSeed2);
		display(fetchedSeed3);

		service.deleteSeed(fetchedSeed2);

		System.out.println("\n********************* Deleted a Seed  *********************\n");

		List<Seed> allSeeds = service.viewAllSeeds();

		for (Seed seed : allSeeds) {
			display(seed);
		}

		System.out.println("\n********************* Displaying Seeds of particular type *********************\n");

		List<Seed> allSeedsByType = service.viewAllSeeds(fetchedSeed1.getTypeOfSeeds());

		for (Seed seed : allSeedsByType) {
			display(seed);
		}
	}

	public void display(Seed seed) {

		System.out.println("seedId: " + seed.getSeedId() + "\ncommonName: " + seed.getCommonName() + "\nbloomTime: "
				+ seed.getBloomTime() + "\nwatering: " + seed.getWatering() + "\ndifficultyLevel: "
				+ seed.getDifficultyLevel() + "\ntemperature: " + seed.getTemparature() + "\ntypeOfSeeds: "
				+ seed.getTypeOfSeeds() + "\nseedsDescription: " + seed.getSeedsDescription() + "\nseedsStock: "
				+ seed.getSeedsStock() + "\nseedsCost: " + seed.getSeedsCost());

		System.out.println(
				"\n*******************************************************************************************************\n");
	}
}