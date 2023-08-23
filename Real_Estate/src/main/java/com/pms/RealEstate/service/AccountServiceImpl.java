package com.pms.RealEstate.service;


import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.RealEstate.dao.AccountDao;
import com.pms.RealEstate.dao.LoginDao;
import com.pms.RealEstate.dto.LoginDto;
import com.pms.RealEstate.model.Accounts;
import com.pms.RealEstate.model.Login;

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


	@Override
	public Accounts verifyaccount(LoginDto userlogin)
	{
	   List<Accounts> ac=accountdao.findAll();
	   for(Accounts A:ac)
	   {
		   if(A.getEmail_id().equalsIgnoreCase(userlogin.getEmail_id()) && A.getPassword().equalsIgnoreCase(userlogin.getPassword()))
				   {
			           return A;
			   
				   }
	   }
		return null;
		
	}

     
}

	

