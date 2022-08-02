package com.LTICarLoan.service;

import java.util.List;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.exception.LoanException;

public interface LoanService {

	public boolean addLoan(Loan l, int user_id);
	
	Loan findLoanById(int id) throws LoanException;

	List<Loan> findLoanByCarId(int car_id) throws LoanException;

	Loan findLoanByUserId(int user_id) throws LoanException;

}
