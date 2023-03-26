package com.cg.onlineplantnursery.planter.service;

import java.util.List;

import com.cg.onlineplantnursery.planter.entity.Planter;

public interface IPlanterService {
	Planter addPlanter(Planter planter);// adding the planter

	Planter updatePlanter(Planter planter);// updating the planter

	Planter deletePlanter(Planter planter);// deleting the planter

	Planter viewPlanter(int planterId);// finding or viewing the planter by id

	List<Planter> viewPlanter(String planterShape);// finding or viewing the planter by shape

	List<Planter> viewAllPlanters();// viewing all the planters

	List<Planter> viewAllPlanters(double minCost, double maxCost);// viewing the planters by cost range
}
