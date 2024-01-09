import React from 'react';
import { Typography, Card, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Paper, CardMedia, Box } from '@mui/material';
import Img from '../../../assets/profileImg.jpg';

const AssociationPresidentCard = ({ association }) => {
  const {
    name,
    mobile,
    email,
    position,
    association: associationName,
    classification,
    address,
    birthDate,
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
                  <TableCell>{name}</TableCell>
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
                  <TableCell>{position}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Association Name
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{associationName}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row" sx={{ width: '150px' }}>
                    Classification
                  </TableCell>
                  <TableCell sx={{ width: '1px' }}>:</TableCell>
                  <TableCell>{classification}</TableCell>
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
                  <TableCell>{birthDate}</TableCell>
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
