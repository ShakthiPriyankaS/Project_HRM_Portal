import React, { useState } from 'react';
import './Admin.css'; // Import your CSS file

function Employee() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., validate credentials or make an API call
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    setUsername('');
    setPassword('');
  };

  return (
    <div className="admin-login">
      <div className="admin-card">
        <h2 className="admin-title">Employee Login</h2>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">
                <h3>Username</h3></label>
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
            <br/>
            <button type="submit" width="15px" height="15px">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Employee;