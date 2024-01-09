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

const Association = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleAssociationClick = (id) => {
      navigate(`/Admin/association/${id}`);
    };
  
    const associationsData = [
        {
            id: 1,
            pincode: '123456',
            name: 'Sky-High Association',
            totalMembers: 100,
            meetingVenue: 'Community Hall',
            meetingDay: 'Monday',
            meetingTime: '6:00 PM',
        },
        {
            id: 2,
            pincode: '789012',
            name: 'Green Oasis Association',
            totalMembers: 150,
            meetingVenue: 'Clubhouse',
            meetingDay: 'Wednesday',
            meetingTime: '7:30 PM',
        },
        {
            id: 3,
            pincode: '567890',
            name: 'Silver Summit Association',
            totalMembers: 120,
            meetingVenue: 'Conference Room',
            meetingDay: 'Friday',
            meetingTime: '5:00 PM',
        },
        {
            id: 4,
            pincode: '456789',
            name: 'Royal Heights Association',
            totalMembers: 80,
            meetingVenue: 'Auditorium',
            meetingDay: 'Tuesday',
            meetingTime: '8:00 PM',
        },
        {
            id: 5,
            pincode: '234567',
            name: "Nature's Haven Association",
            totalMembers: 200,
            meetingVenue: 'Outdoor Park',
            meetingDay: 'Sunday',
            meetingTime: '4:30 PM',
        },
        {
            id: 6,
            pincode: '345678',
            name: 'Fitness Fusion Association',
            totalMembers: 90,
            meetingVenue: 'Gymnasium',
            meetingDay: 'Thursday',
            meetingTime: '6:30 PM',
        },
        {
            id: 7,
            pincode: '678901',
            name: 'Sunset Serenity Association',
            totalMembers: 180,
            meetingVenue: 'Community Center',
            meetingDay: 'Saturday',
            meetingTime: '9:00 PM',
        },
        {
            id: 8,
            pincode: '890123',
            name: 'Harmony Haven Association',
            totalMembers: 130,
            meetingVenue: 'Music Room',
            meetingDay: 'Monday',
            meetingTime: '7:00 PM',
        },
        {
            id: 9,
            pincode: '901234',
            name: 'Golden Grove Association',
            totalMembers: 160,
            meetingVenue: 'Garden Pavilion',
            meetingDay: 'Wednesday',
            meetingTime: '6:00 PM',
        },
        {
            id: 10,
            pincode: '123789',
            name: 'Emerald Enclave Association',
            totalMembers: 110,
            meetingVenue: 'Nature Preserve',
            meetingDay: 'Friday',
            meetingTime: '7:30 PM',
        },
        {
            id: 11,
            pincode: '456012',
            name: 'Mystic Meadows Association',
            totalMembers: 90,
            meetingVenue: 'Meditation Room',
            meetingDay: 'Tuesday',
            meetingTime: '8:30 PM',
        },
        // Add more associations as needed
    ];

    const filteredAssociations = associationsData.filter((association) =>
        association.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
  
    return (
      <div>
        <Grid container spacing={2} sx={{padding: '0 10px 0 10px'}}>
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
                List of Associations:
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={12} md={5}>
            <TextField
                label="Search Associations"
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
        <Grid container spacing={2} sx={{padding: '0 10px 0 10px'}}>
            {filteredAssociations.map((association) => (
              <Grid item xs={12} md={6} lg={4} key={association.id}> {/* Adjust the breakpoints as needed */}
                <Card
                  sx={{
                    background: 'linear-gradient(to bottom, #fcdbbc, #fef5ec)',
                    marginBottom: '10px',
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
                  onClick={() => handleAssociationClick(association.id)}
                >
                  <ListItemAvatar>
                    <Avatar alt="Association Image">{association.name[0]}</Avatar>
                  </ListItemAvatar>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {association.name}
                    </Typography>
                    <Typography color="text.secondary">{`Pincode: ${association.pincode}`}</Typography>
                  </CardContent>
                  <CardActions sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={() => handleAssociationClick(association.id)} sx={{ padding: '0' }}>
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
    
    
  export default Association;
  