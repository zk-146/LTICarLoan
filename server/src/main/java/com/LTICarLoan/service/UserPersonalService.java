package com.LTICarLoan.service;

import java.util.List;

import com.LTICarLoan.beans.User;

public interface UserPersonalService {
	public int addUser(User u);
	boolean userLogin(String email, String password);
	public User getUserDetails(int id);

	String signup(User user);
}
