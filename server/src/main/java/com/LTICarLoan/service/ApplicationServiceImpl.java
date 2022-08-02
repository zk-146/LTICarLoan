package com.LTICarLoan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.Application;
import com.LTICarLoan.dao.ApplicationDao;
import com.LTICarLoan.exception.ApplicationException;

@Service("applicationService")
public class ApplicationServiceImpl implements ApplicationService {
	@Autowired
	ApplicationDao dao;

	@Override
	public int addApplication(Application a) throws ApplicationException {
		try {
			System.out.println("Reached Service layer");
			return dao.addApplication(a);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			throw new Error(
					"An error occurred while inserting the application. Ensure that all the field included are filled correctly.");
		}
	}

	@Override
	public Application findApplicationById(int id) {
		try {
			return dao.findApplicationById(id);
		} catch (Exception e) {
			System.out.println(e);
			throw new Error("An error occured while finding the application by id.");
		}
	}

	@Override
	public List<Application> findApplicationByUserId(int user_id) throws ApplicationException {
		try {
			return dao.findApplicationByUserId(user_id);
		} catch (Exception e) {
			System.out.println(e);
			throw new Error("An error occured while finding the application by user id.");
		}
	}

	@Override
	public List<Application> getApplicationList() {
		try {
			return dao.getApplicationList();
		} catch (Exception e) {
			System.out.println(e);
			throw new Error("An error occured while fetching all the applications.");
		}
	}

	@Override
	public boolean updateApplicationStatus(int id, String status) throws ApplicationException {
		try {
			Application applicationExists = dao.findApplicationById(id);
			System.out.println(id);
			if (applicationExists == null) {
				throw new Error("Application doesn't exist");
			}
			return dao.updateApplicationStatus(id, status);
		} catch (Exception e) {
			System.out.println(e);
			throw new Error("An error occured while updating the application.");
		}
	}

	@Override
	public List<Application> findApplicationByStatus(String application_status) throws ApplicationException {
		try {
			return dao.findApplicationByStatus(application_status);
		} catch (Exception e) {
			System.out.println(e);
			throw new Error("An error occured while finding the application by status.");
		}
	}
}
