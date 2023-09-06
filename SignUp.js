import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function SignUp() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    password:'',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postData = () => {
    axios
      .post('http://localhost:8080/addprofile', formData)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Data posted successfully:', response.data);
          // Reset the form or show a success message
        } else {
          console.error('Server responded with an error:', response.status);
          // Handle the error, e.g., show an error message to the user
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error('Server responded with an error:', error.response.status);
          console.error('Error response data:', error.response.data); // Log the response data for more details
        } else if (error.request) {
          console.error('No response received from the server');
        } else {
          // Something happened in setting up the request that triggered an error
          console.error('Error setting up the request:', error.message);
        }
        // Show an error message to the user or take appropriate action
      });
  };

  return (
    <div>
    <div className="container">
      <h1>Sign In</h1>
      <br/>
      <br/>
      <br/>
      <label>
        First Name:
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <br/>
      <br/>
      <label>
        Last Name:
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <br/>
      <br/>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <br/>
      <br/>
      <label>
        Phone number:
        <input
          type="text"
          name="phonenumber"
          value={formData.phonenumber}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <br/>
      <br/>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </label>
      <br/>
      <br/>
      <br/>
      <button onClick={postData}>Sign In</button>
      <br />
      <br />
      <table className="center">
      </table>
    </div>
    </div>
  );
}

export default SignUp;
