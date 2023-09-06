import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Signindetails() {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = 'http://localhost:8080/showprofile'; // Replace with your actual endpoint URL

    // Perform a GET request to fetch data from the backend
    axios
      .get(apiUrl)
      .then((response) => {
        if (response.status === 200) {
          // Set the retrieved data to the "employeeList" state
          setEmployeeList(response.data);
          console.log('Data received:', response.data); // Add this line for debugging
        } else {
          console.error('Error: Unable to fetch data from the server.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const maskPassword = (password) => {
    return '•'.repeat(password.length);
  };


  return (
    <div>
      <h1>Sign in Details</h1>
      <table>
        <thead>
          <tr>
            <th>Profile ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => (
            <tr key={employee.profileid}>
              <td>{employee.profileid}</td>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
              <td>{employee.phonenumber}</td>
              <td>{maskPassword(employee.password)}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Signindetails;
