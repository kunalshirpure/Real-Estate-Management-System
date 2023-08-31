import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './ForgotPassword.css'; // Import your CSS file for styling

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            "to": email,
            "subject": "4S Events",
            "body": "This is a test email sent from the application."
        };

        try {
            const response = await axios.post('http://localhost:8585/send-email', data);

            if (response.data !== null) {
                console.log('Email sent:', response.data);
                // alert("Email Sent")
                Swal.fire({
                    icon: 'success',
                    title: 'Email Sent',
                    text: 'Please check the email to get the password'
                }); setTimeout(() => {
                    window.location.href = '/signin';
                }, 2000);
            }
            else {
                alert("Email not found")
            }

        } catch (error) {
            console.error('Error sending email:', error);
        }
      }

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Forgot Password</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div> */}
        <button type="submit" className="reset-button">Reset Password</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
