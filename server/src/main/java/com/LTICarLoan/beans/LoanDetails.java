package com.LTICarLoan.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name= "loan_details")
public class LoanDetails {
	
		@Id
		@GeneratedValue(strategy= GenerationType.SEQUENCE,generator="EMPSEQ")
		@SequenceGenerator(name="EMPSEQ",sequenceName="empseq",allocationSize=1)
		@Column(name="loan_type_id")
		private int loan_id;
		
		@Column(name="loan_type")
		private String loan_type;
		
		@Column(name="interest_rate")
		private double interest_rate;
		
		@Column(name="loan_amt")
		private double loan_amt;
		
		@Column(name="no_of_emi")
		private int no_of_emi;
		
		@Column(name="processing_fee")
		private double processing_fee;
		
		@ManyToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="car_id")
		VehicleDetails vehicleDetails;

		

}
