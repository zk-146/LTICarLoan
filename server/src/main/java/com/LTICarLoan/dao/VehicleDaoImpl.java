package com.LTICarLoan.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.beans.Vehicle;

@Repository
public class VehicleDaoImpl implements VehicleDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public boolean addVehicle(Vehicle v) {
		em.persist(v);
		if (v.getCar_id() > 100)
			return true;
		return false;
	}

	@Override
	public Vehicle findVehicleByUserId(int user_id) {
		TypedQuery<Vehicle> qry = em.createQuery("Select v from Vehicle v join v.user u where u.user_id=:user_id",
				Vehicle.class);
		qry.setParameter("user_id", user_id);
		Vehicle v = qry.getResultList().get(0);
		System.out.println(v);
		return v;
	}

	@Override
	public Vehicle findVehicleById(int id) {

		return em.find(Vehicle.class, id);

	}

}
