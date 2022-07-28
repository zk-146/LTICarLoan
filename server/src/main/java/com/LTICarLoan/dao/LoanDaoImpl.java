package com.LTICarLoan.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.LTICarLoan.beans.Loan;

@Repository
public class LoanDaoImpl implements LoanDao{

	
	@PersistenceContext
	private EntityManager em;
	
	@Override
	@Transactional
	public int addLoan(Loan l) {

		System.out.println("service layer");
		
		em.persist(l);
		return l.getLoan_id();
	}

}
