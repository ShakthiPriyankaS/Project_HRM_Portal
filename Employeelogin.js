import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Employeelogin() {
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
        } else {
          console.error('Error: Unable to fetch data from the server.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);
  return (
    <div>
       <div className="container">
       <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
       <tbody>
          {employeeList.map((employee) => (
            <tr key={employee.profileid}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
              <td>{employee.phonenumber}</td>
            </tr>
          ))}
        </tbody>
    </div>
    </div>
  )
}

export default Employeelogin;