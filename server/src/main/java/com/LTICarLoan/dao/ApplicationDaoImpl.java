package com.LTICarLoan.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;

import com.LTICarLoan.beans.Application;

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

	@Override
	public List<Application> getApplicationList() {
		Query qry=em.createQuery("Select a from APPLICATION_DETAILS a");
		List<Application> applicationList=qry.getResultList();
		return applicationList;
	}

	@Override
	@Transactional
	public boolean updateApplicationStatus(int id, String status) {
		Query qry= em.createQuery("update APPLICATION_DETAILS a SET a.application_status=:status where a.application_id=:id");
		qry.setParameter("status", status);
		qry.setParameter("id", id);
		qry.executeUpdate();		
		return true;
	}
}
