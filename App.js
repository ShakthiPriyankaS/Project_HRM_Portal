import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './Loginpage';
import Profile from './Profile';
import SignUp from './SignUp';
import Admin from './Admin';
import Employee from './Employee';
import Adminfill from './Adminfill';
import Signindetails from './Signindetails';
import Attendance from './Attendance';
import Payroll from './Payroll';
import Performance from './Performance';
import Comined from './Comined';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/adminfill" element={<Adminfill />} />
        <Route path="/signindetails" element={<Signindetails />} />
        <Route path="/attendance" element={<Attendance/>} />
        <Route path="/payroll" element={<Payroll/>} />
        <Route path="/performance" element={<Performance/>} />
        <Route path="/comined" element={<Comined/>} />
      </Routes>
    </Router>
  );
}

export default App;

