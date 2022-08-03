package com.LTICarLoan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.Admin;
import com.LTICarLoan.dao.AdminDao;

@Service("adminService")
public class AdminServiceImpl implements AdminService {
	@Autowired
	AdminDao dao;

	@Override
	public Admin adminLogin(String username, String password) {
		return dao.adminLogin(username, password);
	}

}
