package com.LTICarLoan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.service.VehicleService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/vehicle-api")
public class VehicleController {
	
	@Autowired
	VehicleService vehicleService;
	
	
	// http://localhost:8090/vehicle-api/addVehicle
	@PostMapping(path = "/add-vehicle",consumes="application/json")
	public boolean addVehicle(@RequestBody Vehicle v) {
		System.out.println(v);
		return vehicleService.addVehicle(v);
	}
	
	// http://localhost:8090/vehicle-api/vehicle/{uid}
	@GetMapping("/get-vehicle/{uid}")
	public Vehicle getVehicleByUserId(@PathVariable("uid") int user_id) {
		
		Vehicle v = vehicleService.findVehicleByUserId(user_id);
		return v;
	}
	
	@DeleteMapping("/delete-vehicle/{uid}")
	public boolean deleteVehicleByUserId(@PathVariable("uid") int user_id) {
		boolean v = vehicleService.deleteVehicleByUserId(user_id);
		return v;
	}

}
