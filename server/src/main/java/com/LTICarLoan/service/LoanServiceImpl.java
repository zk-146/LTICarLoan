package com.LTICarLoan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.dao.LoanDao;

@Service("loanService")
public class LoanServiceImpl implements LoanService{

	
	@Autowired
	LoanDao loanDao;
	
	@Override
	public int addLoan(Loan l) {

		return loanDao.addLoan(l);

	}

	@Override
	public Loan findLoanByCarId(int car_id) {

		return loanDao.findLoanByCarId(car_id);
		
	}

}
