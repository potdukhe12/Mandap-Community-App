import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  ListItemAvatar,
  Avatar,
  TextField,
  Grid,
  Box,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

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
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Member',
      association: 'Green Oasis Association',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Member',
      association: 'Silver Summit Association',
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Member',
      association: 'Royal Heights Association',
    },
    {
      id: 5,
      name: 'Robert Brown',
      role: 'Member',
      association: "Nature's Haven Association",
    },
    {
      id: 6,
      name: 'Olivia Wilson',
      role: 'Member',
      association: 'Fitness Fusion Association',
    },
    {
      id: 7,
      name: 'William White',
      role: 'Member',
      association: 'Sunset Serenity Association',
    },
    {
      id: 8,
      name: 'Sophia Turner',
      role: 'Member',
      association: 'Harmony Haven Association',
    },
    {
      id: 9,
      name: 'Liam Harris',
      role: 'Member',
      association: 'Golden Grove Association',
    },
    {
      id: 10,
      name: 'Ava Miller',
      role: 'BOD',
      association: 'Sky-High Association',
    },
    {
      id: 11,
      name: 'Ethan Martinez',
      role: 'BOD',
      association: 'Mystic Meadows Association',
    },
    // Add more members as needed
  ];  

  const filteredMembers = membersData.filter((member) => {
    // member.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    
    const includesSearchTerm = member.name.toLowerCase().includes(searchTerm.trim().toLowerCase());
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
                fontSize: '30px',
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
      <Grid container spacing={3} sx={{ padding: '0 10px 0 10px' }}>
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
      </Grid>
    </div>
  );
};

export default Members;
