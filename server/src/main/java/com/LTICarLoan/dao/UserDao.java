package com.LTICarLoan.dao;

import com.LTICarLoan.beans.User;

public interface UserDao {

	public int addUser(User u);
	boolean login(String email,String password);
	public User getUserDetails(int id);

}
