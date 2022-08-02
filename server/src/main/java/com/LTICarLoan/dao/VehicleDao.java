package com.LTICarLoan.dao;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.beans.Vehicle;

public interface VehicleDao {

	public boolean addVehicle(Vehicle v);

	Vehicle findVehicleByUserId(int user_id);

	Vehicle findVehicleById(int id);
	
	boolean deleteVehicleByUserId(int id);
	
}
