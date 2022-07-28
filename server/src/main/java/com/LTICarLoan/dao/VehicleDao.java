package com.LTICarLoan.dao;

import com.LTICarLoan.beans.Vehicle;

public interface VehicleDao {

	public int addVehicle(Vehicle v);

	Vehicle findVehicleByUserId(int user_id);
	
}
