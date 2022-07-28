package com.LTICarLoan.beans;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="vehicle_details")
public class VehicleDetails {
	
	@Id
	@Column(name="car_id")
	private int car_id;
	
	@Column(name="model_name", length=15)
	private String model_name;
	
	@Column(name="company_name", length=15)
	private String compnay_name;
	
	@Column(name="price")
	private double price;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_id")
	UserPersonalDetails userPersonalDetails;

	public VehicleDetails(int car_id, String model_name, String compnay_name, double price,
			UserPersonalDetails userPersonalDetails) {
		super();
		this.car_id = car_id;
		this.model_name = model_name;
		this.compnay_name = compnay_name;
		this.price = price;
		this.userPersonalDetails = userPersonalDetails;
	}

	public VehicleDetails() {
		super();
	}

	public int getCar_id() {
		return car_id;
	}

	public void setCar_id(int car_id) {
		this.car_id = car_id;
	}

	public String getModel_name() {
		return model_name;
	}

	public void setModel_name(String model_name) {
		this.model_name = model_name;
	}

	public String getCompnay_name() {
		return compnay_name;
	}

	public void setCompnay_name(String compnay_name) {
		this.compnay_name = compnay_name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public UserPersonalDetails getUserPersonalDetails() {
		return userPersonalDetails;
	}

	public void setUserPersonalDetails(UserPersonalDetails userPersonalDetails) {
		this.userPersonalDetails = userPersonalDetails;
	}

	@Override
	public String toString() {
		return "VehicleDetails [car_id=" + car_id + ", model_name=" + model_name + ", compnay_name=" + compnay_name
				+ ", price=" + price + ", userPersonalDetails=" + userPersonalDetails + "]";
	}
	
	
}
