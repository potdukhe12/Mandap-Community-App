import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, TextField, Grid, Box } from '@mui/material';
import CustomTable2 from '../../../components/CustomTable2';

const Members = ({ associationName, associationRole }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleMemberClick = (id) => {
    navigate(`/Admin/members/${id}`);
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
    },
    {
      id: 11,
      name: 'Ethan Martinez',
      role: 'BOD',
      association: 'Mystic Meadows Association',
      status: 'Active',
      email: 'ethanmartinez@example.com',
      mobile: '9876543210',
      address: '666 Tranquil St, Mysticville, State, 21098',
      dateOfJoining: '2022-11-15',
    },
    {
      id: 12,
      name: 'Grace Turner',
      role: 'Member',
      association: 'Sky-High Association',
      status: 'Rejected',
      email: 'graceturner@example.com',
      mobile: '9876543210',
      address: '789 Skyway, Highville, State, 54321',
      dateOfJoining: '2022-11-20',
      dateOfCancellation: '2022-12-05',
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
    },
    // Add more members as needed
  ];
  

  const filteredMembers = membersData.filter((member) => {
    
    const includesSearchTerm = member.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
  member.association.toLowerCase().includes(searchTerm.trim().toLowerCase());

    const matchesAssociationName = !associationName || member.association === associationName;
    const matchesRole = !associationRole || member.role === associationRole;
    
    return includesSearchTerm && matchesAssociationName && matchesRole;
  });

  return (
    <div>
      <Grid container spacing={2} 
            sx={{ 
                    padding: '0 10px 10px 10px', 
                    minHeight: '100px' 
                }}>
        <Grid item xs={12} md={7}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <Typography
              sx={{
                borderBottom: '2px solid #000',
                fontSize: '26px',
              }}
            >
              List of Members:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <TextField
            label="Search Members"
            variant="outlined"
            style={{
              marginBottom: '20px',
              alignItems: 'center',
            }}
            fullWidth
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
      </Grid>
      {/* <Grid container spacing={3} sx={{ padding: '0 10px 0 10px' }}>
        {filteredMembers.map((member) => (
          <Grid item xs={12} md={6} key={member.id}>
            <Card
              sx={{
                background: 'linear-gradient(to bottom, #fcdbbc, #fef5ec)',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                minHeight: '120px',
                paddingLeft: '16px',
                transition: 'background 0.3s ease,box-shadow 0.3s ease',
                boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                '&:hover': {
                  background: 'linear-gradient(to bottom, #fef5ec, #fde8d4)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                  transition: 'background 0.3s ease,box-shadow 0.3s ease',
                },
              }}
              onClick={() => handleMemberClick(member.id)}
            >
              <ListItemAvatar>
                <Avatar alt="Member Image">{member.name[0]}</Avatar>
              </ListItemAvatar>
              <CardContent>
                <Typography variant="h6" component="div">
                  {member.name}
                </Typography>
                <Typography color="text.secondary">{`${member.role}`}</Typography>
                <Typography color="text.primary">{`${member.association}`}</Typography>
              </CardContent>
              <CardActions sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={() => handleMemberClick(member.id)} sx={{ padding: '0' }}>
                  <ChevronRightIcon sx={{ fontSize: '2em' }} />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <CustomTable2
        members={filteredMembers}
        onRowClick={(row) => handleMemberClick(row.id)}
      />
    </div>
  );
};

export default Members;
