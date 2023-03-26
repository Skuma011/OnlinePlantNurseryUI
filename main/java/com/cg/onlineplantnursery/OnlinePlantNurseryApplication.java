package com.cg.onlineplantnursery;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.cg.onlineplantnursery.customer.ui.CustomerUI;
import com.cg.onlineplantnursery.order.ui.OrderUi;
import com.cg.onlineplantnursery.plant.ui.PlantUI;
import com.cg.onlineplantnursery.planter.ui.PlanterConsoleUi;
import com.cg.onlineplantnursery.seed.ui.SeedUI;


@SpringBootApplication
public class OnlinePlantNurseryApplication {
	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(OnlinePlantNurseryApplication.class, args);

		PlantUI app1 = context.getBean(PlantUI.class);
		app1.start();

		
		PlanterConsoleUi app2 = context.getBean(PlanterConsoleUi.class);
		app2.start();
		
		CustomerUI app3 = context.getBean(CustomerUI.class);
		app3.start();
		
		SeedUI app4 = context.getBean(SeedUI.class);
		app4.start();
	
		OrderUi app5=context.getBean(OrderUi.class);
		app5.start();

	}
}
