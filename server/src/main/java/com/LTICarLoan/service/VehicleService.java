package com.LTICarLoan.service;

import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.exception.VehicleException;

public interface VehicleService {
	
	public boolean addVehicle(Vehicle v) throws VehicleException;

	Vehicle findVehicleByUserId(int user_id) throws VehicleException;
	
	Vehicle findVehicleById(int id);
	
	public boolean deleteVehicleById(int id) throws VehicleException;
	public boolean deleteVehicleByUserId(int user_id);
	
}
