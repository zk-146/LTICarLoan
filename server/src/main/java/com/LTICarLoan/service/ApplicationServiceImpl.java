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

			return dao.addApplication(a);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			throw new Error("An error occurred while inserting the application");
		}
	}

	@Override
	public Application findApplicationById(int id) {
		return dao.findApplicationById(id);
	}

	@Override
	public List<Application> findApplicationByUserId(int user_id) throws ApplicationException {
		return dao.findApplicationByUserId(user_id);
	}

	@Override
	public List<Application> getApplicationList() {
		return dao.getApplicationList();
	}

	@Override
	public boolean updateApplicationStatus(int id, String status) throws ApplicationException {
		Application applicationExists = dao.findApplicationById(id);
		if (applicationExists == null) {
			throw new Error("Application doesn't exist");
		}
		return dao.updateApplicationStatus(id, status);
	}

}
