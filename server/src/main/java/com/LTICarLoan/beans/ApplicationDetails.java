package com.LTICarLoan.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="application_details")
public class ApplicationDetails {
	@Id
	@Column(name="application_id")
	private int application_id;

	@Column(name="application_status")
	private String application_status;
	@Column(name="emi_amt")
	private int emi_amt;
	@Column(name="loan_amt")
	private int loan_amt;	
	@Column(name="no_of_emis")
	private int no_of_emis;
	@Column(name="loan_tenure")
	private int loan_tenure;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	UserPersonalDetails userPersonalDetails;
}
