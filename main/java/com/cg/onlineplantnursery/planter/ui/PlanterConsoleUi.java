package com.cg.onlineplantnursery.planter.ui;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cg.onlineplantnursery.plant.entity.Plant;
import com.cg.onlineplantnursery.plant.service.IPlantService;
import com.cg.onlineplantnursery.planter.entity.Planter;
import com.cg.onlineplantnursery.planter.repository.IPlanterRepository;
import com.cg.onlineplantnursery.planter.service.IPlanterService;
import com.cg.onlineplantnursery.seed.entity.Seed;
import com.cg.onlineplantnursery.seed.service.ISeedService;

@Component
public class PlanterConsoleUi {
	
	@Autowired
	IPlantService plantService;

	@Autowired
	IPlanterService planterService;
	
	@Autowired
	ISeedService seedService;


	@Autowired
	IPlanterRepository planterRepository;

	public void start() {

		System.out.println("\n***********Planters**********\n");

		Plant plant1 = new Plant();
		Plant plant2 = new Plant();
		Plant plant3 = new Plant();

		plant1.setPlantHeight(10);
		plant1.setPlantSpread("50cm");
		plant1.setCommonName("Lily");
		plant1.setBloomTime("2months");
		plant1.setMedicinalOrCulinaryUse("Improves immunity");
		plant1.setDifficultyLevel("Easy");
		plant1.setTemperature("25deg");
		plant1.setTypeOfPlant("Herb");
		plant1.setPlantDescription("Yellow colored sun facing flowers");
		plant1.setPlantsStock(10);
		plant1.setPlantCost(50.0);

		plant2.setPlantHeight(20);
		plant2.setPlantSpread("40cm");
		plant2.setCommonName("Hibiscus");
		plant2.setBloomTime("3months");
		plant2.setMedicinalOrCulinaryUse("Improves taste");
		plant2.setDifficultyLevel("Moderate");
		plant2.setTemperature("30deg");
		plant2.setTypeOfPlant("Herb");
		plant2.setPlantDescription("Red colored flowers with sweet smell");
		plant2.setPlantsStock(10);
		plant2.setPlantCost(70.0);

		plant3.setPlantHeight(1000);
		plant3.setPlantSpread("10m");
		plant3.setCommonName("Jasmine");
		plant3.setBloomTime("1year");
		plant3.setMedicinalOrCulinaryUse("Used as fruit");
		plant3.setDifficultyLevel("Difficult");
		plant3.setTemperature("30deg");
		plant3.setTypeOfPlant("Tree");
		plant3.setPlantDescription("Provides the mango fruit");
		plant3.setPlantsStock(20);
		plant3.setPlantCost(500.0);
		
		plantService.addPlant(plant1);
		plantService.addPlant(plant2);
		plantService.addPlant(plant3);

		List<Plant> plantsList1 = new ArrayList<>();
		plantsList1.add(plant1);
		plantsList1.add(plant2);
		List<Plant> plantsList2 = new ArrayList<>();
		plantsList2.add(plant2);
		plantsList2.add(plant3);

		List<Plant> plantsList3 = new ArrayList<>();
		plantsList3.add(plant1);
		plantsList3.add(plant3);

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
		
		seedService.addSeed(seed1);
		seedService.addSeed(seed2);
		seedService.addSeed(seed3);

		List<Seed> SeedList1 = new ArrayList<>();
		SeedList1.add(seed1);
		SeedList1.add(seed2);

		List<Seed> SeedList2 = new ArrayList<>();
		SeedList2.add(seed2);
		SeedList2.add(seed3);

		List<Seed> SeedList3 = new ArrayList<>();
		SeedList3.add(seed1);
		SeedList3.add(seed3);

		Planter planter1 = new Planter();
		Planter planter2 = new Planter();
		Planter planter3 = new Planter();

		planter1.setPlanterheight(10.0f);
		planter1.setPlanterCapacity(10);
		planter1.setDrainageHoles(1);
		planter1.setPlanterColor(1);
		planter1.setPlanterShape("Cylinderical");
		planter1.setPlanterStock(10);
		planter1.setPlanterCost(150);
		planter1.setPlants(plantsList1);
		planter1.setSeeds(SeedList1);

		planter2.setPlanterheight(11.0f);
		planter2.setPlanterCapacity(15);
		planter2.setDrainageHoles(2);
		planter2.setPlanterColor(2);
		planter2.setPlanterShape("Square");
		planter2.setPlanterStock(12);
		planter2.setPlanterCost(400);
		planter2.setPlants(plantsList2);
		planter2.setSeeds(SeedList2);

		planter3.setPlanterheight(12.0f);
		planter3.setPlanterCapacity(20);
		planter3.setDrainageHoles(3);
		planter3.setPlanterColor(3);
		planter3.setPlanterShape("Rectangular");
		planter3.setPlanterStock(14);
		planter3.setPlanterCost(300);
		planter3.setPlants(plantsList3);
		planter3.setSeeds(SeedList3);

		planterService.addPlanter(planter1);
		planterService.addPlanter(planter2);
		planterService.addPlanter(planter3);

		System.out.println("\n*********Displaying all the Planters*********\n");
		List<Planter> list = planterService.viewAllPlanters();
		displayAll(list);

		System.out.println("\n**************Planter by Id********\n");
		Planter fetchedPlanter = planterService.viewPlanter(planter2.getPlanterId());
		System.out.println("Displaying Planter for the fetched id " + planter2.getPlanterId());
		display(fetchedPlanter);

		System.out.println("\n************Updating the planter**********\n");

		planter2.setPlanterShape("Cylinderical");
		planterService.updatePlanter(planter2);
		display(planter2);

		System.out.println("\n***********Deleting the planter******\n");
		System.out.println("Planter is deleted for the id " + planter3.getPlanterId());
		planterService.deletePlanter(planter3);

		System.out.println("\n**************Planter by Shape********\n");
		List<Planter> plantersList = planterService.viewPlanter("Cylinderical");
		displayAll(plantersList);

		System.out.println("\n*************Displaying by the Cost*********\n");
		List<Planter> planterList = planterService.viewAllPlanters(100.0d, 300.0d);
		displayAll(planterList);
	}

	public void display(Planter planter) {
		System.out.println(planter);

	}

	public void displayAll(Collection<Planter> planters) {
		for (Planter planter : planters)
			display(planter);
	}

}
