package com.LTICarLoan.service;

import com.LTICarLoan.beans.Admin;

public interface AdminService {
	Admin adminLogin(String username, String password);
}
