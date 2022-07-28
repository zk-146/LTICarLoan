package com.LTICarLoan.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.LTICarLoan.beans.Application;
import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.beans.Vehicle;

@Repository
public class LoanDaoImpl implements LoanDao{

	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional
	public int addLoan(Loan l) {
		
		em.persist(l);
		return l.getLoan_id();
	
	}
	

	@Override
	public Loan findLoanById(int id) {
		
		return em.find(Loan.class, id);
		
	}

	

	@Override
	public List<Loan> findLoanByCarId(int car_id) {

		TypedQuery<Loan> qry = em.createQuery("Select l from Loan l join l.vehicle v where v.car_id=:car_id", Loan.class);
		qry.setParameter("car_id", car_id);
		List<Loan> l = qry.getResultList();
		return l;

	}



}
