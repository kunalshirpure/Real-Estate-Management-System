package com.pms.RealEstate.service;


import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.RealEstate.dao.AccountDao;
import com.pms.RealEstate.dao.LoginDao;
import com.pms.RealEstate.model.Accounts;

@Service
public class AccountServiceImpl implements AccountService {
	
	@Autowired
	AccountDao accountdao;
	
	@Autowired
	LoginDao logindao;

		 @Transactional
		    public Accounts registerUser(Accounts account) {
			 
		        return accountdao.save(account);
		    }

		 
     public List<Accounts> getAllAccounts() {
		        return accountdao.findAll();
		    }
  
	
}

	

