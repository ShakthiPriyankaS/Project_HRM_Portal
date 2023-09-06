import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Leave() {
  const [formData, setFormData] = useState({
    employeeid: '',
    startdate: '',
    enddate: '',
    reason: '',
  });
  const [employeeList, setEmployeeList] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null);

  // Define the API endpoint URL
  const apiUrl = 'http://localhost:8080/showleave'; // Replace with your actual endpoint URL

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  const fetchData = () => {
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
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const postData = () => {
    axios
      .post('http://localhost:8080/addleave', formData)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Data posted successfully:', response.data);
          // Reset the form or show a success message
          setFormData({
            employeeid: '',
            startdate: '',
            enddate: '',
            reason: '',
          });
          fetchData(); // Fetch updated data after a successful post
        } else {
          console.error('Server responded with an error:', response.status);
          // Handle the error, e.g., show an error message to the user
        }
      })
      .catch((error) => {
        // Handle errors as before
      });
  };

  const handleDelete = (leaveId) => {
    setIsDeleting(true);

    axios
      .delete(`http://localhost:8080/delIdl/${leaveId}`)
      .then((response) => {
        setIsDeleting(false);
        console.log('Data deleted successfully');
        // You can perform additional actions like updating the UI or showing a success message.
        fetchData(); // Fetch updated data after a successful delete
      })
      .catch((error) => {
        setIsDeleting(false);
        console.error('Error deleting data:', error);
        // Handle the error, e.g., show an error message to the user.
      });
  };

  const handleEdit = (leave) => {
    setSelectedLeave(leave);
  };

  const handleEditInputChange = (e, leave) => {
    const { name, value } = e.target;
    setSelectedLeave({
      ...leave,
      [name]: value,
    });
  };

  const handleUpdate = (leave) => {
    axios
      .put(`http://localhost:8080/updateleave`, leave)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Data updated successfully:', response.data);
          setSelectedLeave(null); // Clear the selectedLeave state
          fetchData(); // Fetch updated data after a successful update
        } else {
          console.error('Server responded with an error:', response.status);
          // Handle the error, e.g., show an error message to the user
        }
      })
      .catch((error) => {
        // Handle errors as before
      });
  };

  return (
    <div>
      <label>
        EmployeeId:
        <input
          type="text"
          name="employeeid"
          value={formData.employeeid}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Start Date:
        <input
          type="date"
          name="startdate"
          value={formData.startdate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        End Date:
        <input
          type="date"
          name="enddate"
          value={formData.enddate}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Reason:
        <input
          type="text"
          name="reason"
          value={formData.reason}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={postData}>Post Data</button>
      <h2>Employee List</h2>
      <br />
      <br />
      <br />
      <div>
        <center>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Leave ID</th>
                <th>Employee ID</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Reason:</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((employee) => (
                <tr key={employee.leaveid}>
                  <td>{employee.leaveid}</td>
                  <td>{employee.employeeid}</td>
                  <td>{employee.startdate}</td>
                  <td>{employee.enddate}</td>
                  <td>{employee.reason}</td>
                  <td>
                    <button onClick={() => handleDelete(employee.leaveid)} disabled={isDeleting}>
                      {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                    <button onClick={() => handleEdit(employee)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      </div>
      {selectedLeave && (
        <div>
          <h2>Edit Leave</h2>
          <label>
            Start Date:
            <input
              type="date"
              name="startdate"
              value={selectedLeave.startdate}
              onChange={(e) => handleEditInputChange(e, selectedLeave)}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              name="enddate"
              value={selectedLeave.enddate}
              onChange={(e) => handleEditInputChange(e, selectedLeave)}
            />
          </label>
          <label>
            Reason:
            <input
              type="text"
              name="reason"
              value={selectedLeave.reason}
              onChange={(e) => handleEditInputChange(e, selectedLeave)}
            />
          </label>
          <button onClick={() => handleUpdate(selectedLeave)}>Update</button>
        </div>
      )}
    </div>
  );
}

export default Leave;



