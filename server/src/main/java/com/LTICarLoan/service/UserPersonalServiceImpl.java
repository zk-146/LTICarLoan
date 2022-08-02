package com.LTICarLoan.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.User;
import com.LTICarLoan.dao.UserDao;

@Service("UserService")
public class UserPersonalServiceImpl implements UserPersonalService {
	@Autowired
	UserDao userDao;

	@Override
	public int addUser(User u) {
		try {
			System.out.println("service layer called");
			return userDao.addUser(u);
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("User is not added due to unexpected error");
			return 0;
		}
	}

	@Override
	public User userLogin(String email, String password) {

		try {
			return userDao.login(email, password);
		} catch (Exception e) {
			System.out.println(e);
			System.out.println("Login Failed");
			return null;
		}
	}

	@Override
	public String signup(User user) {
		try {
			int user1 = userDao.addUser(user);
			return "Sign up successful. \nYour userId is: " + user1;
		} catch (Exception e) {
			System.out.println(e);
			return "Unexpected error occured. Signup failed.";
		}
	}

	@Override
	public User getUserDetails(int id) {
		try {
			User user = userDao.getUserDetails(id);
			return user;
		} catch (Exception e) {
			System.out.println(e);
			throw new Error("An error occurred while fetching the user data");
		}
	}
}
