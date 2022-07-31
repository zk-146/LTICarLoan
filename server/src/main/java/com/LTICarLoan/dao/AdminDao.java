package com.LTICarLoan.dao;

import com.LTICarLoan.beans.Admin;

public interface AdminDao {

	Admin adminLogin(String username, String password);
}
