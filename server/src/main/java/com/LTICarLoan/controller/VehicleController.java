package com.LTICarLoan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
	
	@PostMapping(path = "/addVehicle",consumes="application/json")
	public int addVehicle(@RequestBody Vehicle v) {
		return vehicleService.addVehicle(v);
	}
	
	@GetMapping("/vehicle/{uid}")
	public Vehicle getVehicleByUserId(@PathVariable("uid") int user_id) {
		
		Vehicle v = vehicleService.findVehicleByUserId(user_id);
		return v;
	}

}
