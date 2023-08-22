package com.pms.RealEstate.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.pms.RealEstate.model.Buying;
import com.pms.RealEstate.model.Property;
import com.pms.RealEstate.model.Rental;
import com.pms.RealEstate.service.BuyingService;
import com.pms.RealEstate.service.PropertyService;
import com.pms.RealEstate.service.RentalService;

@CrossOrigin(origins="*")
@RestController
public class PropertyController {
	
	@Autowired
	PropertyService propertyservice;
	
	@Autowired
	RentalService rentalservice;
	
	@Autowired
	BuyingService buyingservice;
	 
	@GetMapping("/properties")
	public List<Property> displayAllPropertydetails()
	     {
	      	List<Property> list=propertyservice.getProperty();
	      	System.out.println(list);
	    	return list;
	     }
	
	@GetMapping("/property/{id}")
	public ResponseEntity<Property>   getById(@PathVariable int id) {
		Property p=propertyservice.getpropertybyId(id);
		if(p!=null) {
		   return ResponseEntity.ok(p);
		}
		else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		}
	}
	
    @PostMapping("/addproperty")
    public ResponseEntity<String> insertPropertyDetails(@RequestBody Property a) 
         {
		    propertyservice.addProperty(a);
		    return ResponseEntity.ok("added successfully");
	     }
    
    @DeleteMapping("/deleteproperty/{id}")
    public ResponseEntity<String> deletePropertyDetails(@PathVariable int id) {
		propertyservice.deletepropertybyId(id);
		return ResponseEntity.ok("deleted successfully");
	}
    

    //http://localhost:8989/properties/search?city=Metroville
 
    @GetMapping("/properties/search")
    public ResponseEntity<List<Property>> searchPropertiesByCity(@RequestParam String city) {
        List<Property> properties = propertyservice.getPropertiesByCity(city);
        return ResponseEntity.ok(properties);
    }
        
    
        
    @GetMapping("/properties/search/{city}/{state}/{propertyType}")
    public ResponseEntity<List<Property>> searchProperties(
            @PathVariable String city,
            @PathVariable String state,
            @PathVariable String propertyType) {
        List<Property> properties = propertyservice.getPropertiesByCityStateAndType(city, state, propertyType);
        return ResponseEntity.ok(properties);
    }

        
        
    
    
    
    
    
    
    
    
    
        
        
        
        
    @PutMapping("/propertyupdate/{id}")
	public ResponseEntity<String> updatePropertyDetails(@RequestBody Property p) {
		propertyservice.updateproperty(p);
		return ResponseEntity.ok("modified successfully");
    }
    
    
  
    
   
    @PostMapping("/addrentaldetails/")
    public ResponseEntity<String> insertRentedDetails(@RequestBody Rental r) 
         {
		    rentalservice.addRentaldetails(r);
		    return ResponseEntity.ok("added successfully");
	     }
    @PostMapping("/addbuyingdetails/")
    public ResponseEntity<String> insertBuyingDetails(@RequestBody Buying b) 
         {
		    buyingservice.addBuyingdetails(b);
		    return ResponseEntity.ok("added successfully");
         }
    

    

    
	@GetMapping("/rented-properties")
	public List<Rental> getRentedProperties() 
	     {
		    return rentalservice.getAllRentedProperties();
	     }
	  
	@GetMapping("/buying-properties")
	public List<Buying> getBuyingProperties()
	     {
	        return buyingservice.getAllBuyingProperties();
	     }	
}