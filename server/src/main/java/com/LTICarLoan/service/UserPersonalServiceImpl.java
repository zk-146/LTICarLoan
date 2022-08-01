package com.LTICarLoan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.User;
import com.LTICarLoan.dao.UserDao;
import com.LTICarLoan.exception.AuthException;

@Service("UserService")
public class UserPersonalServiceImpl implements UserPersonalService{
	@Autowired
	UserDao userDao;

	@Override
	public int addUser(User u) throws AuthException {
		try {
			return userDao.addUser(u);
		}catch(Exception e) {
			System.out.println(e.getMessage());
			throw new Error("An error occurred while creating new user!");
		}
	}

	@Override
	public User userLogin(String email, String password) throws AuthException{
		
		try {
			return userDao.login(email, password);
		}catch(Exception e) {
			System.out.println(e.getMessage());
			throw new Error("Unexpected error occured. Login failed!");
		}
	}

	@Override
	public String signup(User user) throws AuthException{
		try {
			int user1 = userDao.addUser(user);
			return "Sign up successful. \nYour userId is: " + user1;
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return "Unexpected error occured. Signup failed.";
		}
	}


	
	
	
	
	

}
