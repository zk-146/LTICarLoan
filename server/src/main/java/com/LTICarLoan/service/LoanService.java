package com.LTICarLoan.service;

import java.util.List;

import com.LTICarLoan.beans.Loan;

public interface LoanService {

	public int addLoan(Loan l);
	
	Loan findLoanById(int id);

	List<Loan> findLoanByCarId(int car_id);

}
