package com.LTICarLoan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.service.LoanService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/loan-api")
public class LoanController {
	
	@Autowired
	LoanService loanService;
	

		@PostMapping("/addloan")
		public int addloan(@RequestBody Loan l)
		{
			int lId=loanService.addLoan(l);
			return lId;
		}
		

		@GetMapping("/findloan/{cid}")
		public Loan getLoanByCarId(@PathVariable("cid") int car_id) {
			
			Loan l= loanService.findLoanByCarId(car_id);
			return l;
		}

}
