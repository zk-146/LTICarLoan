package com.LTICarLoan.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.LTICarLoan.beans.Application;
import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.exception.ApplicationException;

@Repository
public class ApplicationDaoImpl implements ApplicationDao {

	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public int addApplication(Application application) {
		em.persist(application);
		return application.getApplication_id();
	}

	@Override
	public Application findApplicationById(int id) {
		return em.find(Application.class, id);
	}
	
	
	//nested reference
	@Override
	public List<Application> findApplicationByUserId(int user_id) throws ApplicationException {
		TypedQuery<Application> qry = em.createQuery("Select a from Application a join a.user u where u.user_id=:user_id", Application.class);
		qry.setParameter("user_id", user_id);
		List<Application> a =  qry.getResultList();
		
		return a;
	}

	@Override
	public List<Application> getApplicationList() {
		Query qry = em.createQuery("Select a from Application a");
		List<Application> applicationList = qry.getResultList();
		return applicationList;
	}

	@Override
	@Transactional
	public boolean updateApplicationStatus(int id, String status) {
		Query qry = em.createQuery("update Application a SET a.application_status=:status where a.application_id=:id");
		qry.setParameter("status", status);
		qry.setParameter("id", id);
		qry.executeUpdate();
		return true;
	}
	@Override
	public List<Application> findApplicationByStatus(String application_status) throws ApplicationException {
		TypedQuery<Application> qry = em.createQuery("Select a from Application a where a.application_status=:application_status ", Application.class);
		qry.setParameter("application_status", application_status);
		List<Application> a =  qry.getResultList();
		
		return a;
	}
}
