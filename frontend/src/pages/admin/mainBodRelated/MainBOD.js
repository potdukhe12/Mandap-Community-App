import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Grid, Box, InputAdornment, Tooltip, Button, Select, MenuItem } from '@mui/material';
import CustomTable3 from '../../../components/CustomTable3';
import {
  AddCard as AddAssociationIcon,
  Search as SearchIcon
} from '@mui/icons-material';

const MainBOD = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleMemberClick = (id) => {
    navigate(`/Admin/mainBod/${id}`);
  };

  const handleAddMember = () => {
    // Navigate to the AddAssociation page
    navigate('/Admin/addMainBod');
  };

  // Different data for the list of mainBodData
  const mainBodData = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Main BOD',
      status: 'Active',
      email: 'johndoe@example.com',
      mobile: '1234567890',
      address: '123 Main St, Cityville, State, 12345',
      dateOfJoining: '2022-01-01',
      birthdate: '1990-05-15',
      anniversaryDate: '2010-06-20',
      state: 'California',
      city: 'Cityville',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Main BOD',
      status: 'Active',
      email: 'janesmith@example.com',
      mobile: '2345678901',
      address: '456 Park Ave, Greendale, State, 67890',
      dateOfJoining: '2022-02-15',
      birthdate: '1985-08-22',
      anniversaryDate: '2005-12-10',
      state: 'New York',
      city: 'Greendale',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Main BOD',
      status: 'Active',
      email: 'michaeljohnson@example.com',
      mobile: '3456789012',
      address: '789 Mountain Rd, Summitville, State, 45678',
      dateOfJoining: '2022-03-20',
      birthdate: '1978-12-05',
      anniversaryDate: '2000-09-18',
      state: 'New Jersey',
      city: 'Summitville',
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Main BOD',
      status: 'Active',
      email: 'emilydavis@example.com',
      mobile: '4567890123',
      address: '101 Tower St, Heightsville, State, 56789',
      dateOfJoining: '2022-04-10',
      birthdate: '1992-03-25',
      anniversaryDate: '2015-07-30',
      state: 'Texas',
      city: 'Heightsville',
    },
    {
      id: 5,
      name: 'Robert Brown',
      role: 'Main BOD',
      status: 'Active',
      email: 'robertbrown@example.com',
      mobile: '5678901234',
      address: '555 Forest Ln, Greenburg, State, 67890',
      dateOfJoining: '2022-05-05',
      birthdate: '1980-09-10',
      anniversaryDate: '2003-11-05',
      state: 'Florida',
      city: 'Greenburg',
    },
    {
      id: 6,
      name: 'Olivia Wilson',
      role: 'Main BOD',
      status: 'Active',
      email: 'oliviawilson@example.com',
      mobile: '6789012345',
      address: '777 Fitness Ave, Workout City, State, 78901',
      dateOfJoining: '2022-06-30',
      birthdate: '1995-07-18',
      anniversaryDate: '2018-02-14',
      state: 'California',
      city: 'Workout City',
    },
    // Add more mainBodData as needed
  ];
  

  const filteredMainBOD = mainBodData.filter((mainBod) => {
    const includesSearchTerm =
      mainBod.name.toLowerCase().includes(searchTerm.trim().toLowerCase());

    const matchesStatus =
      statusFilter === 'All' || mainBod.status.toLowerCase() === statusFilter.toLowerCase();

    return includesSearchTerm && matchesStatus;
  });

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '0 10px', marginBottom: '20px' }}>
        <Grid item xs={8} md={4}>
          <Box
            sx={{
              display: 'flex',
              overflow: 'hidden',
              minWidth: '248px'
            }}
          >
            <Typography sx={{ borderBottom: '2px solid #000', fontSize: '26px' }}>
              Main BOD Members:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} md={3}>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            fullWidth
            size="small"
            variant="outlined"
          >
            <MenuItem value="All">All Members</MenuItem>
            <MenuItem value="Active">Active Members</MenuItem>
            <MenuItem value="Rejected">Rejected Members</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={8} md={3}>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
                  <Tooltip title="Search">
                    <SearchIcon />
                  </Tooltip>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={4} md={2}>
          <Tooltip title="Add Main BOD Member">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                height: '100%',
              }}
              onClick={handleAddMember}
            >
              <AddAssociationIcon sx={{ marginRight: '8px' }} />
              Add
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{ padding: '20px 10px 50px 20px' }}>
        <CustomTable3
          mainBOD={filteredMainBOD}
          onRowClick={(row) => handleMemberClick(row.id)}
        />
      </Grid>
    </div>
  );
};

export default MainBOD;
