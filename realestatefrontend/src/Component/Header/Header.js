import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">RealEstate</div>
      <nav className="nav">
        <ul>
         <li><Link to="/">Home</Link></li>
          <li><Link to="/postproperty">Post Properties</Link></li>
          
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/signin">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
