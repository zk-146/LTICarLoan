package com.LTICarLoan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.service.LoanService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/loan-api")
public class LoanController {
	
	@Autowired
	LoanService loanservice;
	
	//http://localhost:8090/loan-api/addloan

		@PostMapping("/addloan")
		public int addloan(@RequestBody Loan l)
		{
			int lId=loanservice.addLoan(l);
			return lId;
		}
		

}
