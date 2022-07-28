package com.LTICarLoan.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.LTICarLoan.beans.Vehicle;

@Repository
public class VehicleDaoImpl implements VehicleDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public int addVehicle(Vehicle v) {
		em.persist(v);
		return v.getCar_id();
	}

	@Override
	public Vehicle findVehicleByUserId(int user_id) {
		TypedQuery<Vehicle> qry = em.createQuery("Select v from Vehicle v where v.user='user_id'", Vehicle.class);
		Vehicle v = (Vehicle) qry.getResultList();
		return v;
	}

}
