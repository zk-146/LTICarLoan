package com.LTICarLoan.dao;

import com.LTICarLoan.beans.User;

public interface UserDao {

	public int addUser(User u);

	public User getUserDetails(int id);

	public User login(String email, String password);

}
