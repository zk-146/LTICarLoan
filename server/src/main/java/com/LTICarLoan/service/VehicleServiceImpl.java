package com.LTICarLoan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.dao.VehicleDao;


@Service("vehicleService")
public class VehicleServiceImpl implements VehicleService{

	@Autowired
	VehicleDao vehicleDao;
	
	@Override
	public boolean addVehicle(Vehicle v) {
		
		return vehicleDao.addVehicle(v);
	}
	
	@Override
	public Vehicle findVehicleByUserId(int user_id) {
		return vehicleDao.findVehicleByUserId(user_id);
	}

	@Override
	public Vehicle findVehicleById(int id) {
		
		return vehicleDao.findVehicleById(id);
	}

}
