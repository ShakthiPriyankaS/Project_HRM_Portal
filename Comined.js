import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


function Comined() {
  const [employeeList, setEmployeeList] = useState([]);
  const [employeeLists, setEmployeeLists] = useState([]);
  const [employeeListss, setEmployeeListss] = useState([]);

  const apiUrl1 = 'http://localhost:8080/showattendance'; // Replace with your actual endpoint URL

  useEffect(() => {
    fetchData(); // Fetch initial data when the component mounts
  }, []);

  const fetchData = () => {
    axios
      .get(apiUrl1)
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

  const apiUrl2 = 'http://localhost:8080/showpayroll'; // Replace with your actual endpoint URL

  useEffect(() => {
    fetchDatas(); // Fetch initial data when the component mounts
  }, []);

  const fetchDatas = () => {
    axios
      .get(apiUrl2)
      .then((response) => {
        if (response.status === 200) {
          // Set the retrieved data to the "employeeList" state
          setEmployeeLists(response.data);
        } else {
          console.error('Error: Unable to fetch data from the server.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const apiUrl3 = 'http://localhost:8080/showperformance'; // Replace with your actual endpoint URL

  useEffect(() => {
    fetchDatass(); // Fetch initial data when the component mounts
  }, []);

  const fetchDatass = () => {
    axios
      .get(apiUrl3)
      .then((response) => {
        if (response.status === 200) {
          // Set the retrieved data to the "employeeList" state
          setEmployeeListss(response.data);
        } else {
          console.error('Error: Unable to fetch data from the server.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  

  return (
    <div>
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
                {/* Add Action content here */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

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
            {employeeLists.map((employees) => (
              <TableRow key={employees.payrollid}>
                <TableCell>{employees.payrollid}</TableCell>
                <TableCell>{employees.employeeid}</TableCell>
                <TableCell>{employees.payperiod}</TableCell>
                <TableCell>{employees.salaryamount}</TableCell>
                <TableCell>{employees.deductions}</TableCell>
                <TableCell>{employees.netpay}</TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" align="center" style={{ marginTop: '20px' }}>
        Performance List
      </Typography>
      <TableContainer component={Paper} style={{ marginTop: '10px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Review ID</TableCell>
              <TableCell>Employee ID</TableCell>
              <TableCell>Review Date</TableCell>
              <TableCell>Reviewer Id</TableCell>
              <TableCell>Comments</TableCell>
              <TableCell>Ratings</TableCell>
              <TableCell>Credits</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeListss.map((performance) => (
              <TableRow key={performance.reviewid}>
                <TableCell>{performance.reviewid}</TableCell>
                <TableCell>{performance.employeeid}</TableCell>
                <TableCell>{performance.reviewdate}</TableCell>
                <TableCell>{performance.reviewerid}</TableCell>
                <TableCell>{performance.comments}</TableCell>
                <TableCell>{performance.rating}</TableCell>
                 <TableCell>
                  {performance.rating > 50 && <span>&#11088;</span>}
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Comined;
