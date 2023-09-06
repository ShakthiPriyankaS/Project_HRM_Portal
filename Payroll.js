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

function Payroll() {
  const [formData, setFormData] = useState({
    employeeid: '',
    payperiod: '',
    salaryamount: '',
    deductions: '',
    netpay: '',
  });
  const [employeeList, setEmployeeList] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);

  // Define the API endpoint URL
  const apiUrl = 'http://localhost:8080/showpayroll'; // Replace with your actual endpoint URL

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
      .post('http://localhost:8080/addpayroll', formData)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Data posted successfully:', response.data);
          // Reset the form or show a success message
          setFormData({
            employeeid: '',
            payperiod: '',
            salaryamount: '',
            deductions: '',
            netpay: '',
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

  const handleDelete = (payrollId) => {
    setIsDeleting(true);

    axios
      .delete(`http://localhost:8080/delIdpa/${payrollId}`)
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

  const handleEdit = (payroll) => {
    setSelectedPayroll(payroll);
    setIsEditing(true);
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedPayroll({
      ...selectedPayroll,
      [name]: value,
    });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:8080/updatebyidpa/${selectedPayroll.payrollid}`, selectedPayroll)
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          console.log('Data updated successfully:', response.data);
          // Update the specific item in the employeeList with the edited values
          const updatedList = employeeList.map((employee) =>
            employee.payrollid === selectedPayroll.payrollid ? selectedPayroll : employee
          );
          setEmployeeList(updatedList);
          setSelectedPayroll(null);
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
        Payroll
      </Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        {isEditing ? (
          <>
            <Typography variant="h5" align="center">
              Edit Payroll
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Employee ID"
                name="employeeid"
                value={selectedPayroll.employeeid}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Pay Period"
                name="payperiod"
                type="text"
                value={selectedPayroll.payperiod}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Salary Amount"
                name="salaryamount"
                value={selectedPayroll.salaryamount}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Deductions"
                name="deductions"
                value={selectedPayroll.deductions}
                onChange={handleEditInputChange}
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Net Pay"
                name="netpay"
                value={selectedPayroll.netpay}
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
              label="Pay Period"
              name="payperiod"
              type="text"
              value={formData.payperiod}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Salary Amount"
              type="text"
              name="salaryamount"
              value={formData.salaryamount}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Deductions"
              type="text"
              name="deductions"
              value={formData.deductions}
              onChange={handleInputChange}
              variant="outlined"
              margin="normal"
            />
            <TextField
              fullWidth
              label="Net Pay"
              type="text"
              name="netpay"
              value={formData.netpay}
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
        Payroll List
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: '10px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Payroll ID</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Pay Period</TableCell>
              <TableCell>Salary Amount</TableCell>
              <TableCell>Deductions</TableCell>
              <TableCell>Net Pay</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeList.map((employee) => (
              <TableRow key={employee.payrollid}>
                <TableCell>{employee.payrollid}</TableCell>
                <TableCell>{employee.employeeid}</TableCell>
                <TableCell>{employee.payperiod}</TableCell>
                <TableCell>{employee.salaryamount}</TableCell>
                <TableCell>{employee.deductions}</TableCell>
                <TableCell>{employee.netpay}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(employee.payrollid)}
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
    </Container>
  );
}

export default Payroll;

