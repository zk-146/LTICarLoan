package com.LTICarLoan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LTICarLoan.beans.Application;
import com.LTICarLoan.exception.ApplicationException;
import com.LTICarLoan.service.ApplicationService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/application-api")
public class ApplicationController {
	@Autowired
	ApplicationService service;

	@PostMapping("/add-application")
	public int addApplication(@RequestBody Application a) throws ApplicationException {
		int applicationId = service.addApplication(a);
		return applicationId;
	}

	@GetMapping("/get-application-list")
	public List<Application> findApplicationList() {
		List<Application> applicationList = service.getApplicationList();
		return applicationList;
	}

	@GetMapping(path = "/get-application-by-id/{application_id}")
	public Application findApplication(@PathVariable("application_id") int application_id) {
		Application application = service.findApplicationById(application_id);
		return application;
	}

	@GetMapping(path = "/get-application-by-user_id/{user_id}")
	public List<Application> findApplicationByUserId(@PathVariable("user_id") int user_id) throws ApplicationException {
		List<Application> applications = service.findApplicationByUserId(user_id);
		return applications;
	}

	@PutMapping("/update-application-status/{application_id}/{status}")
	public boolean updateEmp(@PathVariable("application_id") int application_id, @PathVariable("status") String status)
			throws ApplicationException {
		boolean response = service.updateApplicationStatus(application_id, status);
		return response;
	}

}
