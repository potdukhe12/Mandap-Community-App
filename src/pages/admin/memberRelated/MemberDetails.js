import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import Img from '../../../assets/profileImg.jpg';

const MemberDetails = () => {
  // Use the useParams hook to get the member id from the URL
  const { id } = useParams();

  // Replace this with the logic to fetch member details based on the id
  // For now, we'll use a placeholder object
  const memberDetails = {
    id: 1,
    name: 'John Doe',
    role: 'Member',
    association: 'Sky-High Association',
    status: 'Active',
    email: 'michaeljohnson@example.com',
    mobile: '3456789012',
    address: '123 Main St, Cityville, State, 12345',
    dateOfJoining: '2022-01-01',
    dateOfCancellation: '2022-06-30', // Only applicable if status is 'Inactive'
    state: 'State1',
    city: 'City1',
    birthdate: '1990-01-01',
    anniversaryDate: '2020-01-01',
  };

  // Destructure memberDetails object
  const {
    name,
    role,
    association,
    status,
    email,
    mobile,
    address,
    dateOfJoining,
    dateOfCancellation,
    state,
    city,
    birthdate,
    anniversaryDate,
  } = memberDetails;

  // State for role dropdown
  const [selectedRole, setSelectedRole] = useState(role);

  // State for status toggle
  const [selectedStatus, setSelectedStatus] = useState(status);

  // State for confirmation dialog
  const [openDialog, setOpenDialog] = useState(false);

  // Handle role change
  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  // Handle status toggle
  const handleStatusToggle = (value) => {
    setSelectedStatus(value);
  };

  // Open confirmation dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Close confirmation dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Confirm action
  const handleConfirmAction = () => {
    // Perform action here (e.g., update role and status)
    console.log(`Updated role: ${selectedRole}, Updated status: ${selectedStatus}`);
    // Close dialog
    handleCloseDialog();
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '24px',
        }}
      >
        <Typography
          sx={{
            borderBottom: '2px solid #000',
            fontSize: '30px',
          }}
        >
          Members Details:
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpenDialog}>
          Save Changes
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Card
          elevation={3}
          sx={{
            maxWidth: '700px',
            minHeight: '250px',
            borderRadius: '20px',
            background: 'linear-gradient(to bottom, #fde8d4, #fcdbbc)',
            boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.4)',
          }}
        >
          <Grid container>
            {/* Member details on the left */}
            <Grid item xs={12} md={8}>
              <TableContainer component={Paper}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Name
                      </TableCell>
                      <TableCell sx={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Role
                      </TableCell>
                      <TableCell>
                        <Select
                          label="Role"
                          size= 'small'
                          value={selectedRole}
                          onChange={handleRoleChange}
                        >
                          <MenuItem value="Member">Member</MenuItem>
                          <MenuItem value="BOD">BOD</MenuItem>
                          <MenuItem value="Secretary">Secretary</MenuItem>
                          <MenuItem value="President">President</MenuItem>
                        </Select>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Status
                      </TableCell>
                      <TableCell>
                        <ToggleButtonGroup
                          value={selectedStatus}
                          exclusive
                          size= 'small'
                          onChange={(event, value) => handleStatusToggle(value)}
                        >
                          <ToggleButton value="Active">Active</ToggleButton>
                          <ToggleButton value="Reject">Reject</ToggleButton>
                        </ToggleButtonGroup>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Association
                      </TableCell>
                      <TableCell>{association}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Email
                      </TableCell>
                      <TableCell>{email}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Mobile
                      </TableCell>
                      <TableCell>{mobile}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Birthdate
                      </TableCell>
                      <TableCell>{birthdate}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Anniversary Date
                      </TableCell>
                      <TableCell>{anniversaryDate}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        State
                      </TableCell>
                      <TableCell>{state}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        City
                      </TableCell>
                      <TableCell>{city}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Address
                      </TableCell>
                      <TableCell>{address}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                        Date of Joining
                      </TableCell>
                      <TableCell>{dateOfJoining}</TableCell>
                    </TableRow>
                    {status === 'Inactive' && (
                      <TableRow>
                        <TableCell component="th" scope="row" sx={{ fontWeight: 'bold' }}>
                          Date of Cancellation
                        </TableCell>
                        <TableCell>{dateOfCancellation}</TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            {/* Image on the right */}
            <Grid item xs={12} md={4}>
              <CardMedia
                component="img"
                alt={`${name}'s Image`}
                src={Img}
                sx={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </Grid>
          </Grid>
        </Card>
      </Box>
      {/* Additional details or actions can be added here */}
      <Box>
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogContent>
            Are you sure you want to save the changes?
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleConfirmAction} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
};

export default MemberDetails;
