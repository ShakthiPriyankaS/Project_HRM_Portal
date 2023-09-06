import React from 'react';
import { Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import './Profile.css';
import log from './Log.PNG';
import { useSpring, animated } from 'react-spring';

function Profile() {
  const navigate = useNavigate();

  const handleadmin = () => {
    navigate('/admin');
  };
  const handleemployee = () => {
    navigate('/employee');
  };

  // Define animations for your elements
  const titleAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, // Adjust duration as needed
  });

  return (
    <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <Navbar style={{ backgroundColor: 'purple' }} variant="dark">
        <Nav>
          <button className="custom-button" onClick={handleadmin}>Admin</button>
          <button className="custom-button" onClick={handleemployee}>Employee</button>
        </Nav>
      </Navbar>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <animated.img
            src={log}
            alt="Logo"
            width="1000"
            height="850"
            style={{ opacity: titleAnimation.opacity }}
          />
        </div>

        <div style={{ flex: 2, padding: '20px', textAlign: 'right' }}>
          <br />
          <br />
          <div className="portal-title">
            <animated.h1 style={titleAnimation}>
              You cannot mandate productivity; you must provide the tools to let people become their best.
            </animated.h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

