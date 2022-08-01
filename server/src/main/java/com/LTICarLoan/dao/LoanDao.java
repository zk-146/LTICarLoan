package com.LTICarLoan.dao;

import java.util.List;

import com.LTICarLoan.beans.Loan;

public interface LoanDao {
	
	public int addLoan(Loan l);
	
	Loan findLoanById(int id);

	List<Loan> findLoanByCarId(int car_id) ;

	Loan findLoanByUserId(int user_id);


}
