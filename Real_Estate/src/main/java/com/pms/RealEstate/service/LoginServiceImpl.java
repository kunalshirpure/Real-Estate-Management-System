package com.pms.RealEstate.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.RealEstate.dao.LoginDao;
import com.pms.RealEstate.model.Accounts;
import com.pms.RealEstate.model.Login;

@Service
public class LoginServiceImpl implements LoginService {

	@Autowired
	LoginDao logindao;

	@Override
	public void addNewLogin(Accounts a) {
		Login l = new Login(a.getEmail_id(), a.getPassword());
		logindao.save(l);
	}

	@Override
	public boolean authenticate(String email, String password) {
		// Fetch the user by email from the database
		Login user = logindao.findById(email).orElse(null);

		// Check if the user exists and the provided password matches
		if (user != null && user.getPassword().equals(password)) {
			return true; // Authentication successful
		}

		return false; // Authentication failed
	}

}
