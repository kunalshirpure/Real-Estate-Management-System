package com.pms.RealEstate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pms.RealEstate.model.Login;
import com.pms.RealEstate.service.LoginService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/login")
public class LoginController {

	@Autowired
	private LoginService loginService;

	@PostMapping("/authenticate")
	public ResponseEntity<String> authenticate(@RequestBody Login login) {
		boolean isAuthenticated = loginService.authenticate(login.getEmail_id(), login.getPassword());
		if (isAuthenticated) {
			return ResponseEntity.ok("Authentication successful");
		} else {
			return ResponseEntity.status(401).body("Authentication failed");
		}
	}

}
