package com.LTICarLoan.service;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.LTICarLoan.beans.Loan;
import com.LTICarLoan.beans.User;
import com.LTICarLoan.beans.Vehicle;
import com.LTICarLoan.dao.LoanDao;
import com.LTICarLoan.dao.VehicleDao;

@Service("loanService")
public class LoanServiceImpl implements LoanService {

	@PersistenceContext
	private EntityManager em;

	@Autowired
	LoanDao loanDao;
	
	@Autowired
	VehicleDao vehicleDao;

	@Override
	public boolean addLoan(Loan l, int user_id) {
		Query qry = em.createQuery("Select u from User u where u.user_id=:user_id");
		qry.setParameter("user_id", user_id);
		System.out.println(user_id);
		User user = (User) qry.getResultList().get(0);

		qry = em.createQuery("Select v from Vehicle v join v.user u where u.user_id=:user_id");
		qry.setParameter("user_id", user_id);
		Vehicle v = (Vehicle) qry.getResultList().get(0);

		double emi = v.getPrice() * 0.00625 * ((Math.pow((1 + 0.00625), 48)) / (Math.pow((1 + 0.00625), 48) - 1));

		Loan loanData = new Loan("Four Wheeler Loan", 7.5, emi * 48, 48, ((1 / 100) * v.getPrice()), v);

		System.out.println(v);
		System.out.println(user);
		System.out.println(loanData);
		System.out.println(user.getAnnual_salary() / 65 * 100 + " " + v.getPrice() + " " + (user.getAnnual_salary() / 65 * 100 >= v.getPrice()));
		if (user.getAnnual_salary() / 65 * 100 >= v.getPrice()) {
			System.out.println("YOU ARE ELIGIBLE FOR A LOAN---" + user.getAnnual_salary() / 65 * 100);
			loanDao.addLoan(loanData);
			return true;
		} else {
			System.out.println("YOU ARE NOT ELIGIBLE FOR LOAN");
//			vehicleDao.deleteVehicleById(user.getUser_id());
			return false;
		}
	}

	@Override
	public Loan findLoanById(int id) {
		return loanDao.findLoanById(id);
	}

	@Override
	public List<Loan> findLoanByCarId(int car_id) {
		return loanDao.findLoanByCarId(car_id);
	}

}
