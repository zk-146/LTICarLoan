package com.LTICarLoan.service;

import com.LTICarLoan.beans.Loan;

public interface LoanService {

	public int addLoan(Loan l);

	Loan findLoanByCarId(int car_id);

}
