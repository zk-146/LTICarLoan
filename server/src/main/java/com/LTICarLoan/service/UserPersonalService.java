package com.LTICarLoan.service;

import com.LTICarLoan.beans.User;

public interface UserPersonalService {
	public int addUser(User u);
	public User userLogin(String email, String password);

	String signup(User user);
}
