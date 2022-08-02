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
		System.out.println("dao layer called");
		return u.getUser_id();
		
	}
	@Override
	public User login(String email, String password) {
		String jpql = "select u from User u where u.email=:Email and u.password=:pwd";

		TypedQuery<User> query = em.createQuery(jpql, User.class);
		query.setParameter("Email", email);
		query.setParameter("pwd", password);
		User user = query.getResultList().get(0);
		return user;
		
	}
	@Override
	public User getUserDetails(int id) {
		String jpql = "select u from User u where u.user_id=:id";
		TypedQuery<User> query = em.createQuery(jpql, User.class);
		
		query.setParameter("id", id);

		try {
			User user = query.getResultList().get(0);
			user.setPassword("");
			return user;
		} catch(Exception e) {
			System.out.println(e);
			throw new Error("An error occurred while fetching user details");
		}
	}
	

	
}
