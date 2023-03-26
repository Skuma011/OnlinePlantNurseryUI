package com.cg.onlineplantnursery.plant.ui;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cg.onlineplantnursery.plant.entity.Plant;
import com.cg.onlineplantnursery.plant.service.IPlantService;

@Component
public class PlantUI {

	@Autowired
	private IPlantService service;
	
	public void start() {
		
		Plant plant1 = new Plant();
		Plant plant2 = new Plant();
		Plant plant3 = new Plant();
		
		plant1.setPlantHeight(10);
		plant1.setPlantSpread("50cm");
		plant1.setCommonName("Sunflower");
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
		plant2.setCommonName("Rose");
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
		plant3.setCommonName("Mango");
		plant3.setBloomTime("1year");
		plant3.setMedicinalOrCulinaryUse("Used as fruit");
		plant3.setDifficultyLevel("Difficult");
		plant3.setTemperature("30deg");
		plant3.setTypeOfPlant("Tree");
		plant3.setPlantDescription("Provides the mango fruit");
		plant3.setPlantsStock(20);
		plant3.setPlantCost(500.0);
		
		service.addPlant(plant1);
		service.addPlant(plant2);
		service.addPlant(plant3);
		
		System.out.println("\n********************* Saved Plants in database *********************\n");
		display(plant1);
		display(plant2);
		display(plant3);
		
		plant1.setPlantHeight(30);
		plant2.setPlantCost(80.0);
		plant3.setTemperature("35deg");
		
		service.updatePlant(plant1);
		service.updatePlant(plant2);
		service.updatePlant(plant3);
		
		Plant fetchedPlant1 = service.viewPlant(plant1.getPlantId());
		Plant fetchedPlant2 = service.viewPlant(plant2.getPlantId());
		Plant fetchedPlant3 = service.viewPlant(plant3.getPlantId());
		
		System.out.println("\n********************* Updated Plants in database *********************\n");
		display(fetchedPlant1);
		display(fetchedPlant2);
		display(fetchedPlant3);
		
		service.deletePlant(fetchedPlant2);
		
		System.out.println("\n********************* Deleted a Plant from database *********************\n");
		
		List<Plant> allPlants = service.viewAllPlants();
		
		for(Plant plant:allPlants) {
			display(plant);
		}
		
		System.out.println("\n********************* Displaying Plants of particular type *********************\n");
		
		List<Plant> allPlantsByType = service.viewAllPlants(fetchedPlant1.getTypeOfPlant());
		
		for(Plant plant:allPlantsByType) {
			display(plant);
		}
	}
	
	public void display(Plant plant) {
		
		System.out.println("plantId: "+plant.getPlantId()+"\nplantHeight: "+plant.getPlantHeight()
							+"\nplantSpread: "+plant.getPlantSpread()+"\ncommonName: "+plant.getCommonName()
							+"\nbloomTime: "+plant.getBloomTime()
							+"\nmedicinalOrCulinaryUse: "+plant.getMedicinalOrCulinaryUse()
							+"\ndifficultyLevel: "+plant.getDifficultyLevel()+"\ntemperature: "+plant.getTemperature()
							+"\ntypeOfPlant: "+plant.getTypeOfPlant()
							+"\nplantDescription: "+plant.getPlantDescription()
							+"\nplantsStock: "+plant.getPlantsStock()+"\nplantCost: "+plant.getPlantCost());
		
		System.out.println("------------------------------------------------------");
	}
}
