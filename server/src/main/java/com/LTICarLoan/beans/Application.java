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
@Table(name = "APPLICATION_DETAILS")
public class Application {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "APPLICATIONSEQ")
	@SequenceGenerator(name = "APPLICATIONSEQ", sequenceName = "APPLICATIONSEQ", allocationSize = 1)
	@Column(name = "application_id")
	private int application_id;

	@Column(name = "application_status")
	private String application_status;
	@Column(name = "emi_amt")
	private int emi_amt;
	@Column(name = "loan_amt")
	private int loan_amt;
	@Column(name = "no_of_emis")
	private int no_of_emis;
	@Column(name = "loan_tenure")
	private int loan_tenure;

	@ManyToOne
	@JoinColumn(name = "user_id")
	User user;

	public Application(int application_id, String application_status, int emi_amt, int loan_amt, int no_of_emis,
			int loan_tenure, User user) {
		super();
		this.application_id = application_id;
		this.application_status = application_status;
		this.emi_amt = emi_amt;
		this.loan_amt = loan_amt;
		this.no_of_emis = no_of_emis;
		this.loan_tenure = loan_tenure;
		this.user = user;
	}

	public Application(String application_status, int emi_amt, int loan_amt, int no_of_emis, int loan_tenure,
			User user) {
		super();
		this.application_status = application_status;
		this.emi_amt = emi_amt;
		this.loan_amt = loan_amt;
		this.no_of_emis = no_of_emis;
		this.loan_tenure = loan_tenure;
		this.user = user;
	}

	public Application() {
		super();
	}

	public int getApplication_id() {
		return application_id;
	}

	public void setApplication_id(int application_id) {
		this.application_id = application_id;
	}

	public String getApplication_status() {
		return application_status;
	}

	public void setApplication_status(String application_status) {
		this.application_status = application_status;
	}

	public int getEmi_amt() {
		return emi_amt;
	}

	public void setEmi_amt(int emi_amt) {
		this.emi_amt = emi_amt;
	}

	public int getLoan_amt() {
		return loan_amt;
	}

	public void setLoan_amt(int loan_amt) {
		this.loan_amt = loan_amt;
	}

	public int getNo_of_emis() {
		return no_of_emis;
	}

	public void setNo_of_emis(int no_of_emis) {
		this.no_of_emis = no_of_emis;
	}

	public int getLoan_tenure() {
		return loan_tenure;
	}

	public void setLoan_tenure(int loan_tenure) {
		this.loan_tenure = loan_tenure;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Application [application_id=" + application_id + ", application_status=" + application_status
				+ ", emi_amt=" + emi_amt + ", loan_amt=" + loan_amt + ", no_of_emis=" + no_of_emis + ", loan_tenure="
				+ loan_tenure + ", user=" + user + "]";
	}

}
