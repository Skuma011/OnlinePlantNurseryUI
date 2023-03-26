package com.cg.onlineplantnursery.planter.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.cg.onlineplantnursery.plant.entity.Plant;
import com.cg.onlineplantnursery.seed.entity.Seed;

@Entity
public class Planter {
	@Id
	@GeneratedValue
	private Integer planterId;

	private float planterHeight;
	private int planterCapacity;
	private int drainageHoles;
	private int planterColor;
	private String planterShape;
	private int planterStock;
	private int planterCost;

	@ManyToMany
	private List<Plant> plants;
	@ManyToMany
	private List<Seed> seeds;

	public Planter() {

	}

	public Integer getPlanterId() {
		return planterId;
	}

	public List<Plant> getPlants() {
		return plants;
	}

	public void setPlants(List<Plant> plants) {
		this.plants = plants;
	}

	public List<Seed> getSeeds() {
		return seeds;
	}

	public void setSeeds(List<Seed> seeds) {
		this.seeds = seeds;
	}

	public void setPlanterHeight(float planterHeight) {
		this.planterHeight = planterHeight;
	}

	public void setPlanterId(Integer planterId) {
		this.planterId = planterId;
	}

	public float getPlanterHeight() {
		return planterHeight;
	}

	public void setPlanterheight(float planterHeight) {
		this.planterHeight = planterHeight;
	}

	public int getPlanterCapacity() {
		return planterCapacity;
	}

	public void setPlanterCapacity(int planterCapacity) {
		this.planterCapacity = planterCapacity;
	}

	public int getDrainageHoles() {
		return drainageHoles;
	}

	public void setDrainageHoles(int drainageHoles) {
		this.drainageHoles = drainageHoles;
	}

	public int getPlanterColor() {
		return planterColor;
	}

	public void setPlanterColor(int planterColor) {
		this.planterColor = planterColor;
	}

	public String getPlanterShape() {
		return planterShape;
	}

	public void setPlanterShape(String planterShape) {
		this.planterShape = planterShape;
	}

	public int getPlanterStock() {
		return planterStock;
	}

	public void setPlanterStock(int planterStock) {
		this.planterStock = planterStock;
	}

	public int getPlanterCost() {
		return planterCost;
	}

	public void setPlanterCost(int planterCost) {
		this.planterCost = planterCost;
	}

	@Override
	public String toString() {
		return "Planter Details [planterId=" + planterId + ", planterheight=" + planterHeight + ", planterCapacity="
				+ planterCapacity + ", drainageHoles=" + drainageHoles + ", planterColor=" + planterColor
				+ ", planterShape=" + planterShape + ", planterStock=" + planterStock + ", planterCost=" + planterCost
				+ "]";
	}

	@Override
	public int hashCode() {
		return planterId;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (obj == null || !(obj instanceof Planter)) {
			return false;
		}
		Planter that = (Planter) obj;
		return this.planterId == that.planterId;
	}

}
