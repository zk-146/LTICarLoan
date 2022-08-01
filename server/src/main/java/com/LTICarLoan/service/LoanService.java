package com.LTICarLoan.service;

import java.util.List;

import com.LTICarLoan.beans.Loan;

public interface LoanService {

	public boolean addLoan(Loan l, int user_id);
	
	Loan findLoanById(int id);

	List<Loan> findLoanByCarId(int car_id);

}
