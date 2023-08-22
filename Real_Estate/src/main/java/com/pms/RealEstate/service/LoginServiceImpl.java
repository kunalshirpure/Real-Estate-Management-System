package com.pms.RealEstate.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.RealEstate.dao.LoginDao;
import com.pms.RealEstate.model.Accounts;
import com.pms.RealEstate.model.Login;


@Service
public class LoginServiceImpl implements LoginService{

	
	@Autowired
	LoginDao logindao;

	@Override
	public void addNewLogin(Accounts a) {
		Login l=new Login(a.getEmail_id(),a.getPassword());
		logindao.save(l);
	}
	
	


}
