
package com.cg.onlineplantnursery.order.ui;

import java.time.LocalDate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.cg.onlineplantnursery.customer.entity.Address;
import com.cg.onlineplantnursery.customer.entity.Customer;
import com.cg.onlineplantnursery.customer.service.ICustomerService;
import com.cg.onlineplantnursery.order.entity.Order;
import com.cg.onlineplantnursery.order.service.IOrderService;
import com.cg.onlineplantnursery.plant.entity.Plant;
import com.cg.onlineplantnursery.plant.service.IPlantService;
import com.cg.onlineplantnursery.planter.entity.Planter;
import com.cg.onlineplantnursery.planter.service.IPlanterService;
import com.cg.onlineplantnursery.seed.entity.Seed;
import com.cg.onlineplantnursery.seed.service.ISeedService;

import java.util.ArrayList;
import java.util.List;


@Component
public class OrderUi {
	@Autowired
	private IOrderService orderService;
	
	@Autowired
	private IPlanterService planterService;
	@Autowired
	private IPlantService plantService;
	@Autowired
	private ISeedService seedService;
	@Autowired
	private ICustomerService customerService;
	public void start() {
		
		
		Address address1= new Address();	
		address1.setHouseNo("M8");
		address1.setColony("Korattur");
		address1.setCity("Chennai");
		address1.setState("Tamil Nadu");
		address1.setPincode(6998086);
		
		Customer customer1 = new Customer();
		customer1.setCustomerName("abeer");
		customer1.setCustomerEmail("abeer@gmail.com");
		customer1.setUsername("abeer100");
		customer1.setPassword("abeer@100");
		customer1.setAddress(address1);
		
		
		customerService.addCustomer(customer1);
		
		
		Seed seed1 = new Seed();
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
		List<Seed> SeedList1 = new ArrayList<>();
		SeedList1.add(seed1);
		
		seedService.addSeed(seed1);
		
		
		Plant plant1 = new Plant();
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
		List<Plant> plantsList1 = new ArrayList<>();
		plantsList1.add(plant1);
		
		plantService.addPlant(plant1);
		
		Planter planter1 = new Planter();
		planter1.setPlanterheight(10.0f);
		planter1.setPlanterCapacity(10);
		planter1.setDrainageHoles(1);
		planter1.setPlanterColor(1);
		planter1.setPlanterShape("Cylinderical");
		planter1.setPlanterStock(10);
		planter1.setPlanterCost(150);
		planter1.setPlants(plantsList1);
		planter1.setSeeds(SeedList1);
		List<Planter> planterList1=new ArrayList<>();
		planterList1.add(planter1);
		
		planterService.addPlanter(planter1);
		
		
		
		Order order1=new Order();
		
		
		order1.setBookingOrderId(1);
		order1.setOrderDate(LocalDate.of(2021, 03, 27));
		order1.setQuantity(10);
		order1.setTransactionMode("online");
		order1.setTotalCost(1000);
		order1.setCustomer(customer1);
		order1.setPlanters(planterList1);
		
		
		
		orderService.addOrder(order1);
		
		
		System.out.println("\n********************* Saved Order in database *********************\n");
		display(order1);
		
		
		order1.setQuantity(19);
		
		
		orderService.updateOrder(order1);
		
		
		Order fetchOrder1=orderService.viewOrder(order1.getBookingOrderId());
		
		System.out.println("\n********************* Updated Order in database *********************\n");
		display(fetchOrder1);
		
		
		
		
		List<Order> allOrders = orderService.viewAllOrders();
		
		for(Order order:allOrders) {
			display(order);
		}	
	}
	
	public void display(Order order) {
		List<Planter> planters=order.getPlanters();
		Planter planter=order.getPlanters().get(0);
		Plant plant=planter.getPlants().get(0);
		Seed seed=planter.getSeeds().get(0);
		System.out.println("orderId: "+order.getBookingOrderId()+"\n order Quantity: "+order.getQuantity()
							+"\nTotal cost: "+order.getTotalCost()+"\n Transaction mode: "+order.getTransactionMode()
							+"\norder Time: "+order.getOrderDate()+"\n PlanterId -"+planter.getPlanterId()+
							"\n plant Name- "+plant.getCommonName()+"\n Seed name -"+seed.getCommonName());
		
		System.out.println("------------------------------------------------------");
	}
}
