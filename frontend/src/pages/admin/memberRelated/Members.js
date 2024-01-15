import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Grid, Box, InputAdornment, Tooltip, Button, Select, MenuItem } from '@mui/material';
import CustomTable2 from '../../../components/CustomTable2';
import {
  AddCard as AddAssociationIcon,
  Search as SearchIcon
} from '@mui/icons-material';

const Members = ({ associationName, associationRole }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const handleMemberClick = (id) => {
    navigate(`/Admin/members/${id}`);
  };

  const handleAddMember = () => {
    // Navigate to the AddAssociation page
    navigate('/Admin/addMember');
  };

  const membersData = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Member',
      association: 'Sky-High Association',
      status: 'Active',
      email: 'johndoe@example.com',
      mobile: '1234567890',
      address: '123 Main St, Cityville, State, 12345',
      dateOfJoining: '2022-01-01',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Member',
      association: 'Green Oasis Association',
      status: 'Active',
      email: 'janesmith@example.com',
      mobile: '2345678901',
      address: '456 Park Ave, Greendale, State, 67890',
      dateOfJoining: '2022-02-15',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'President',
      association: 'Sky-High Association',
      status: 'Active',
      email: 'michaeljohnson@example.com',
      mobile: '3456789012',
      address: '789 Mountain Rd, Summitville, State, 45678',
      dateOfJoining: '2022-03-20',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Secretary',
      association: 'Sky-High Association',
      status: 'Active',
      email: 'emilydavis@example.com',
      mobile: '4567890123',
      address: '101 Tower St, Heightsville, State, 56789',
      dateOfJoining: '2022-04-10',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 5,
      name: 'Robert Brown',
      role: 'Member',
      association: "Nature's Haven Association",
      status: 'Active',
      email: 'robertbrown@example.com',
      mobile: '5678901234',
      address: '555 Forest Ln, Greenburg, State, 67890',
      dateOfJoining: '2022-05-05',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 6,
      name: 'Olivia Wilson',
      role: 'Member',
      association: 'Fitness Fusion Association',
      status: 'Active',
      email: 'oliviawilson@example.com',
      mobile: '6789012345',
      address: '777 Fitness Ave, Workout City, State, 78901',
      dateOfJoining: '2022-06-30',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 7,
      name: 'William White',
      role: 'Member',
      association: 'Sunset Serenity Association',
      status: 'Active',
      email: 'williamwhite@example.com',
      mobile: '7890123456',
      address: '999 Serene Rd, Sunsetville, State, 89012',
      dateOfJoining: '2022-07-18',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 8,
      name: 'Sophia Turner',
      role: 'Member',
      association: 'Harmony Haven Association',
      status: 'Active',
      email: 'sophiaturner@example.com',
      mobile: '8901234567',
      address: '333 Melody St, Harmonytown, State, 90123',
      dateOfJoining: '2022-08-22',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 9,
      name: 'Liam Harris',
      role: 'Member',
      association: 'Golden Grove Association',
      status: 'Active',
      email: 'liamharris@example.com',
      mobile: '9012345678',
      address: '222 Bloom Ln, Goldenville, State, 01234',
      dateOfJoining: '2022-09-12',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 10,
      name: 'Ava Miller',
      role: 'BOD',
      association: 'Sky-High Association',
      status: 'Active',
      email: 'avamiller@example.com',
      mobile: '1098765432',
      address: '789 Skyway, Highville, State, 54321',
      dateOfJoining: '2022-10-05',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 11,
      name: 'Grace Turner',
      role: 'Member',
      association: 'Sky-High Association',
      status: 'Pending',
      email: 'graceturner@example.com',
      mobile: '9876543210',
      address: '789 Skyway, Highville, State, 54321',
      dateOfJoining: '2022-11-20',
      dateOfCancellation: '2022-12-05',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    {
      id: 13,
      name: 'Daniel Miller',
      role: 'Member',
      association: 'Sky-High Association',
      status: 'Rejected',
      email: 'danielmiller@example.com',
      mobile: '8765432109',
      address: '456 Uptown, Highville, State, 98765',
      dateOfJoining: '2022-11-25',
      dateOfCancellation: '2022-12-10',
      state: 'State1',
      city: 'City1',
      birthdate: '1990-01-01',
      anniversaryDate: '2020-01-01',
    },
    // Add more members as needed
  ];
  

  const filteredMembers = membersData.filter((member) => {
    const includesSearchTerm =
      member.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      member.association.toLowerCase().includes(searchTerm.trim().toLowerCase());

    const matchesAssociationName =
      !associationName || member.association === associationName;
    const matchesRole = !associationRole || member.role === associationRole;

    const matchesStatus =
      statusFilter === 'All' || member.status.toLowerCase() === statusFilter.toLowerCase();

    return includesSearchTerm && matchesAssociationName && matchesRole && matchesStatus;
  });

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: '0 10px', marginBottom: '20px' }}>
        <Grid item xs={8} md={4}>
            <Box
              sx={{
                display: !associationName ? 'flex' : 'none',
                overflow: 'hidden',
                minWidth: '200px'
              }}
            >
              <Typography sx={{ borderBottom: '2px solid #000', fontSize: '26px' }}>
                List of Members:
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
              sx={{  }}
            >
              <MenuItem value="All">All Members</MenuItem>
              <MenuItem value="Pending">New Members</MenuItem>
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
            <Tooltip title="Create New Association">
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
                Create
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      <Grid container spacing={2} sx={{ padding: '20px 10px 50px 20px' }}>
        <CustomTable2
          members={filteredMembers}
          onRowClick={(row) => handleMemberClick(row.id)}
        />
      </Grid>
    </div>
  );
};

export default Members;
