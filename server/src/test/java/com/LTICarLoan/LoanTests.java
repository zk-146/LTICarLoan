package com.LTICarLoan;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.beans.User;
import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.dao.LoanDao;
import com.LTICarLoan.exception.LoanException;
import com.LTICarLoan.service.LoanService;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class LoanTests {
	
	@Autowired
	LoanService loanService;
	
	@MockBean
	LoanDao loanrepo;
	
	
//	@Test
//	void testGetLoans() {
//		
//		User u=new User();
//		u.setUser_id(107);
//		Vehicle v=new Vehicle(1111,"XUV500","Mahindra",20000,u);	
//		Loan l1=new Loan(1001,"Four-wheeler Loan",7.5,500,36,5,v);
//		
//		List<Loan> loanList= new ArrayList<>();
//		loanList.add(l1);
//		
//		
//		Mockito.when(loanrepo.addLoan(l1)).thenReturn(1001);		
//		Assertions.assertThat(loanService.addLoan(l1, 107)).isEqualTo(true);
//		
//	}
	
	@Test
	void testLoanById() throws LoanException
	{
		User u=new User();
		u.setUser_id(107);
		Vehicle v=new Vehicle(1111,"XUV500","Mahindra",20000,u);
		Loan l1=new Loan(1001,"Four-wheeler Loan",7.5,500,36,5,v);
		
		Mockito.when(loanrepo.findLoanById(1001)).thenReturn(l1);		
		Assertions.assertThat(loanService.findLoanById(1001)).isEqualTo(l1);
		

	}
	
	@Test
	void testLoanByUserId() throws LoanException
	{
		User u=new User();
		u.setUser_id(107);
		Vehicle v=new Vehicle(1111,"XUV500","Mahindra",20000,u);
		Loan l1=new Loan(1001,"Four-wheeler Loan",7.5,500,36,5,v);
		
		Mockito.when(loanrepo.findLoanByUserId(107)).thenReturn(l1);		
		Assertions.assertThat(loanService.findLoanByUserId(107)).isEqualTo(l1);
		

	}
	
	@Test
	void testLoanByCarId() throws LoanException
	{
		User u=new User();
		u.setUser_id(107);
		Vehicle v=new Vehicle(1111,"XUV500","Mahindra",20000,u);
		Loan l1=new Loan(1001,"Four-wheeler Loan",7.5,500,36,5,v);
		
		List<Loan> loanList= new ArrayList<>();
		loanList.add(l1);
		
		Mockito.when(loanrepo.findLoanByCarId(1111)).thenReturn(loanList);		
		Assertions.assertThat(loanService.findLoanByCarId(1111)).isEqualTo(loanList);
		

	}

}
