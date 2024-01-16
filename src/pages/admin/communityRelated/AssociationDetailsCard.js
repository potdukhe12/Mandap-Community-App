// AssociationDetailsCard.js
import React from 'react';
import { Card, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper, CardMedia, Box } from '@mui/material';
import Img from '../../../assets/asoctn.jpg';

const AssociationDetailsCard = ({ association }) => {
  const {
    name,
    pincode,
    totalMembers,
    address,
    dateOfCreation,
    state,
    city,
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
                    Address
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Creation Day
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{dateOfCreation}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    State
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{state}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    City
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{city}</TableCell>
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
