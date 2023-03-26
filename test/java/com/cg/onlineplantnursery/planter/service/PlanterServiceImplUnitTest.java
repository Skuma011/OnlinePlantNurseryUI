package com.cg.onlineplantnursery.planter.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.function.Executable;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;

import com.cg.onlineplantnursery.exceptions.AddPlanterException;
import com.cg.onlineplantnursery.exceptions.InvalidDrainageHolesException;
import com.cg.onlineplantnursery.exceptions.InvalidPlanterCapacityException;
import com.cg.onlineplantnursery.exceptions.InvalidPlanterColorException;
import com.cg.onlineplantnursery.exceptions.InvalidPlanterCostException;
import com.cg.onlineplantnursery.exceptions.InvalidPlanterHeightException;
import com.cg.onlineplantnursery.exceptions.InvalidPlanterIdException;
import com.cg.onlineplantnursery.exceptions.InvalidPlanterShapeException;
import com.cg.onlineplantnursery.exceptions.InvalidPlanterStockException;
import com.cg.onlineplantnursery.exceptions.PlanterNotFoundException;
import com.cg.onlineplantnursery.planter.entity.Planter;
import com.cg.onlineplantnursery.planter.repository.IPlanterRepository;

@ExtendWith(MockitoExtension.class)
class PlanterServiceImplUnitTest {

	@Mock
	IPlanterRepository planterRepository;

	@Spy
	@InjectMocks
	PlanterServiceImpl planterService;

	/*
	 * Scenario if the planter is null Test case for addPlanter
	 */
	@Test
	void testAddPlanter_1() {

		Planter planter = mock(Planter.class);
		doThrow(AddPlanterException.class).when(planterService).validatePlanter(planter);
		Executable executable = () -> planterService.addPlanter(planter);
		assertThrows(AddPlanterException.class, executable);
		verify(planterRepository, never()).save(planter);
	}

	/*
	 * Scenario planter is added successfully Test case for add planter
	 */

	@Test
	void testAddPlanter_2() {

		Planter planter = Mockito.mock(Planter.class);
		Planter saved = Mockito.mock(Planter.class);
		doNothing().when(planterService).validatePlanter(planter);
		when(planterRepository.save(planter)).thenReturn(saved);
		Planter result = planterService.addPlanter(planter);
		assertNotNull(result);
		assertEquals(saved, result);
		verify(planterRepository).save(planter);

	}

	/*
	 * Scenario planter when planter height is null Test case for add planter
	 */

	@Test
	void testValidatePlanter_1() {
		Planter planter = Mockito.mock(Planter.class);
		doThrow(InvalidPlanterHeightException.class).when(planterService).validatePlanter(planter);
		Executable executable = () -> planterService.addPlanter(planter);
		assertThrows(InvalidPlanterHeightException.class, executable);
		verify(planterRepository, never()).save(planter);

	}

	/*
	 * Scenario planter when planter capacity is null Test case for add planter
	 */

	@Test
	void testValidatePlanter_2() {
		Planter planter = Mockito.mock(Planter.class);
		doThrow(InvalidPlanterCapacityException.class).when(planterService).validatePlanter(planter);
		Executable executable = () -> planterService.addPlanter(planter);
		assertThrows(InvalidPlanterCapacityException.class, executable);
		verify(planterRepository, never()).save(planter);

	}

	/*
	 * Scenario planter when drainage holes is null Test case for add planter
	 */

	@Test
	void testValidatePlanter_3() {
		Planter planter = Mockito.mock(Planter.class);
		doThrow(InvalidDrainageHolesException.class).when(planterService).validatePlanter(planter);
		Executable executable = () -> planterService.addPlanter(planter);
		assertThrows(InvalidDrainageHolesException.class, executable);
		verify(planterRepository, never()).save(planter);

	}

	/*
	 * Scenario planter when planter cost is null Test case for add planter
	 */

	@Test
	void testValidatePlanter_4() {

		Planter planter = Mockito.mock(Planter.class);
		doThrow(InvalidPlanterCostException.class).when(planterService).validatePlanter(planter);
		Executable executable = () -> planterService.addPlanter(planter);
		assertThrows(InvalidPlanterCostException.class, executable);
		verify(planterRepository, never()).save(planter);

	}

	/*
	 * Scenario planter when planter stock is null Test case for add planter
	 */

	@Test
	void testValidatePlanter_5() {

		Planter planter = Mockito.mock(Planter.class);
		doThrow(InvalidPlanterStockException.class).when(planterService).validatePlanter(planter);
		Executable executable = () -> planterService.addPlanter(planter);
		assertThrows(InvalidPlanterStockException.class, executable);
		verify(planterRepository, never()).save(planter);

	}

	/*
	 * Scenario planter when planter color is null Test case for add planter
	 */

	@Test
	void testValidatePlanter_6() {
		Planter planter = Mockito.mock(Planter.class);
		doThrow(InvalidPlanterColorException.class).when(planterService).validatePlanter(planter);
		Executable executable = () -> planterService.addPlanter(planter);
		assertThrows(InvalidPlanterColorException.class, executable);
		verify(planterRepository, never()).save(planter);

	}

	/*
	 * Scenario planter when planter shape is null Test case for add planter
	 */

	@Test
	void testValidatePlanter_7() {

		Planter planter = Mockito.mock(Planter.class);
		doThrow(InvalidPlanterShapeException.class).when(planterService).validatePlanter(planter);
		Executable executable = () -> planterService.addPlanter(planter);
		assertThrows(InvalidPlanterShapeException.class, executable);
		verify(planterRepository, never()).save(planter);

	}

	/*
	 * Scenario planter is updated successfully Test case for update planter
	 */
	@Test
	void testUpdatePlanter_1() {

		Planter planter = mock(Planter.class);
		doNothing().when(planterService).validatePlanterById(planter);
		when(planterRepository.save(planter)).thenReturn(planter);
		Planter result = planterService.updatePlanter(planter);
		assertNotNull(result);
		assertSame(planter, result);
		verify(planterRepository).save(planter);

	}
	/*
	 * Scenario updating planter which is not in the database Test case for update
	 * planter
	 */

	@Test
	void testUpdatePlanter_2() {

		Planter planter = mock(Planter.class);
		doThrow(PlanterNotFoundException.class).when(planterService).validatePlanterById(planter);
		Executable executable = () -> planterService.updatePlanter(planter);
		assertThrows(PlanterNotFoundException.class, executable);
		verify(planterRepository, never()).save(planter);

	}

	/*
	 * Scenario view the planter by id test case for view planter
	 */
	@Test
	void testViewPlanter_1() {
		int id = 5;
		doNothing().when(planterService).validatePlanterId(id);
		Planter planter = Mockito.mock(Planter.class);
		Optional<Planter> optional = Optional.of(planter);
		when(planterRepository.findById(5)).thenReturn(optional);
		Planter result = planterService.viewPlanter(id);
		assertNotNull(result);
		assertEquals(planter, result);
		verify(planterRepository).findById(id);
	}

	/*
	 * Scenario view the planter by id if the id is not valid test case for view
	 * planter
	 */
	@Test
	void testViewPlanter_2() {
		int id = -5;

		doThrow(InvalidPlanterIdException.class).when(planterService).validatePlanterId(id);
		Executable executable = () -> planterService.viewPlanter(id);
		assertThrows(InvalidPlanterIdException.class, executable);
		verify(planterRepository, never()).findById(id);
	}

	/*
	 * Scenario view the planter by id if the id is valid and is not in the database
	 * test case for view planter
	 */
	@Test
	void testViewPlanter_3() {
		int id = 75;
		Planter planter = Mockito.mock(Planter.class);
		doNothing().when(planterService).validatePlanterId(id);
		Optional<Planter> optional = Optional.empty();
		when(planterRepository.findById(id)).thenReturn(optional);
		Executable executable = () -> planterService.viewPlanter(id);
		assertThrows(PlanterNotFoundException.class, executable);
		verify(planterRepository).findById(id);
	}

	/*
	 * Scenario delete the planter is success test case for delete planter
	 */
	@Test
	void testDeletePlanter_1() {
		Planter planter = Mockito.mock(Planter.class);
		doNothing().when(planterService).validatePlanterById(planter);
		Planter result = planterService.deletePlanter(planter);
		assertSame(planter, result);
		verify(planterRepository).delete(planter);

	}

	/*
	 * Scenario deleting the planter when it does not exist test case for delete
	 * planter
	 */
	@Test
	void testDeletePlanter_2() {

		Planter planter = Mockito.mock(Planter.class);
		doThrow(PlanterNotFoundException.class).when(planterService).validatePlanterById(planter);

		Executable executable = () -> planterService.deletePlanter(planter);
		assertThrows(PlanterNotFoundException.class, executable);
		verify(planterRepository, never()).delete(planter);

	}

	@Test
	/*
	 * Scenario find by planterShape  when shape is valid test case for planterShape
	 */
	void testViewPlanterbyShape_1() {

		String planterShape = "Cylinderical";
		List<Planter> list = Mockito.mock(List.class);
		doNothing().when(planterService).validatePlanterShape(planterShape);
		when(planterRepository.findByPlanterShape(planterShape)).thenReturn(list);
		List<Planter> result = planterService.viewPlanter(planterShape);
		assertNotNull(result);
		assertEquals(list, result);

	}

	@Test
	/*
	 * Scenario find by planterShape when the planter shape is not valid test case for planterShape
	 */
	void testViewPlanterbyShape_2() {

		String planterShape = "Cylinderical";
		doThrow(InvalidPlanterShapeException.class).when(planterService).viewPlanter(planterShape);
		Executable executable=()->planterService.viewPlanter(planterShape);
		assertThrows(InvalidPlanterShapeException.class, executable);
		verify(planterRepository,never()).findByPlanterShape(planterShape);

	}
	
	
	@Test
	/*
	 * Scenario find All Planters test case for viewing all planter
	 */
	void testViewAllPlanters_1() {
		List<Planter> list = Mockito.mock(List.class);
		when(planterRepository.findAll()).thenReturn(list);
		List<Planter> result = planterService.viewAllPlanters();
		assertNotNull(result);
		assertEquals(list, result);

	}
	
	@Test
	/*
	 * Scenario find All Planters if no planter is there
	 *  test case for viewing all planter 
	 */
	void testViewAllPlanters_2() {
		List<Planter> list = Mockito.mock(List.class);
		when(planterRepository.findAll()).thenReturn(list);
		when(list.isEmpty()).thenReturn(true);
	Executable executable=()->planterService.viewAllPlanters();
	assertThrows(PlanterNotFoundException.class, executable);
	verify(planterRepository).findAll();
	}

	@Test
	/*
	 * Scenario find planters by Cost test case for view all planters by cost
	 */
	void testViewAllPlantersByCost_2() {
		double minCost = 100d;
		double maxCost = 500d;
		List<Planter> list = Mockito.mock(List.class);
		when(planterRepository.findAllPlantersBetweenCost((int) minCost, (int) maxCost)).thenReturn(list);
		List<Planter> result = planterService.viewAllPlanters(minCost, maxCost);
		assertNotNull(result);
		assertEquals(list, result);
	}
}
