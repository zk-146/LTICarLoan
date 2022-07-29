package com.LTICarLoan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.User;
import com.LTICarLoan.dao.UserDao;

@Service("UserService")
public class UserPersonalServiceImpl implements UserPersonalService{
	@Autowired
	UserDao userDao;

	@Override
	public int addUser(User u) {
		return userDao.addUser(u);
	}

	@Override
	public boolean userLogin(String email, String password) {
		
		return userDao.login(email, password);
	}

	@Override
	public String signup(User user) {
		try {
			int user1 = userDao.addUser(user);
			return "Sign up successful. \nYour userId is: " + user1;
		} catch (Exception e) {
			return "Unexpected error occured. Signup failed.";
		}
	}


	
	
	
	
	

}
