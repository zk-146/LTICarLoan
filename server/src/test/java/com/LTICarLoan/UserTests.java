package com.LTICarLoan;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.LTICarLoan.beans.User;
import com.LTICarLoan.dao.UserDao;
import com.LTICarLoan.service.UserPersonalService;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UserTests {
	@Autowired
	UserPersonalService userService;

	@MockBean
	UserDao userDao;

	@Test
	void testaddUser() {
		User user = new User(110, "Zaid", "Khan", "khanzaid1015@gmail.com", "9898989898", "password@123", 21, "M",
				"Mumbai", "Mumbai", "Maha", "Ind", 400022, "Job", 100000);
		System.out.println(user);
		Mockito.when(userDao.addUser(user)).thenReturn(110);
		Assertions.assertThat(userService.addUser(user)).isEqualTo(110);
	}

	@Test
	void userLogin() {
		User user = new User(110, "Zaid", "Khan", "khanzaid1015@gmail.com", "9898989898", "password@123", 21, "M",
				"Mumbai", "Mumbai", "Maha", "Ind", 400022, "Job", 100000);

		Mockito.when(userDao.login("khanzaid1015@gmail.com", "password@123")).thenReturn(user);
		Assertions.assertThat(userService.userLogin("khanzaid1015@gmail.com", "password@123")).isEqualTo(user);
	}

	@Test
	void testgetUserDetails() {
		User user = new User();
		user.setUser_id(110);
		Mockito.when(userDao.getUserDetails(110)).thenReturn(user);
		Assertions.assertThat(userService.getUserDetails(110)).isEqualTo(user);
	}

}
