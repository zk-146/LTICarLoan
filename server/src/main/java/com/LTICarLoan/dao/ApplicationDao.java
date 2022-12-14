package com.LTICarLoan.dao;

import java.util.List;

import com.LTICarLoan.beans.Application;
import com.LTICarLoan.exception.ApplicationException;

public interface ApplicationDao {
	int addApplication(Application a);

	Application findApplicationById(int id);

	List<Application> findApplicationByUserId(int user_id) throws ApplicationException;

	List<Application> getApplicationList();

	boolean updateApplicationStatus(int id, String status) throws ApplicationException;

	List<Application> findApplicationByStatus(String application_status) throws ApplicationException;

}
