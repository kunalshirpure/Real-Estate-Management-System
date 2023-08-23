import React, { useState } from 'react';
import './PostProperty.css'; // Import your CSS file for styling
import axios from 'axios'


const PostProperty = () => {
  const [step, setStep] = useState(1);
  const [propertyDetails, setPropertyDetails] = useState({
    property_name: '',
    property_type: '',
    bhk_type: '',
    buildup_area: '',
    furnishing_type: '',
    floor: '',
    listing_date: '',
    locality: '',
    landmark_street: '',
    city: '',
    state: '',
    pincode: '',
    description: '',
    post_type: '', // Add this field for post_type
    expected_rent: '', // Add this field for expected_rent
    expected_deposit: '', // Add this field for expected_deposit
    preferred_tenants: '', // Add this field for preferred_tenants
    expected_rate: '', // Add this field for expected_rate
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const propertyResponse = await axios.post('localhost:8585/addproperty', propertyDetails);

    if (propertyResponse.status === 200) {
      console.log('Property details submitted:', propertyDetails);

      // Send rent or buying details to the respective table
      if (propertyDetails.post_type === 'rent') {
        const rentDetails = {
          property: propertyResponse.data.property_id,
          expected_rent: propertyDetails.expected_rent,
          expected_deposit: propertyDetails.expected_deposit,
          preferred_tenants: propertyDetails.preferred_tenants,
        };

        const rentResponse = await axios.post('localhost:8585/addrentaldetails', rentDetails);

        if (rentResponse.status === 200) {
          console.log('Rent details submitted:', rentDetails);
        } else {
          console.error('Error submitting rent details');
          // Handle error cases
        }
      } else if (propertyDetails.post_type === 'buy') {
        const buyDetails = {
          property: propertyResponse.data.property_id,
          expected_rate: propertyDetails.expected_rate,
        };

        const buyResponse = await axios.post('localhost:8585/addbuyingdetails', buyDetails);

        if (buyResponse.status === 200) {
          console.log('Buy details submitted:', buyDetails);
        } else {
          console.error('Error submitting buy details');
          // Handle error cases
        }
      }

      setPropertyDetails({
        property_name: '',
        property_type: '',
        bhk_type: '',
        buildup_area: '',
        furnishing_type: '',
        floor: '',
        listing_date: '',
        locality: '',
        landmark_street: '',
        city: '',
        state: '',
        pincode: '',
        description: '',
        post_type: '',
        expected_rent: '',
        expected_deposit: '',
        preferred_tenants: '',
        expected_rate: '',
      });
    }
  };
  
  return (
    <div className="property-form">
      <h2>Post Property</h2>
      <form onSubmit={handleSubmit}>
        <label>Property Name:</label>
        <input
          type="text"
          name="property_name"
          value={propertyDetails.property_name}
          onChange={handleChange}
          required
        />
        <label>Property Type:</label>
        <input
          type="text"
          name="property_type"
          value={propertyDetails.property_type}
          onChange={handleChange}
          required
        />

        <label>BHK Type:</label>
          <select
            name="bhk_type"
            value={propertyDetails.bhk_type}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select Bhk Type</option>
            <option value="1bhk">1 Bhk</option>
            <option value="2bhk">2 Bhk</option>
            <option value="3bhk">3 Bhk</option>
            {/* Add more options as needed */}
          </select>
        <label>Buildup Area:</label>
        <input
          type="text"
          name="buildup_area"
          value={propertyDetails.buildup_area}
          onChange={handleChange}
          required
        />
       <label>Furnishing Type:</label>
            <select
              name="furnishing_type"
              value={propertyDetails.furnishing_type}
              onChange={handleChange}
              required
              className="input-field"
            >
              <option value="">Select Furnishing Type</option>
              <option value="unfurnished">Unfurnished</option>
              <option value="semi-furnished">Semi-Furnished</option>
              <option value="fully-furnished">Fully Furnished</option>
            </select>
        <label>Floor:</label>
        <input
          type="text"
          name="floor"
          value={propertyDetails.floor}
          onChange={handleChange}
          required
        />
        <label>Listing Date:</label>
        <input
          type="text"
          name="listing_date"
          value={propertyDetails.listing_date}
          onChange={handleChange}
          required
        />
        <label>Locality:</label>
        <input
          type="text"
          name="locality"
          value={propertyDetails.locality}
          onChange={handleChange}
          required
        />
        <label>Landmart/Street:</label>
        <input
          type="text"
          name="landmark_street"
          value={propertyDetails.landmark_street}
          onChange={handleChange}
          required
        /> 
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={propertyDetails.city}
          onChange={handleChange}
          required
        />
        <label> State:</label>
        <input
          type="text"
          name="state"
          value={propertyDetails.state}
          onChange={handleChange}
          required
        />
        <label>Pincode:</label>
        <input
          type="text"
          name="pincode"
          value={propertyDetails.pincode}
          onChange={handleChange}
          required
        />
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={propertyDetails.description}
          onChange={handleChange}
          required
        />
 <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            {/* Property details fields */}
            <label>Property Name:</label>
            <input
              type="text"
              name="property_name"
              value={propertyDetails.property_name}
              onChange={handleChange}
              required
            />
            {/* Add more property details fields */}
            <button type="button" onClick={handleNext}>
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            {/* Post property for */}
            <div className="form-group">
              <label>Post property for:</label>
              <select
                name="post_type"
                value={propertyDetails.post_type}
                onChange={handleChange}
                required
              >
                <option value="">Select Post Type</option>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            
            {/* Rent details */}
            {propertyDetails.post_type === 'rent' && (
              <>
                <label>Expected Rent:</label>
                <input
                  type="text"
                  name="expected_rent"
                  value={propertyDetails.expected_rent}
                  onChange={handleChange}
                  required
                />
                <label>Expected Deposit:</label>
                <input
                  type="text"
                  name="expected_deposit"
                  value={propertyDetails.expected_deposit}
                  onChange={handleChange}
                  required
                />
                <label>Preferred Tenants:</label>
                <input
                  type="text"
                  name="preferred_tenants"
                  value={propertyDetails.preferred_tenants}
                  onChange={handleChange}
                  required
                />
              </>
            )}
            
            {/* Buy details */}
            {propertyDetails.post_type === 'buy' && (
              <>
                <label>Expected Rate:</label>
                <input
                  type="text"
                  name="expected_rate"
                  value={propertyDetails.expected_rate}
                  onChange={handleChange}
                  required
                />
              </>
            )}

            <button type="submit">Post Property</button>
          </>
        )}
      </form>
      </form>
    </div>
  );
};

export default PostProperty;
