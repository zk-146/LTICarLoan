package com.LTICarLoan.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user_personal_details")
public class UserPersonalDetails {
	@Id
	@Column(name="user_id")
	private int user_id;

	@Column(name="first_name", length=10)
	private String first_name;

	@Column(name="last_name", length=10)
	private String last_name;
	
	@Column(name="email", length=40)
	private String email;
	
	@Column(name="password", length=40)
	private String password;
	
	@Column(name="age", length=3)
	private int age;
	
	@Column(name="gender", length=10)
	private String gender;

	@Column(name="address", length=90)
	private String address;
	
	@Column(name="city", length=20)
	private String city;
	
	@Column(name="state", length=20)
	private String state;
	
	@Column(name="nationality", length=10)
	private String nationality;
	
	@Column(name="pincode", length=10)
	private int pincode;
	
	@Column(name="type_of_employment")
	private String type_of_employment;
	
	@Column(name="annual_salary", length=8)
	private int annual_salary;
}
