import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from 'react-router-dom';
import Loginpage from './Loginpage';
import Profile from './Profile';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Link to="/loginpage">Sign up</Link>
        <Link to="/profile">Profile</Link>
        <Routes>
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/profile" element={<Profile />} />
            </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;
