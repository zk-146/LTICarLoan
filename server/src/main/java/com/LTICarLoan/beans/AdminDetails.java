

package com.LTICarLoan.beans;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admin_details")
public class AdminDetails {
	@Id
	@Column(name="admin_id")
//	@Seq
	private int admin_id;
	
	@Column(name="username", length=10)
	private String username;
	
	@Column(name="password", length=40)
	private String password;
}

