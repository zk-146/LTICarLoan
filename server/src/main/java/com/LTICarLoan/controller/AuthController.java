package com.LTICarLoan.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.LTICarLoan.beans.Admin;
import com.LTICarLoan.beans.User;
import com.LTICarLoan.service.AdminService;
import com.LTICarLoan.service.UserPersonalService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/user-api")
public class AuthController {

	@Autowired
	UserPersonalService userService;

	@Autowired
	AdminService adminService;

	// http://localhost:8090/user-api/addUser
	@PostMapping(path = "/addUser", consumes = "application/json")
	public int addUser(@RequestBody User u) {
		System.out.println("Controller" + u);
		return userService.addUser(u);
//		return 0;
	}

	// http://localhost:8090/user-api/login?email={email}&password={password}
	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public User userLogin(@RequestParam("email") String email, @RequestParam("password") String password) {
		return userService.userLogin(email, password);
	}

//	@RequestMapping(value="/")

	@RequestMapping(value = "/get-user-details", method = RequestMethod.GET)
	public User getUserDetails(@RequestParam("id") int id) {
		return userService.getUserDetails(id);
	}

	@RequestMapping(value = "/admin-login", method = RequestMethod.POST)
	public Admin adminLogin(@RequestParam("email") String username, @RequestParam("password") String password) {
		return adminService.adminLogin(username, password);
	}

	// http://localhost:8090/user-api/signup
	@RequestMapping(value = "/signup", method = RequestMethod.POST)
	public String signup(@RequestBody User user) {
		System.out.println(user);
		String message = userService.signup(user);
		return message;
	}

}
