import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './Profile.css';
import pur from './Pur.PNG';
import { useSpring, animated } from 'react-spring';

function Adminfill() {
  const navigate = useNavigate();

  const handlesignindetails = () => {
    navigate('/signindetails');
  };
  const handleattendance = () => {
    navigate('/attendance');
  };
  const handlepayroll = () => {
    navigate('/payroll');
  };
  const handleperformance = () => {
    navigate('/performance');
  };
  const handlesearch = () => {
    navigate('/comined');
  };

  const titleAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 }, // Adjust duration as needed
  });

  const subtitleAnimation = useSpring({
    from: { opacity: 0, marginTop: -20 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 1000 }, // Adjust duration as needed
  });

  return (
    <div style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Navbar style={{ backgroundColor: 'purple' }} variant="dark">
        <Nav>
          <button className="custom-button" onClick={handlesignindetails}>
            Sign in details
          </button>
          <button className="custom-button" onClick={handleattendance}>
            Attendance
          </button>
          <button className="custom-button" onClick={handlepayroll}>
            Payroll
          </button>
          <button className="custom-button" onClick={handleperformance}>
            Performance
          </button>
          <button className="custom-button" onClick={handlesearch}>
            Details
          </button>
        </Nav>
      </Navbar>
      <br />
      <br />
      <br />
      <br />
      <div>
        <div className="portal-title">
          <animated.div style={titleAnimation}>
            <h1>WELCOME! Admin</h1>
          </animated.div>
          <animated.div style={subtitleAnimation}>
            <h3>No one is more cherished in this world than someone who lightens the burden of another.</h3>
          </animated.div>
        </div>
        <animated.img
          src={pur}
          width="1150px"
          height="450px"
          alt=" "
          style={{ opacity: titleAnimation.opacity }} // Apply the animation to the image's opacity
        />
      </div>
    </div>
  );
}

export default Adminfill;
