package com.pms.RealEstate.service;

import java.util.List;

import com.pms.RealEstate.dto.PropertyDto;
import com.pms.RealEstate.model.Buying;
import com.pms.RealEstate.model.Property;

public interface PropertyService {

	

	Property getpropertybyId(int id);

	void deletepropertybyId(int id);

	void updateproperty(Property p);

	List<Property> getPropertiesByCity(String city);

	List<Property> getPropertiesByCityStateAndType(String city, String state, String propertyType);

	
	
	
	
	List<Property> getAllProperties();
	
	void addProperty1(PropertyDto propertyDTO);

	
	 Property createPropertyFromDTO(PropertyDto propertyDTO);
	 Buying createBuyingFromDTO(PropertyDto propertyDTO);

	
}
