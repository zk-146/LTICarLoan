package com.LTICarLoan;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.LTICarLoan.beans.Admin;
import com.LTICarLoan.dao.AdminDao;
import com.LTICarLoan.service.AdminService;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class AdminTests {
	
	@Autowired
	AdminService adminService;
	
	@MockBean
	AdminDao adminRepo;
	
	@Test
	public void testAdminLogin() {
		
			Admin admin = new Admin(101,"admin","password");

			Mockito.when(adminRepo.adminLogin("admin", "password")).thenReturn(admin);
			Assertions.assertThat(adminService.adminLogin("admin", "password")).isEqualTo(admin);
		
	}
}
