package com.LTICarLoan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LTICarLoan.beans.Application;
import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.service.LoanService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/loan-api")
public class LoanController {

	@Autowired
	LoanService loanService;

	// http://localhost:8090/loan-api/addloan

	@PostMapping("/addloan")
	public boolean addloan(@RequestBody Loan l, @RequestBody int user_id) {
		boolean userEligible = loanService.addLoan(l, user_id);
		return userEligible;
	}

	// http://localhost:8090/loan-api/getloanbyid/1001

	@GetMapping(path = "/getloanbyid/{lid}")
	public Loan findLoanById(@PathVariable("lid") int lid) {
		Loan l = loanService.findLoanById(lid);
		return l;
	}

	// http://localhost:8090/loan-api/findloanbycid/1111
	@GetMapping("/find-loan-by-cid/{cid}")
	public List<Loan> getLoanByCarId(@PathVariable("cid") int car_id) {

		List<Loan> l = loanService.findLoanByCarId(car_id);
		return l;
	}

	@GetMapping("/find-loan-by-user_id/{user_id}")
	public Loan getLoanByUserId(@PathVariable("user_id") int user_id) {
		Loan l = loanService.findLoanByUserId(user_id);
		return l;
	}

}
