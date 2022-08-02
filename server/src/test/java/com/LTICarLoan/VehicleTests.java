package com.LTICarLoan;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.LTICarLoan.beans.User;
import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.dao.VehicleDao;
import com.LTICarLoan.exception.VehicleException;
import com.LTICarLoan.service.UserPersonalService;
import com.LTICarLoan.service.VehicleService;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class VehicleTests {
	
	@Autowired
	VehicleService vehicleService;
	

	UserPersonalService userService;
	
	@MockBean
	VehicleDao vehicleRepo;
	
//	@Test
//	void testAddVehicle() throws VehicleException {
//		
//		User user = new User(103,"Rushi","Redkar","rushi1@gmail.com","9781665234","password",21,"Male","Mumbai","Mumbai","Maharshtra","Indian",400020,"Salaried",100000);
//		Vehicle vehicle = new Vehicle(1008,"Nissan","Nissan",2500,user);
//		
//		List<Vehicle> vehicleList= new ArrayList<>();
//		vehicleList.add(vehicle);
//		
//		Mockito.when(vehicleRepo.addVehicle(vehicle)).thenReturn(true);
//		Assertions.assertThat(vehicleService.addVehicle(vehicle)).isEqualTo(true);
//	}
	
	@Test
	void testGetVehicleByUserId() throws VehicleException {
		
		User user = new User();
		user.setUser_id(101);
		Vehicle vehicle = new Vehicle(1008,"Nissan","Nissan",2500,user);
		
//		List<Vehicle> vehicleList= new ArrayList<>();
		
		Mockito.when(vehicleRepo.findVehicleByUserId(101)).thenReturn(vehicle);
		Assertions.assertThat(vehicleService.findVehicleByUserId(101)).isEqualTo(vehicle);
		
	}

}