package com.cg.onlineplantnursery.plant.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Plant {
	
	@GeneratedValue
	@Id
	private Integer plantId;
	private Integer plantHeight;
	private String plantSpread;
	@Column(unique=true)
	private String commonName;
	private String bloomTime;
	private String medicinalOrCulinaryUse;
	private String difficultyLevel;
	private String temperature;
	private String typeOfPlant;
	private String plantDescription;
	private Integer plantsStock;
	private double plantCost;
	
	public Plant() {}
	
	public Integer getPlantId() {
		return plantId;
	}
	public void setPlantId(Integer plantId) {
		this.plantId = plantId;
	}
	public Integer getPlantHeight() {
		return plantHeight;
	}
	public void setPlantHeight(Integer plantHeight) {
		this.plantHeight = plantHeight;
	}
	public String getPlantSpread() {
		return plantSpread;
	}
	public void setPlantSpread(String plantSpread) {
		this.plantSpread = plantSpread;
	}
	public String getCommonName() {
		return commonName;
	}
	public void setCommonName(String commonName) {
		this.commonName = commonName;
	}
	public String getBloomTime() {
		return bloomTime;
	}
	public void setBloomTime(String bloomTime) {
		this.bloomTime = bloomTime;
	}
	public String getMedicinalOrCulinaryUse() {
		return medicinalOrCulinaryUse;
	}
	public void setMedicinalOrCulinaryUse(String medicinalOrCulinaryUse) {
		this.medicinalOrCulinaryUse = medicinalOrCulinaryUse;
	}
	public String getDifficultyLevel() {
		return difficultyLevel;
	}
	public void setDifficultyLevel(String difficultyLevel) {
		this.difficultyLevel = difficultyLevel;
	}
	public String getTemperature() {
		return temperature;
	}
	public void setTemperature(String temparature) {
		this.temperature = temparature;
	}
	public String getTypeOfPlant() {
		return typeOfPlant;
	}
	public void setTypeOfPlant(String typeOfPlant) {
		this.typeOfPlant = typeOfPlant;
	}
	public String getPlantDescription() {
		return plantDescription;
	}
	public void setPlantDescription(String plantDescription) {
		this.plantDescription = plantDescription;
	}
	public Integer getPlantsStock() {
		return plantsStock;
	}
	public void setPlantsStock(Integer plantsStock) {
		this.plantsStock = plantsStock;
	}
	public double getPlantCost() {
		return plantCost;
	}
	public void setPlantCost(double plantCost) {
		this.plantCost = plantCost;
	}
	
	@Override
	public String toString() {
		return "plantId:"+plantId+"\nplantHeight:"+plantHeight+"\nplantSpread:"+plantSpread
				+"\ncommonName"+commonName+"\nbloomTime"+bloomTime+"\nmedicinalOrCulinaryUse"+medicinalOrCulinaryUse
				+"\ndifficultyLevel"+difficultyLevel+"\ntemperature"+temperature+"\ntypeOfPlant"+typeOfPlant
				+"\nplantDescription"+plantDescription+"\nplantsStock"+plantsStock+"\nplantCost"+plantCost;
	}
	
	@Override
	public int hashCode() {
		return plantId;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		 if(!(obj instanceof Plant)) {
			 return false;
		 }
		 Plant that=(Plant)obj;
		return this.plantId==that.plantId;
	}
}
