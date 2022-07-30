package com.LTICarLoan.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "user_personal_details")
public class User {
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE,generator="USERSEQ")
	@SequenceGenerator(name="USERSEQ",sequenceName="USERSEQ", allocationSize=1)
	@Column(name = "user_id")
	private int user_id;

	@Column(name = "first_name", length = 10)
	private String first_name;

	@Column(name = "last_name", length = 10)
	private String last_name;

	@Column(name = "email", length = 40)
	private String email;

	@Column(name = "password", length = 40)
	private String password;

	@Column(name = "age", length = 3)
	private int age;

	@Column(name = "gender", length = 10)
	private String gender;

	@Column(name = "address", length = 90)
	private String address;

	@Column(name = "city", length = 20)
	private String city;

	@Column(name = "state", length = 20)
	private String state;

	@Column(name = "nationality", length = 10)
	private String nationality;

	@Column(name = "pincode", length = 10)
	private int pincode;

	@Column(name = "type_of_employment")
	private String type_of_employment;

	@Column(name = "annual_salary", length = 8)
	private int annual_salary;

	public User(int user_id, String first_name, String last_name, String email, String password, int age,
			String gender, String address, String city, String state, String nationality, int pincode,
			String type_of_employment, int annual_salary) {
		super();
		this.user_id = user_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email = email;
		this.password = password;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.city = city;
		this.state = state;
		this.nationality = nationality;
		this.pincode = pincode;
		this.type_of_employment = type_of_employment;
		this.annual_salary = annual_salary;
	}

	public User() {
		super();
	}

	public int getUser_id() {
		return user_id;
	}

	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getType_of_employment() {
		return type_of_employment;
	}

	public void setType_of_employment(String type_of_employment) {
		this.type_of_employment = type_of_employment;
	}

	public int getAnnual_salary() {
		return annual_salary;
	}

	public void setAnnual_salary(int annual_salary) {
		this.annual_salary = annual_salary;
	}

	@Override
	public String toString() {
		return "\nUserPersonalDetails [user_id=" + user_id + ", first_name=" + first_name + ", last_name=" + last_name
				+ ", email=" + email + ", password=" + password + ", age=" + age + ", gender=" + gender + ", address="
				+ address + ", city=" + city + ", state=" + state + ", nationality=" + nationality + ", pincode="
				+ pincode + ", type_of_employment=" + type_of_employment + ", annual_salary=" + annual_salary + "]";
	}

}
