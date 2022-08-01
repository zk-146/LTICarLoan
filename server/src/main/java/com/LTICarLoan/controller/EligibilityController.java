package com.LTICarLoan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.beans.User;
import com.LTICarLoan.service.LoanService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/eligibility-api")
public class EligibilityController {
	@Autowired
	LoanService service;
	
	@PostMapping(path = "/add-loan/{user_id}", consumes = "application/json")
	public boolean addLoan(@RequestBody Loan l, @PathVariable("user_id") int user_id) {
		System.out.println(l);
		return service.addLoan(l, user_id);
	}
}
