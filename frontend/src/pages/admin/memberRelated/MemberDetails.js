import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Box, Card, CardContent, CardMedia, Grid } from '@mui/material';
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
    membershipStatus: 'Active',
    contactInfo: 'johndoe@example.com',
    address: '123 Main St, Cityville, State, 12345',
    dateOfJoining: '2022-01-01',
    dateOfCancellation: '2022-06-30', // Only applicable if membershipStatus is 'Inactive'
  };

  // Destructure memberDetails object
  const {
    name,
    role,
    association,
    membershipStatus,
    contactInfo,
    address,
    dateOfJoining,
    dateOfCancellation,
  } = memberDetails;

  return (
    <Box sx={{ padding: '20px' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '24px',
          justifyContent: 'space-between',
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
      </Box>
      <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Card elevation={3} 
              sx={{ 
                maxWidth: '700px', 
                minHeight: '250px',
                borderRadius: '20px',
                background: 'linear-gradient(to bottom, #fde8d4, #fcdbbc)',
                boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.4)',
              }}>
          <Grid container>
            {/* Member details on the left */}
            <Grid item xs={12} md={8}>
              <CardContent sx={{ justifyContent: 'center', padding: '22px' }}>
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
                  {name}
                </Typography>
                <Typography
                  color={membershipStatus === 'Active' ? 'success.main' : 'error.main'}
                  sx={{ marginBottom: '8px', fontWeight: 'bold' }}
                >{`${role} | ${membershipStatus}`}</Typography>
                <Typography color="text.primary" sx={{ marginBottom: '8px' }}>{`${association}`}</Typography>
                <Typography color="text.primary" sx={{ marginBottom: '8px' }}>{`Contact Info: ${contactInfo}`}</Typography>
                <Typography color="text.primary" sx={{ marginBottom: '8px' }}>{`Address: ${address}`}</Typography>
                <Typography color="text.primary" sx={{ marginBottom: '8px' }}>{`Date of Joining: ${dateOfJoining}`}</Typography>
                {membershipStatus === 'Inactive' && (
                  <Typography color="text.primary" sx={{ marginBottom: '8px' }}>{`Date of Cancellation: ${dateOfCancellation}`}</Typography>
                )}
              </CardContent>
            </Grid>
            {/* Image on the right */}
            <Grid item xs={12} md={4} sx={{ padding: '20px' }}>
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
    </Box>
  );
};

export default MemberDetails;
