package com.LTICarLoan.dao;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.LTICarLoan.beans.Admin;

@Repository
public class AdminDaoImpl implements AdminDao {
	@PersistenceContext
	private EntityManager em;

	@Override
	public Admin adminLogin(String username, String password) {
		String jpql = "select a from Admin a where a.username=:username and a.password=:pwd";
		TypedQuery<Admin> query = em.createQuery(jpql, Admin.class);
		query.setParameter("username", username);
		query.setParameter("pwd", password);
		Admin admin = query.getResultList().get(0);
		return admin;
	}

}
