package com.pms.RealEstate.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.pms.RealEstate.model.Login;

@Repository
public interface LoginDao extends JpaRepository<Login,String>
{
	// You can add custom query methods here if needed
}