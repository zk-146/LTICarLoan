package com.LTICarLoan.service;

import com.LTICarLoan.beans.User;
import com.LTICarLoan.exception.AuthException;

public interface UserPersonalService {
	public int addUser(User u)throws AuthException;
	public User userLogin(String email, String password)throws AuthException;
	String signup(User user)throws AuthException;
}
