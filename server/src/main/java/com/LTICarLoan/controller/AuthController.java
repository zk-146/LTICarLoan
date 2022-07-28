package com.LTICarLoan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.LTICarLoan.beans.User;
import com.LTICarLoan.service.UserPersonalService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/user-api")
public class AuthController {
	
	@Autowired
	UserPersonalService userService;
	
	@PostMapping(path = "/addUser",consumes="application/json")
	public int addUser(@RequestBody User u) {
		return userService.addUser(u);
	}

}
