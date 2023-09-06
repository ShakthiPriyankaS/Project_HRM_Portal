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

function Performance() {
  const [formData, setFormData] = useState({
    employeeid: '',
    employeename: '',
    reviewdate: '', // Changed input type to 'date'
    reviewerid: '',
    comments: '',
    rating: '', // Changed from 'rating' to 'ratings'
  });
  const [employeeList, setEmployeeList] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPerformance, setSelectedPerformance] = useState(null);
  const [editedRatings, setEditedRatings] = useState('');


  // Define the API endpoint URL
  const apiUrl = 'http://localhost:8080/showperformance'; // Replace with your actual endpoint URL

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
      .post('http://localhost:8080/addperformance', formData)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Data posted successfully:', response.data);
          // Reset the form or show a success message
          setFormData({
            employeeid: '',
            employeename: '',
            reviewdate: '', // Changed input type to 'date'
            reviewerid: '',
            comments: '',
            rating: '', // Changed from 'rating' to 'ratings'
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

  const handleDelete = (reviewId) => {
    setIsDeleting(true);

    axios
      .delete(`http://localhost:8080/delIdpe/${reviewId}`)
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

  const handleEdit = (review) => {
    setSelectedPerformance(review);
    setIsEditing(true);
    setEditedRatings(review.rating); // Set edited ratings when editing
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedPerformance({
      ...selectedPerformance,
      [name]: value,
    });
    setEditedRatings(value); // Update edited ratings when editing
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8080/updatebyidpe/${selectedPerformance.reviewid}`, selectedPerformance)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Data updated successfully:', response.data);
          // Update the specific item in the employeeList with the edited values
          const updatedList = employeeList.map((performance) =>
            performance.reviewid === selectedPerformance.reviewid ? selectedPerformance : performance
          );
          setEmployeeList(updatedList);
          setSelectedPerformance(null);
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


  const [employees, setEmployees] = useState([]);
  
  const handleClickrate = () => {
    axios
      .get('http://localhost:8080/ratingGreaterThan50')
      .then((response) => {
        // Append the newly fetched employees to the existing list
        setEmployees([...employees, ...response.data]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Performance
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        {isEditing ? (
          <>
            <Typography variant="h5" align="center">
              Edit Performance
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Employee ID"
                name="employeeid"
                value={selectedPerformance.employeeid}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Employee Name"
                name="employeename"
                value={selectedPerformance.employeename}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Review Date"
                name="reviewdate"
                type="date" // Changed input type to 'date'
                value={selectedPerformance.reviewdate}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Reviewer Id"
                name="reviewerid"
                value={selectedPerformance.reviewerid}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Comments"
                name="comments"
                value={selectedPerformance.comments}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Rating"
                name="rating"
                value={editedRatings}
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
              label="Employee Name"
              name="employeename"
              value={formData.employeename}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Review Date"
              name="reviewdate"
              type="date" // Changed input type to 'date'
              value={formData.reviewdate}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Reviewer Id"
              name="reviewerid"
              value={formData.reviewerid}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Comments"
              name="comments"
              value={formData.comments}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Rating"
              name="rating"
              value={formData.rating}
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
        Performance List
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: '10px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Review ID</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Employee Name</TableCell>
              <TableCell>Review Date</TableCell>
              <TableCell>Reviewer Id</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Ratings</TableCell>
              <TableCell>Credits</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.map((performance) => (
              <TableRow key={performance.reviewid}>
                <TableCell>{performance.reviewid}</TableCell>
                <TableCell>{performance.employeeid}</TableCell>
                <TableCell>{performance.employeename}</TableCell>
                <TableCell>{performance.reviewdate}</TableCell>
                <TableCell>{performance.reviewerid}</TableCell>
                <TableCell>{performance.comments}</TableCell>
                <TableCell>{performance.rating}</TableCell>
                 <TableCell>
                  {performance.rating > 50 && <span>&#11088;</span>}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(performance.reviewid)}
                    disabled={isDeleting}
                    startIcon={<DeleteIcon />}
                  >
                    {isDeleting ? 'Deleting...' : 'Delete'}
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEdit(performance)}
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
        <button onClick={handleClickrate}>Get employees</button>
        <Typography variant="h5" align="center" style={{ marginTop: '20px' }}>
          Toply performed employees
        </Typography>
        <TableContainer component={Paper} style={{ marginTop: '10px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee ID</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Credits</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell>{employee.employeeid}</TableCell>
                  <TableCell>{employee.employeename}</TableCell>
                  <TableCell>{employee.rating}</TableCell>
                  <TableCell>
                  {employee.rating > 50 && <span>&#11088;</span>}
                </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}

export default Performance;
