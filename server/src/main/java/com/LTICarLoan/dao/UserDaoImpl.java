package com.LTICarLoan.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;


import org.springframework.stereotype.Repository;

import com.LTICarLoan.beans.User;

@Repository
public class UserDaoImpl implements UserDao{
	@PersistenceContext
	private EntityManager em;
	@Override
	@Transactional
	public int addUser(User u) {
		em.persist(u);
		return u.getUser_id();
		
	}
	
	
}
