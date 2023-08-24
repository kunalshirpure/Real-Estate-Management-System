import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './OwnerDashboard.css'; // Import your CSS file

const OwnerDashboard = () => {
  const [ownedProperties, setOwnedProperties] = useState([]);
  
  // Simulated data, replace with actual data from your API or database
  const mockOwnedProperties = [
    { id: 1, title: 'Beautiful House', location: 'City A, State B' },
    { id: 2, title: 'Luxury Apartment', location: 'City X, State Y' },
    // ... add more properties
  ];

  useEffect(() => {
    // Simulated API call to fetch owned property data
    setOwnedProperties(mockOwnedProperties);
  }, []);

  const handleDeleteProperty = (propertyId) => {
    // Implement property deletion logic
    const updatedProperties = ownedProperties.filter(property => property.id !== propertyId);
    setOwnedProperties(updatedProperties);
  };

  const handleUpdateProperty = (propertyId) => {
    // Implement property update logic
    console.log('Update property:', propertyId);
  };

  return (
    <div className="owner-dashboard">
      <h2>Owner Dashboard</h2>
      <div className="owned-properties">
        <h3>Your Posted Properties</h3>
        <ul>
          {ownedProperties.map((property) => (
            <li key={property.id}>
              {property.title} - {property.location}
              <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
              <button onClick={() => handleUpdateProperty(property.id)}>Update</button>
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





// import React, { useState, useEffect } from 'react';
// import './OwnerDashboard.css'; // Import your CSS file

// const OwnerDashboard = () => {
//   const [ownedProperties, setOwnedProperties] = useState([]);
//   const [propertyTitle, setPropertyTitle] = useState('');
//   const [propertyLocation, setPropertyLocation] = useState('');

//   // Simulated data, replace with actual data from your API or database
//   const mockOwnedProperties = [
//     { id: 1, title: 'Beautiful House', location: 'City A, State B' },
//     { id: 2, title: 'Luxury Apartment', location: 'City X, State Y' },
//     // ... add more properties
//   ];

//   useEffect(() => {
//     // Simulated API call to fetch owned property data
//     setOwnedProperties(mockOwnedProperties);
//   }, []);

//   const handleAddProperty = () => {
//     // Implement property addition logic
//     const newProperty = {
//       id: ownedProperties.length + 1,
//       title: propertyTitle,
//       location: propertyLocation
//     };
//     setOwnedProperties([...ownedProperties, newProperty]);
//     setPropertyTitle('');
//     setPropertyLocation('');
//   };

//   return (
//     <div className="owner-dashboard">
//       <h2>Owner Dashboard</h2>
//       <div className="owned-properties">
//         <h3>Your Posted Properties</h3>
//         <ul>
//           {ownedProperties.map((property) => (
//             <li key={property.id}>
//               {property.title} - {property.location}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="add-property">
//         <h3>Add New Property</h3>
//         <div className="form-group">
//           <label>Title:</label>
//           <input
//             type="text"
//             value={propertyTitle}
//             onChange={(e) => setPropertyTitle(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Location:</label>
//           <input
//             type="text"
//             value={propertyLocation}
//             onChange={(e) => setPropertyLocation(e.target.value)}
//           />
//         </div>
//         <button onClick={handleAddProperty}>Add Property</button>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;
