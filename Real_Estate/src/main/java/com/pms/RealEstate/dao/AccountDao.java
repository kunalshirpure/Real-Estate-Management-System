package com.pms.RealEstate.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.pms.RealEstate.model.Accounts;

@Repository
public interface AccountDao extends JpaRepository<Accounts,Integer> {

//	 @Query("SELECT email_id FROM Account WHERE email_id = :email_id")
//   	 Optional<Accounts> findByEmailId(String email_id);
	
}
