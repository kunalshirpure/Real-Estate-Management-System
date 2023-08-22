package com.pms.RealEstate.service;

import java.util.List;

import com.pms.RealEstate.model.Property;

public interface PropertyService {

	List<Property> getProperty();

	void addProperty(Property a);

	Property getpropertybyId(int id);

	void deletepropertybyId(int id);

	void updateproperty(Property p);

	List<Property> getPropertiesByCity(String city);

	List<Property> getPropertiesByCityStateAndType(String city, String state, String propertyType);

	
}
