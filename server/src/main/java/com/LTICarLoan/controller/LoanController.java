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
	

	//http://localhost:8090/loan-api/addloan

		@PostMapping("/addloan")
		public int addloan(@RequestBody Loan l)
		{
			int lId=loanService.addLoan(l);
			return lId;
		}
		
		//http://localhost:8090/loan-api/getloanbyid/1001
		
		@GetMapping(path = "/getloanbyid/{lid}")
		public Loan findLoanById(@PathVariable("lid") int lid) {
			Loan l = loanService.findLoanById(lid);
			return l;
		}
		
		//http://localhost:8090/loan-api/findloanbycid/1111
		@GetMapping("/findloanbycid/{cid}")
		public List<Loan> getLoanByCarId(@PathVariable("cid") int car_id) {
			
			List<Loan> l= loanService.findLoanByCarId(car_id);
			return l;
		}

}
