import React, { useState, useEffect } from 'react';
import './AdminPage.css'; // Import your CSS file

const AdminPage = () => {
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);

  // Simulated data, replace with actual data from your API or database
  const mockProperties = [
    { id: 1, title: 'Beautiful House', location: 'City A, State B' },
    { id: 2, title: 'Luxury Apartment', location: 'City X, State Y' },
    // ... add more properties
  ];

  const mockUsers = [
    { id: 1, name: 'Admin User', email: 'admin@example.com' },
    { id: 2, name: 'User 1', email: 'user1@example.com' },
    // ... add more users
  ];

  useEffect(() => {
    // Simulated API call to fetch property and user data
    setUsers(mockUsers);
    setProperties(mockProperties);
    
  }, []);

  const handleDeleteProperty = (propertyId) => {
    // Implement property deletion logic
    console.log('Delete property:', propertyId);
  };

  const handleDeleteUser = (userId) => {
    // Implement user deletion logic
    console.log('Delete user:', userId);
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>
      <div className="property-management">
        <h3>Property Management</h3>
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              {property.title} - {property.location}
              <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="user-management">
        <h3>User Management</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
