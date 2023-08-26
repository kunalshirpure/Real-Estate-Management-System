import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"; // Import your CSS file for styling

const Header = ({ loggedIn, userId }) => {
  const navigate = useNavigate();

  const [hasRendered, setHasRendered] = useState(false);

  
  useEffect(() => {
    // Trigger re-render only once after login
    if (loggedIn && !hasRendered) {
      setHasRendered(true);
      window.location.reload();
    }
  }, [loggedIn, hasRendered]);


  const handleLogout = () => {
    // Clear sessionStorage and navigate to the home page
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="logo">RealEstate</div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/postproperty">Post Properties</Link>
          </li>

          {loggedIn ? (
            <>
              <li>
                <span>{userId}</span>
              </li>
              <li>
                <span onClick={handleLogout}>Logout</span>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
