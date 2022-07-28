package com.LTICarLoan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LTICarLoan.beans.Application;
import com.LTICarLoan.service.ApplicationService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/application-api")
public class ApplicationController {
	@Autowired
	ApplicationService service;

	@PostMapping("/add-application")
	public int addApplication(@RequestBody Application a) {
		int applicationId = service.addApplication(a);
		return applicationId;
	}

	@GetMapping("/get-application-list")
	public List<Application> findEmpList() {
		List<Application> empList = service.getApplicationList();
		return empList;
	}

}
