package com.LTICarLoan.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
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
	@Override
	public boolean login(String email, String password) {
		String jpql = "select u from User u where u.email=:Email and u.password=:pwd";

		TypedQuery<User> query = em.createQuery(jpql, User.class);
		query.setParameter("Email", email);
		query.setParameter("pwd", password);

		User user=null;
		try {
			user = query.getResultList().get(0);
		} catch (Exception e) {
			return false;
		}
		return true;
	}
	

	
}
