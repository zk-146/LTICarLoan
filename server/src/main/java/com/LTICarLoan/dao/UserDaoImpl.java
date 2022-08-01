package com.LTICarLoan.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;


import org.springframework.stereotype.Repository;

import com.LTICarLoan.beans.User;
import com.LTICarLoan.exception.AuthException;

@Repository
public class UserDaoImpl implements UserDao{
	@PersistenceContext
	private EntityManager em;
	@Override
	@Transactional
	public int addUser(User u) throws AuthException{
		em.persist(u);
		return u.getUser_id();
		
	}
	@Override
	public User login(String email, String password)throws AuthException{
		String jpql = "select u from User u where u.email=:Email and u.password=:pwd";

		TypedQuery<User> query = em.createQuery(jpql, User.class);
		query.setParameter("Email", email);
		query.setParameter("pwd", password);
		User user = query.getResultList().get(0);
		return user;
		
	}
	

	
}
