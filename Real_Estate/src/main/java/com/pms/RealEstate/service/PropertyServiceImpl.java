package com.pms.RealEstate.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pms.RealEstate.dao.PropertyDao;
import com.pms.RealEstate.dto.PropertyDto;
import com.pms.RealEstate.model.Buying;
import com.pms.RealEstate.model.Property;
import com.pms.RealEstate.model.Rental;


@Service
public class PropertyServiceImpl implements PropertyService
{
	
	@Autowired
	PropertyDao propertydao;
	

    public List<Property> getAllProperties() {
        return propertydao.findAll();
    }

	
	
	public void addProperty1(PropertyDto propertyDTO)
	  {
        Property property = createPropertyFromDTO(propertyDTO);

        if ("buy".equals(propertyDTO.getOperation())) {
            Buying buying = createBuyingFromDTO(propertyDTO);
            property.setBuying(buying);
            buying.setProperty(property);
        } else if ("rent".equals(propertyDTO.getOperation())) {
            Rental rental = createRentalFromDTO(propertyDTO);
            property.setRental(rental);
            rental.setProperty(property);
        }

        propertydao.save(property);
    }

    private Rental createRentalFromDTO(PropertyDto propertyDTO) {
        Rental rental = new Rental();
        rental.setExpected_rent(propertyDTO.getExpected_rent());
        rental.setExpected_deposit(propertyDTO.getExpected_deposit());
        rental.setPreferred_tenants(propertyDTO.getPreferred_tenants());
        return rental;
    }
    
    public Property createPropertyFromDTO(PropertyDto propertyDTO) {
        Property property = new Property();
        
        property.setProperty_name(propertyDTO.getProperty_name());
        property.setProperty_type(propertyDTO.getProperty_type());
        property.setBhk_type(propertyDTO.getBhk_type());
        property.setBuildup_area(propertyDTO.getBuildup_area());
        property.setFurnishing_type(propertyDTO.getFurnishing_type());
        property.setFloor(propertyDTO.getFloor());
        property.setListing_date(propertyDTO.getListing_date());
        property.setLocality(propertyDTO.getLocality());
        property.setLandmark_street(propertyDTO.getLandmark_street());
        property.setCity(propertyDTO.getCity());
        property.setState(propertyDTO.getState());
        property.setPincode(propertyDTO.getPincode());
        property.setDescription(propertyDTO.getDescription());
        return property;
    }

    public Buying createBuyingFromDTO(PropertyDto propertyDTO) {
        Buying buying = new Buying();
        buying.setExpected_rate(propertyDTO.getExpected_rate());
        return buying;
    }
//    
//    public Images createBuyingFromDTO(PropertyDto propertyDTO) {
//        Images image = new Images();
//        Images.setExpected_rate(propertyDTO.getExpected_rate());
//        return buying;
//    }

    

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

