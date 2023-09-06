import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Attendance() {
    const [formData, setFormData] = useState({
        employeeid: '',
        date: '',
        status: '',
        percentage: '',
      });
      const [employeeList, setEmployeeList] = useState([]);
      const [isDeleting, setIsDeleting] = useState(false);
      const [isEditing, setIsEditing] = useState(false);
      const [selectedAttendance, setSelectedAttendance] = useState(null);
      const [status, setStatus] = useState('');
  const [attendanceList, setAttendanceList] = useState([]);

  const apiUrl1 = 'http://localhost:8080/status/'; // Replace with your API URL

  const fetchDatas = () => {
    axios.get(apiUrl1 + status)
      .then((response) => {
        if (response.status === 200) {
          setAttendanceList(response.data);
        } else {
          console.error('Error: Unable to fetch data from the server.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleFetchData = () => {
    fetchDatas();
  };

  useEffect(() => {
    // Optionally, you can fetch data when the component mounts if needed.
    // fetchData();
  }, []);
      
    
      // Define the API endpoint URL
      const apiUrl = 'http://localhost:8080/showattendance'; // Replace with your actual endpoint URL
    
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
          .post('http://localhost:8080/addattendance', formData)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              console.log('Data posted successfully:', response.data);
              // Reset the form or show a success message
              setFormData({
                employeeid: '',
                date: '',
                status: '',
                percentage: '',
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
    
      const handleDelete = (attendanceId) => {
        setIsDeleting(true);
    
        axios
          .delete(`http://localhost:8080/delIda/${attendanceId}`)
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
    
      const handleEdit = (attendance) => {
        setSelectedAttendance(attendance);
        setIsEditing(true);
      };
    
      const handleEditInputChange = (event) => {
        const { name, value } = event.target;
        setSelectedAttendance({
          ...selectedAttendance,
          [name]: value,
        });
      };
    
      const handleUpdate = () => {
        axios
          .put(`http://localhost:8080/updatebyida/${selectedAttendance.attendanceid}`, selectedAttendance)
          .then((response) => {
            if (response.status >= 200 && response.status < 300) {
              console.log('Data updated successfully:', response.data);
              // Update the specific item in the employeeList with the edited values
              const updatedList = employeeList.map((employee) =>
                employee.attendanceid === selectedAttendance.attendanceid ? selectedAttendance : employee
              );
              setEmployeeList(updatedList);
              setSelectedAttendance(null);
              setIsEditing(false);
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
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Attendance
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        {isEditing ? (
          <>
            <Typography variant="h5" align="center">
              Edit Attendance
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Employee ID"
                name="employeeid"
                value={selectedAttendance.employeeid}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Date"
                name="date"
                type="date"
                value={selectedAttendance.date}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Status"
                name="status"
                value={selectedAttendance.status}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Percentage"
                name="percentage"
                value={selectedAttendance.percentage}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleUpdate}
                style={{ marginTop: '10px' }}
              >
                Update
              </Button>
            </form>
          </>
        ) : (
          <form>
            <TextField
              fullWidth
              label="Employee ID"
              name="employeeid"
              value={formData.employeeid}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Percentage"
              name="percentage"
              value={formData.percentage}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={postData}
              style={{ marginTop: '10px' }}
            >
              Post Data
            </Button>
          </form>
        )}
      </Paper>
      <Typography variant="h5" align="center" style={{ marginTop: '20px' }}>
        Attendance List
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: '10px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Attendance ID</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Percentage</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.map((employee) => (
              <TableRow key={employee.attendanceid}>
                <TableCell>{employee.attendanceid}</TableCell>
                <TableCell>{employee.employeeid}</TableCell>
                <TableCell>{employee.date}</TableCell>
                <TableCell>{employee.status}</TableCell>
                <TableCell>{employee.percentage}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(employee.attendanceid)}
                    disabled={isDeleting}
                    startIcon={<DeleteIcon />}
                  >
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(employee)}
                    startIcon={<EditIcon />}
                    style={{ marginLeft: '10px' }}
                  >
                    Edit
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
      <h1>Attendance Information</h1>
      <div>
        <label htmlFor="status">Enter Status: </label>
        <input
          type="text"
          id="status"
          name="status"
          value={status}
          onChange={handleStatusChange}
        />
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>
      <div>
        <h2>Attendance List by Status</h2>
        <table>
          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attendanceList.map((attendance) => (
              <tr key={attendance.attendanceid}>
                <td>{attendance.employeeid}</td>
                <td>{attendance.date}</td>
                <td>{attendance.status}</td>
                <td>{attendance.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Container>
  );
}

export default Attendance;