package com.LTICarLoan.service;

import java.util.List;

import com.LTICarLoan.beans.User;

public interface UserPersonalService {
	public int addUser(User u);
	public User getUserDetails(int id);
	public User userLogin(String email, String password);

	String signup(User user);
}
