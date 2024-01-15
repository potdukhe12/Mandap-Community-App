// AssociationDetailsCard.js
import React from 'react';
import { Card, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper, CardMedia, Box } from '@mui/material';
import Img from '../../../assets/asoctn.jpg';

const AssociationDetailsCard = ({ association }) => {
  const {
    name,
    pincode,
    totalMembers,
    meetingVenue,
    meetingDay,
    meetingTime,
  } = association;

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
    <Card elevation={6} sx={{ maxWidth: '800px', minHeight: '250px', background: 'linear-gradient(to bottom, #fcdbbc, #fef5ec)', borderRadius: '30px', }}>
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
                    Pincode
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{pincode}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Total Members
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{totalMembers}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Meeting Venue
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{meetingVenue}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Meeting Day
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{meetingDay}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Meeting Time
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{meetingTime}</TableCell>
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

export default AssociationDetailsCard;
