import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./PropertyUpdate.css"; // Import your CSS file for styling

const UpdateProperty = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  console.log(propertyId);

  const userId = sessionStorage.getItem("userId");
  console.log(userId);

  const [propertyDetails, setPropertyDetails] = useState({
    // Initialize with empty values or null, assuming it's consistent with your API response
    property_name: "",
    property_type: "",
    bhk_type: "",
    buildup_area: 0,
    furnishing_type: "",
    floor: 0,
    listing_date: "",
    locality: "",
    landmark_street: "",
    city: "",
    state: "",
    pincode: 0,
    description: "",
    operation: "", // 'buy' or 'rent'
    expected_rate: 0, // only for buying
    expected_rent: 0, // only for renting
    expected_deposit: 0, // only for renting
    preferred_tenants: "", // only for renting
  });

  useEffect(() => {
    async function fetchPropertyData() {
      try {
        const response = await axios.get(
          `http://localhost:8585/property/${propertyId}`
        );
        if (response.status === 200) {
          setPropertyDetails(response.data);
        }
      } catch (error) {
        console.error("Error fetching property data:", error);
      }
    }

    fetchPropertyData();
  }, [propertyId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8585/update`,
        propertyDetails
      );
      if (response.status === 200) {
        console.log("Property updated successfully:", response.data);

        navigate("/owner");
      }
    } catch (error) {
      console.error("Error updating property:", error);
    }
  }

  return (
    <div className="property-update">
      <h1>Update Property</h1>
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
          type="number"
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
          type="number"
          name="floor"
          value={propertyDetails.floor}
          onChange={handleChange}
          required
        />
        <label>Listing Date:</label>
        <input
          type="date"
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
        <label>Landmark/Street:</label>
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
          type="number"
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

        <label>Operation:</label>
        <select
          name="operation"
          value={propertyDetails.operation}
          onChange={handleChange}
          required
        >
          <option value="">Select Operation</option>
          <option value="buy">Buy</option>
          <option value="rent">Rent</option>
        </select>

        {propertyDetails.operation === "buy" && (
          <>
            <label>Expected Rate:</label>
            <input
              type="number"
              name="expected_rate"
              value={propertyDetails.expected_rate}
              onChange={handleChange}
              required
            />
          </>
        )}

        {propertyDetails.operation === "rent" && (
          <>
            <label>Expected Rent:</label>
            <input
              type="number"
              name="expected_rent"
              value={propertyDetails.expected_rent}
              onChange={handleChange}
              required
            />
            <label>Expected Deposit:</label>
            <input
              type="number"
              name="expected_deposit"
              value={propertyDetails.expected_deposit}
              onChange={handleChange}
              required
            />

            <label>Preferred Tenants:</label>
            <select
              name="preferred_tenants"
              value={propertyDetails.preferred_tenants}
              onChange={handleChange}
              required
            >
              <option value="">Select Operation</option>
              <option value="student">Student</option>
              <option value="family">Family</option>
            </select>
          </>
        )}

        {/* Render form fields similar to PostProperty, using propertyDetails as values */}
        {/* ... */}
        <div>
          <button type="submit">Update Property</button>
          <Link to="/owner">Back to Owner Page</Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateProperty;

