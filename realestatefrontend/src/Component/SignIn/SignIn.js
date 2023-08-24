import React, { useState } from 'react';
import './SignIn.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
 
   console.log(username);
   console.log(password);

    try {
      const response = await axios.post('http://localhost:8585/login', {
        "email_id":username,
        "password":password,
      });

      if (response.data) {
        console.log('Login successful:', response.data);
        // Handle successful login, such as storing tokens or redirecting to a dashboard
          // Assuming response.data contains the user's role information (consumer, owner, admin)
          if (response.data.role === "user") {
            // Navigate to the home page for consumers
            navigate("/");
          } else if (response.data.role === "owner") {
            // Navigate to the owner dashboard
            navigate("/owner");
          } else if (response.data.role === "admin") {
            // Navigate to the admin dashboard
            navigate("/admin");
          }
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred while logging in');
    }
  };

  const handleForgotPassword = () => {
    // Here you can implement the "Forgot Password" functionality
    console.log('Forgot password clicked');
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignIn}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign In</button>
        <button type="button" onClick={handleForgotPassword}>
          Forgot Password
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignIn;
