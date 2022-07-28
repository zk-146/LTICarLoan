package com.LTICarLoan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.dao.LoanDao;

@Service("loanService")
public class LoanServiceImpl implements LoanService{

	
	@Autowired
	LoanDao dao;
	
	@Override
	public int addLoan(Loan l) {

		System.out.println("service layer");
		return dao.addLoan(l);

	}

}
