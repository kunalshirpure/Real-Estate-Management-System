import React, { useState, useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios";
import "./OwnerDashboard.css"; // Import your CSS file

const OwnerDashboard = ({ loggedIn, userId }) => {

  const navigate = useNavigate();

  console.log(loggedIn);
  console.log(userId);

  const [ownedProperties, setOwnedProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from the Spring Boot API
    axios
      .get("http://localhost:8585/properties") // Replace with your API URL
      .then((response) => {
        setOwnedProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });

      
  }, []);

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  const handleDeleteProperty = async (propertyId) => {
    // Implement property deletion logic
    try {
     await axios.delete(`http://localhost:8585/deleteproperty/${propertyId}`); // Replace with your DELETE API endpoint
      ownedProperties(); // Fetch updated properties after deletion
    } catch (error) {
      console.error("Error deleting property:", error);
    }
    const updatedProperties = ownedProperties.filter(
      (property) => property.id !== propertyId
    );
    setOwnedProperties(updatedProperties);

    
  };

 const handleUpdateProperty = async (propertyId)=>{
     navigate(`/propertyupdate/${propertyId}`)
 }

  // const handleUpdateProperty = (propertyId) => {
  //   try {
  //     const updatedProperty =
  //       /* create updated property object with new data */
  //       axios.put(
  //         `http://localhost:8585/propertyupdate/${propertyId}`,
  //         updatedProperty
  //       ); // Replace with your PUT API endpoint
  //     ownedProperties(); // Fetch updated properties after update
  //   } catch (error) {
  //     console.error("Error updating property:", error);
  //   }
  // };

  return (
    <div className="owner-dashboard">
      <h2>Owner Dashboard</h2>
      <div className="owned-properties">
        <h3>Your Posted Properties</h3>
        <ul>
          {ownedProperties.map((property) => (
            <li key={property.property_id}>
              <p> {property.property_name}</p>
              <p>{property.location}</p>
              
              <div className="property-buttons">
              <button onClick={() => handleDeleteProperty(property.property_id)}>
                Delete
              </button>
              <button onClick={() => handlePropertyClick(property.property_id)}>View Details</button>
              <button onClick={()=> handleUpdateProperty(property.property_id)}> Update Property</button>
            </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-property-button">
        <Link to="/postproperty">
          <button>Add/Post Property</button>
        </Link>
      </div>
    </div>
  );
};

export default OwnerDashboard;