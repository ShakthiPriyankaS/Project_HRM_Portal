import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';
import logintemplate from './Logintemplate.PNG';

function Loginpage() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/profile');
  };
  const handlesignup = () => {
    navigate('/signup');
  };

  const containerStyle = {
    backgroundImage: `url(${logintemplate})`,
    backgroundSize: 'cover',
  };

  return (
    <div className="portal-title">
      Human Resource Management
      <div className="login-container" style={containerStyle}>
        <div className="input-container">
          {/* Your input fields go here */}
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <button type="button" className="login-button button-animation" onClick={handleLogin}>
            <h4>Login</h4>
          </button>
            <button type="button" className="signup-button button-animation" onClick={handlesignup}>
              <h4>Signup</h4>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;



