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

}
