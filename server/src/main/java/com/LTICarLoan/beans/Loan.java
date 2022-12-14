package com.LTICarLoan.beans;

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
@Table(name = "loan_details")
public class Loan {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "LOANSEQ")
	@SequenceGenerator(name = "LOANSEQ", sequenceName = "LOANSEQ", allocationSize = 1)
	@Column(name = "loan_id")
	private int loan_id;

	@Column(name = "loan_type")
	private String loan_type;

	@Column(name = "interest_rate")
	private double interest_rate;

	@Column(name = "loan_amt")
	private double loan_amt;

	@Column(name = "no_of_emi")
	private int no_of_emi;

	@Column(name = "processing_fee")
	private double processing_fee;

	@ManyToOne
	@JoinColumn(name = "car_id")
	Vehicle vehicle;

	public Loan(int loan_id, String loan_type, double interest_rate, double loan_amt, int no_of_emi,
			double processing_fee, Vehicle vehicle) {
		super();
		this.loan_id = loan_id;
		this.loan_type = loan_type;
		this.interest_rate = interest_rate;
		this.loan_amt = loan_amt;
		this.no_of_emi = no_of_emi;
		this.processing_fee = processing_fee;
		this.vehicle = vehicle;
	}

	public Loan() {
		super();
	}

	public Loan(String loan_type, double interest_rate, double loan_amt, int no_of_emi, double processing_fee,
			Vehicle vehicle) {
		super();
		this.loan_type = loan_type;
		this.interest_rate = interest_rate;
		this.loan_amt = loan_amt;
		this.no_of_emi = no_of_emi;
		this.processing_fee = processing_fee;
		this.vehicle = vehicle;
	}

	public int getLoan_id() {
		return loan_id;
	}

	public void setLoan_id(int loan_id) {
		this.loan_id = loan_id;
	}

	public String getLoan_type() {
		return loan_type;
	}

	public void setLoan_type(String loan_type) {
		this.loan_type = loan_type;
	}

	public double getInterest_rate() {
		return interest_rate;
	}

	public void setInterest_rate(double interest_rate) {
		this.interest_rate = interest_rate;
	}

	public double getLoan_amt() {
		return loan_amt;
	}

	public void setLoan_amt(double loan_amt) {
		this.loan_amt = loan_amt;
	}

	public int getNo_of_emi() {
		return no_of_emi;
	}

	public void setNo_of_emi(int no_of_emi) {
		this.no_of_emi = no_of_emi;
	}

	public double getProcessing_fee() {
		return processing_fee;
	}

	public void setProcessing_fee(double processing_fee) {
		this.processing_fee = processing_fee;
	}

	public Vehicle getVehicle() {
		return vehicle;
	}

	public void setVehicle(Vehicle vehicle) {
		this.vehicle = vehicle;
	}

	@Override
	public String toString() {
		return "\nLoan [loan_id=" + loan_id + ", loan_type=" + loan_type + ", interest_rate=" + interest_rate
				+ ", loan_amt=" + loan_amt + ", no_of_emi=" + no_of_emi + ", processing_fee=" + processing_fee
				+ ", vehicle=" + vehicle + "]";
	}

}
