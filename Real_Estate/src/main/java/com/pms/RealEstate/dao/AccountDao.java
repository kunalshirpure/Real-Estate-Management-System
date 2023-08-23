package com.pms.RealEstate.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.pms.RealEstate.model.Accounts;

@Repository
public interface AccountDao extends JpaRepository<Accounts,Integer> {

	


}
