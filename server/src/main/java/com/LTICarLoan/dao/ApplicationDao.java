package com.LTICarLoan.dao;

import java.util.List;

import com.LTICarLoan.beans.Application;

public interface ApplicationDao {
	int addApplication(Application a);
	Application findApplicationById(int id);
	List<Application> getApplicationList();
	boolean updateApplicationStatus(int id, String status);
}
