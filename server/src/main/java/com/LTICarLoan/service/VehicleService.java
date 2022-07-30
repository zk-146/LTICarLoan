package com.LTICarLoan.service;

import com.LTICarLoan.beans.Vehicle;

public interface VehicleService {
	
	public boolean addVehicle(Vehicle v);

	Vehicle findVehicleByUserId(int user_id);
	
	Vehicle findVehicleById(int id);

}
