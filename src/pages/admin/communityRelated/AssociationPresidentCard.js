import React from 'react';
import { Typography, Card, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper, CardMedia, Box } from '@mui/material';
import Img from '../../../assets/profileImg.jpg';

const AssociationPresidentCard = ({ association }) => {
  const {
    name= 'Michael Johnson',
    role= 'President',
    status= 'Active',
    email= 'michaeljohnson@example.com',
    mobile= '3456789012',
    address= '789 Mountain Rd, Summitville, State, 45678',
    dateOfJoining= '2022-04-10',
    state= 'State1',
    city= 'City1',
    birthdate= '1990-01-01',
    anniversaryDate= '2020-01-01',
  } = association;

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
    <Card elevation={3} sx={{ maxWidth: '800px', minHeight: '300px', background: 'linear-gradient(to bottom, #fcdbbc, #fef5ec)', borderRadius: '30px' }}>
      <Grid container spacing={3} sx={{ padding: '26px' }}>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            alt={`${name}'s Image`}
            src={Img}
            sx={{ objectFit: 'cover', borderRadius: '20px', }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TableContainer component={Paper} sx={{ borderRadius: '20px' }}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Name
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>Michael Johnson</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Mobile
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{mobile}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Email
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Position
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{role}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Address
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Birth Date
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{birthdate}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Card>
    </Box>
  );
};

export default AssociationPresidentCard;
