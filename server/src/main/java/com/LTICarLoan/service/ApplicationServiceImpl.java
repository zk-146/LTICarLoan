package com.LTICarLoan.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.Application;
import com.LTICarLoan.dao.ApplicationDao;


@Service("applicationService")
public class ApplicationServiceImpl implements ApplicationService {
	@Autowired
	ApplicationDao dao;

	@Override
	public int addApplication(Application a) {
		return dao.addApplication(a);
	}

	@Override
	public Application findApplicationById(int id) {
		return dao.findApplicationById(id);
	}

	@Override
	public List<Application> getApplicationList() {
		return dao.getApplicationList();
	}

	@Override
	public boolean updateApplicationStatus(int id, String status) {
		return dao.updateApplicationStatus(id, status);
	}
}
