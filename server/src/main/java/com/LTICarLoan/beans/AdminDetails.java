
package com.LTICarLoan.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "admin_details")
public class AdminDetails {
	@Id
	@Column(name = "admin_id")
//	@Seq
	private int admin_id;

	@Column(name = "username", length = 10)
	private String username;

	@Column(name = "password", length = 40)
	private String password;

	public AdminDetails(int admin_id, String username, String password) {
		super();
		this.admin_id = admin_id;
		this.username = username;
		this.password = password;
	}

	public AdminDetails() {
		super();
	}

	public int getAdmin_id() {
		return admin_id;
	}

	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "\nAdminDetails [admin_id=" + admin_id + ", username=" + username + ", password=" + password + "]";
	}

}
