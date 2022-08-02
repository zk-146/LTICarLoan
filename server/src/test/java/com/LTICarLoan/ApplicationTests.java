package com.LTICarLoan;

import java.util.ArrayList;
import java.util.List;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.LTICarLoan.beans.Application;
import com.LTICarLoan.beans.User;
import com.LTICarLoan.dao.ApplicationDao;
import com.LTICarLoan.exception.ApplicationException;
import com.LTICarLoan.service.ApplicationServiceImpl;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class ApplicationTests {
	@Autowired
	ApplicationServiceImpl applicationService;

	@MockBean
	ApplicationDao applicationRepo;

	@Test
	void testAddApplication() throws ApplicationException {
		User user = new User();
		user.setUser_id(141);

		Application application = new Application(10123, "pending", 3000, 60000, 20, 20, user);

		List<Application> applicationList = new ArrayList<>();
		applicationList.add(application);

		Mockito.when(applicationRepo.addApplication(application)).thenReturn(10123);

		Assertions.assertThat(applicationService.addApplication(application)).isEqualTo(10123);
	}

	@Test
	void testFindApplicationById() throws ApplicationException {
		User user = new User();
		user.setUser_id(141);
		List<Application> allApplications = new ArrayList<>();
		Application a1 = new Application(1085, "pending", 10000, 100000, 10, 10, user);
		Application a2 = new Application(10123, "pending", 3000, 60000, 20, 20, user);
		allApplications.add(a1);
		allApplications.add(a2);

		Mockito.when(applicationRepo.findApplicationById(1085)).thenReturn(a1);

		Assertions.assertThat(applicationService.findApplicationById(1085)).isEqualTo(a1);
	}

	@Test
	void testFindApplicationByUserId() throws ApplicationException {
		User user = new User();
		user.setUser_id(141);
		List<Application> allApplications = new ArrayList<>();
		Application a1 = new Application(1085, "pending", 10000, 100000, 10, 10, user);
		Application a2 = new Application(10123, "pending", 3000, 60000, 20, 20, user);
		allApplications.add(a1);
		allApplications.add(a2);

		Mockito.when(applicationRepo.findApplicationByUserId(141)).thenReturn(allApplications);

		Assertions.assertThat(applicationService.findApplicationByUserId(141)).isEqualTo(allApplications);
	}

	@Test
	void testFindApplicationByStatus() throws ApplicationException {
		User user = new User();
		user.setUser_id(141);
		List<Application> allApplications = new ArrayList<>();
		Application a1 = new Application(1085, "approved", 10000, 100000, 10, 10, user);
		Application a2 = new Application(10123, "pending", 3000, 60000, 20, 20, user);
		allApplications.add(a1);
//		allApplications.add(a2);

		Mockito.when(applicationRepo.findApplicationByStatus("approved")).thenReturn(allApplications);

		Assertions.assertThat(applicationService.findApplicationByStatus("approved")).isEqualTo(allApplications);
	}
	
//	@Test
//	void testUpdateApplicationStatus() throws ApplicationException {
//		User user = new User();
//		user.setUser_id(141);
//		List<Application> allApplications = new ArrayList<>();
//		Application a1 = new Application(1088, "pending", 10000, 100000, 10, 10, user);
//		Application a2 = new Application(10123, "pending", 3000, 60000, 20, 20, user);
//		allApplications.add(a1);
//		allApplications.add(a2);
//		
//		Mockito.when(applicationRepo.updateApplicationStatus(1088, "approved")).thenReturn(true);
//
//		Assertions.assertThat(applicationService.updateApplicationStatus(1088, "approved")).isEqualTo(true);
//	}
}
