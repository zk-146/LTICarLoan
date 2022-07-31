
package com.LTICarLoan.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "ADMIN_DETAILS")
public class Admin {
	@Id
	@GeneratedValue(strategy= GenerationType.SEQUENCE,generator="ADMINSEQ")
	@SequenceGenerator(name="ADMINSEQ",sequenceName="ADMINSEQ", allocationSize=1)
	@Column(name = "admin_id")
	private int admin_id;

	@Column(name = "username", length = 10)
	private String username;

	@Column(name = "password", length = 40)
	private String password;

	public Admin(int admin_id, String username, String password) {
		super();
		this.admin_id = admin_id;
		this.username = username;
		this.password = password;
	}

	public Admin() {
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
