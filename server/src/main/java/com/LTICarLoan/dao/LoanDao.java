package com.LTICarLoan.dao;

import com.LTICarLoan.beans.Loan;

public interface LoanDao {
	
	public int addLoan(Loan l);
	Loan findLoanByCarId(int car_id);


}
