package com.LTICarLoan.dao;

import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.exception.VehicleException;

public interface VehicleDao {

	public boolean addVehicle(Vehicle v);

	Vehicle findVehicleByUserId(int user_id) throws VehicleException;

	Vehicle findVehicleById(int id);
	
	boolean deleteVehicleById(int id) throws VehicleException;
	
}
