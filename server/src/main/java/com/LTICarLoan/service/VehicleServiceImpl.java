package com.LTICarLoan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.dao.VehicleDao;
import com.LTICarLoan.exception.VehicleException;


@Service("vehicleService")
public class VehicleServiceImpl implements VehicleService{
	@Autowired
	VehicleDao vehicleDao;
	
	@Override
	public boolean addVehicle(Vehicle v) throws VehicleException{
		try {
			return vehicleDao.addVehicle(v);
		}catch(Exception e) {
			System.out.println(e);
			throw new Error("An error occurred while inserting vehicle");
		}
	}
	
	@Override
	public Vehicle findVehicleByUserId(int user_id) throws VehicleException {
		try {
			return vehicleDao.findVehicleByUserId(user_id);
		}catch(Exception e) {
			System.out.println(e);
			throw new Error("An error occurred while fetching Vehicle by User Id");
		}
		
	}

	@Override
	public Vehicle findVehicleById(int id) {
		try {
			return vehicleDao.findVehicleById(id);
		}catch(Exception e) {
			System.out.println(e);
			throw new Error("An error occurred while fetching Vehicle by Id");
		}
	}

	@Override
	public boolean deleteVehicleById(int id) throws VehicleException {
		try {
			return vehicleDao.deleteVehicleById(id);
		}catch(Exception e) {
			System.out.println(e);
			throw new Error("An error occurred while deleting Vehicle");
		}
	}
	public boolean deleteVehicleByUserId(int id) {
		return vehicleDao.deleteVehicleByUserId(id);
	}

	
}
