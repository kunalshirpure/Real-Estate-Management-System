import React, { useEffect, useState } from 'react';
import './Home.css'; // Import your CSS file for styling
import axios from 'axios';

const Home = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [selectedCity, setSelectedCity] = useState(null);
  const [property, setProperty] = useState([]);
  const [searchproperty, setsearchProperty] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8585/properties")
      .then((res) => {
        setProperty([...res.data]);
        setsearchProperty([...res.data]);
      });
  }, []);

  const cities = [
    { id: 1, name: 'Cityville' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Chicago' },
  ];

  const handleSearch = () => {
    // Perform a search using the location and propertyType values
    console.log('Search Criteria:', location, propertyType);
  };

  const handleCitySelect = (cityId) => {
    if (cityId === selectedCity) {
      setSelectedCity(null);
      setsearchProperty(property);
    } else {
      const selectedCityName = cities.find(city => city.id === cityId).name;
      const propertiesInCity = property.filter((p) => p.locality.city === selectedCityName);
      setsearchProperty(propertiesInCity);
      setSelectedCity(cityId);
    }
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to RealEstate Management</h1>
        <p>Your trusted partner for finding your dream property.</p>
        <div className="search-form">
          <input
            type="text"
            placeholder="Enter city or state"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Select property type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="city-list">
          <h2>Select a City</h2>
          <ul>
            {cities.map(city => (
              <li key={city.id} onClick={() => handleCitySelect(city.id)}>
                {city.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedCity && (
          <div className="property-list">
            <h2>Properties in {cities.find(city => city.id === selectedCity).name}</h2>
            <ul>
              {searchproperty.map((p) => (
                <li key={p.property_id}>
                  <div>{p.property_type}</div>
                  <div>{p.property_type}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {
        property.map((p) => (
          <h1 key={p.property_id}>{p.property_name}</h1>
        ))
      }
    </div>
  );
};

export default Home;
