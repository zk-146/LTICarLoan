package com.LTICarLoan.service;

import java.util.List;

import com.LTICarLoan.beans.Application;

public interface ApplicationService {
	int addApplication(Application a);
	Application findApplicationById(int id);
	List<Application> getApplicationList();
	boolean updateApplicationStatus(int id, String status);
}
