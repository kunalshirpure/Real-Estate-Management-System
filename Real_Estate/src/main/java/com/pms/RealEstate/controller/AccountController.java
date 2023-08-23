package com.pms.RealEstate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.pms.RealEstate.dto.LoginDto;
import com.pms.RealEstate.model.Accounts;
import com.pms.RealEstate.service.AccountService;


@CrossOrigin(origins="*")
@RestController
public class AccountController {

	@Autowired
	AccountService accountservice;

      
	
	@PostMapping("/register")
    public ResponseEntity<Accounts> registerUser(@RequestBody Accounts accounts) {
        Accounts newAccounts = accountservice.registerUser(accounts);
        return ResponseEntity.ok(newAccounts);
	}

	@GetMapping("/get")
    public ResponseEntity<List<Accounts>> getAllAccounts() {
        List<Accounts> accounts = accountservice.getAllAccounts();
        return ResponseEntity.ok(accounts);
    }
	
	@PostMapping("/login")
    public Accounts dislogi(@RequestBody LoginDto userlogin)
    {
		System.out.println(userlogin.toString());
		return accountservice.verifyaccount(userlogin);
    }
}
	
	
	
	
