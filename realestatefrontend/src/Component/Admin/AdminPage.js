import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css'; // Import your CSS file

const AdminPage = () => {
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    // Simulated API call to fetch property and user data
    axios.get('http://localhost:8585/get') // Replace with your API URL
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error('Error fetching properties:', error);
    });
    
  }, []);


  useEffect(() => {
    // Simulated API call to fetch property and user data
    axios.get('http://localhost:8585/properties') // Replace with your API URL
    .then(response => {
      setProperties(response.data);
    })
    .catch(error => {
      console.error('Error fetching properties:', error);
    });
    
  }, []);

   const handleDeleteProperty = (propertyId) => {
    // Implement property deletion logic
    console.log('Delete property:', propertyId);
    try {
      axios.delete(`http://localhost:8585/deleteproperty/${propertyId}`); // Replace with your DELETE API endpoint
      properties(); // Fetch updated properties after deletion
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  const handleDeleteUser = (userId) => {
   
    console.log('Delete user:', userId);
    try {
      axios.delete(`http://localhost:8585/deleteproperty/${userId}`); // Replace with your DELETE API endpoint
      properties(); // Fetch updated properties after deletion
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };



  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>
      <div className="property-management">
        <h3>Property Management</h3>
        <ul>
          {properties.map((property) => (
            <li key={property.property_Id}>
              <div>
              <p>{property.property_name}</p>
              <p>{property.bhk_type}</p>
              <p>{property.city}</p>
              <p>{property.state}</p>
              <p>{property.description}</p>
              <p>{property.furnihing_type}</p>
              <p>{property.locality}</p>
              <p>{property.listing_date}</p>
              <p>{property.property_type}</p>
              </div>
              <div className="property-button">
              <button onClick={() => handleDeleteProperty(property.property_id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="user-management">
        <h3>User Management</h3>
        <ul>
          {users.map((user) => (
            <li key={user.email_id}>
              <div>
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
              <p>{user.email_id}</p>
              <p>{user.contact}</p>
              <p>{user.address}</p>
              </div>
              <div className="property-button">
              <button onClick={() => handleDeleteUser(user.email_id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
