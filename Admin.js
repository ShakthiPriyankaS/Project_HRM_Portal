import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Admin.css'; // Import your CSS file

function Admin() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAdmin = (e) => {
    e.preventDefault();

    // Define your fixed username and password
    const fixedUsername = 'shakthipriyanka';
    const fixedPassword = 'prishak';

    // Check if the entered username and password match the fixed values
    if (username === fixedUsername && password === fixedPassword) {
      // Authentication successful, you can navigate to the next page or perform other actions here
      console.log('Authentication successful');
      // Reset the form
      navigate('/Adminfill'); // Use navigate to go to the next page
    } else {
      // Authentication failed, you can show an error message or take appropriate action
      console.log('Authentication failed');
      alert('Authentication failed');
      // You might want to clear the password field in case of an incorrect attempt
      setPassword('');
    }
  };

  return (
    <div className="admin-login">
      <div className="admin-card">
        <h2 className="admin-title">Admin Login</h2>
        <div className="login-container">
          <form >
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <br />
            <button type="submit" width="15px" height="15px" onClick={handleAdmin}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;


