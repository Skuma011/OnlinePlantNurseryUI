package com.cg.onlineplantnursery.planter.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.cg.onlineplantnursery.planter.entity.Planter;

@Repository
public interface IPlanterRepository extends JpaRepository<Planter, Integer> {

	List<Planter> findByPlanterShape(String planterShape);

	List<Planter> findAll();

	@Query("from Planter where planterCost>=:minCost and planterCost<=:maxCost")
	List<Planter> findAllPlantersBetweenCost(@Param("minCost") int minCost, @Param("maxCost") int maxCost);

}
