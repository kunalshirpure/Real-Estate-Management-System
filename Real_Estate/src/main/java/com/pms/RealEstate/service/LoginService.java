package com.pms.RealEstate.service;

import com.pms.RealEstate.model.Accounts;


public interface LoginService {

	void addNewLogin(Accounts a);
	boolean authenticate(String email, String password);
	
}
