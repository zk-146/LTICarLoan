package com.LTICarLoan.dao;

import com.LTICarLoan.beans.User;
import com.LTICarLoan.exception.AuthException;

public interface UserDao {

	public int addUser(User u)throws AuthException;
	public User login(String email,String password)throws AuthException;

}
