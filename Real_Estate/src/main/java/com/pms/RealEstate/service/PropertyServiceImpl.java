package com.pms.RealEstate.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pms.RealEstate.dao.PropertyDao;
import com.pms.RealEstate.model.Property;


@Service
public class PropertyServiceImpl implements PropertyService
{
	
	@Autowired
	PropertyDao propertydao;
	
	
	List<Property> ab=new ArrayList<>();
	@Override
	public List<Property> getProperty() {
		List<Property> plist= propertydao.findAll();
		ab.addAll(plist);
		
		   for (Property element : plist) {
	            System.out.println(element);
	        }
		return plist;
	}
	

	@Override
	public void addProperty(Property a) {
		propertydao.save(a);
		
	}

	@Override
	public Property getpropertybyId(int id) {
		Optional<Property> op=propertydao.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		else{
			return null;
			//throw new ResourceAccessException("not found");
		}
	}

	@Override
	public void deletepropertybyId(int id) {
		propertydao.deleteById(id);
		
	}

	@Override
	public void updateproperty(Property p) {
		Optional<Property> op=propertydao.findById(p.getProperty_id());
		if(op.isPresent()) {
			 Property existingProperty =op.get();
			 
		        existingProperty.setProperty_name(p.getProperty_name());
		        existingProperty.setProperty_type(p.getProperty_type());
		        existingProperty.setBhk_type(p.getBhk_type());
		        existingProperty.setBuildup_area(p.getBuildup_area());
		        existingProperty.setFurnishing_type(p.getFurnishing_type());
		        existingProperty.setFloor(p.getFloor());
		        existingProperty.setListing_date(p.getListing_date());
		        existingProperty.setLocality(p.getLocality());
		        existingProperty.setLandmark_street(p.getLandmark_street());
		        existingProperty.setCity(p.getCity());
		        existingProperty.setState(p.getState());
		        existingProperty.setPincode(p.getPincode());
		        existingProperty.setDescription(p.getDescription());
		        propertydao.save(existingProperty);
		}}


	 @Override
	    public List<Property> getPropertiesByCity(String city) {
	        return propertydao.findByCity(city);
	    }


	 @Override
	    public List<Property> getPropertiesByCityStateAndType(String city, String state, String propertyType) {
	        return propertydao.findByLocality_CityAndLocality_StateAndPropertyType(city, state, propertyType);
	    }
	}

