import React, { useState, useEffect } from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">RealEstate</div>
        <p className="footer-text">
          © {new Date().getFullYear()} All rights reserved. Current Time: {currentTime.toLocaleTimeString()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
