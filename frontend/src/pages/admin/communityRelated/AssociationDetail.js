import React, { useState } from 'react';
import { Typography, Box, Button, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';

import AssociationDetailsCard from './AssociationDetailsCard';
import AssociationSecretaryCard from './AssociationSecretaryCard';
import AssociationPresidentCard from './AssociationPresidentCard';
import Members from '../memberRelated/Members';
import styled from 'styled-components';

const AssociationDetail = () => {
  // Static data for associations
  const staticAssociationsData = [
    {
      id: 1,
      pincode: '123456',
      name: 'Sky-High Association',
      totalMembers: 100,
      meetingVenue: 'Community Hall',
      meetingDay: 'Monday',
      meetingTime: '6:00 PM',
    },
    // Add more associations as needed
  ];

  const { id } = useParams();
  const association = staticAssociationsData.find((assoc) => assoc.id === parseInt(id));

  const [selectedComponent, setSelectedComponent] = useState('details');

  if (!association) {
    return <Typography variant="h5">Association not found</Typography>;
  }

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'details':
        return <AssociationDetailsCard association={association} />;
      case 'members':
        return <Members associationName={association.name} />;
      case 'bod':
        return (
          <Members
            associationName={association.name}
            associationRole="BOD"
          />
        );
      case 'secretary':
        return <AssociationSecretaryCard association={association} />;
      case 'president':
        return <AssociationPresidentCard association={association} />;
      default:
        return null;
    }
  };

  return (
    <StyledBox>
      <Grid container spacing={0}>
        <Grid item xs={12} md={6} sx={{ borderBottom: '2px solid #000' }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {association.name}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sx={{ borderBottom: '2px solid #000', display: 'flex', alignItems: 'center', padding: '5px 0' }}>
          <StyledButton
            color="inherit"
            sx={{
                marginRight: '5px',
                padding: '0 15px',
                '&:hover': {
                    backgroundColor: 'grey',
                    borderRadius: '24px',
                    color: 'white',
                },
              ...(selectedComponent === 'details' && {
                backgroundColor: 'black',
                borderRadius: '24px',
                // borderRadius: '20px 20px 0 0',
                color: 'white',
              }),
            }}
            onClick={() => setSelectedComponent('details')}
          >
            Info
          </StyledButton>
          <StyledButton
            color="inherit"
            sx={{
                marginRight: '5px',
                padding: '0 15px',
                '&:hover': {
                    backgroundColor: 'grey',
                    borderRadius: '24px',
                    color: 'white',
                },
              ...(selectedComponent === 'members' && {
                backgroundColor: 'black',
                borderRadius: '24px',
                // borderRadius: '20px 20px 0 0',
                color: 'white',
              }),
            }}
            onClick={() => setSelectedComponent('members')}
          >
            Members
          </StyledButton>
          <StyledButton
            color="inherit"
            sx={{
                marginRight: '5px',
                padding: '0 15px',
                '&:hover': {
                    backgroundColor: 'grey',
                    borderRadius: '24px',
                    color: 'white',
                },
              ...(selectedComponent === 'bod' && {
                backgroundColor: 'black',
                borderRadius: '24px',
                // borderRadius: '20px 20px 0 0',
                color: 'white',
              }),
            }}
            onClick={() => setSelectedComponent('bod')}
          >
            BOD
          </StyledButton>
          <StyledButton
            color="inherit"
            sx={{
                marginRight: '5px',
                padding: '0 15px',
                '&:hover': {
                    backgroundColor: 'grey',
                    borderRadius: '24px',
                    color: 'white',
                },
              ...(selectedComponent === 'secretary' && {
                backgroundColor: 'black',
                borderRadius: '24px',
                // borderRadius: '20px 20px 0 0',
                color: 'white',
              }),
            }}
            onClick={() => setSelectedComponent('secretary')}
          >
            Secretary
          </StyledButton>
          <StyledButton
            color="inherit"
            sx={{
                marginRight: '5px',
                padding: '0 15px',
                '&:hover': {
                    backgroundColor: 'grey',
                    borderRadius: '24px',
                    color: 'white',
                },
              ...(selectedComponent === 'president' && {
                backgroundColor: 'black',
                borderRadius: '24px',
                // borderRadius: '20px 20px 0 0',
                color: 'white',
              }),
            }}
            onClick={() => setSelectedComponent('president')}
          >
            President
          </StyledButton>
        </Grid>
      </Grid>
      <StyledBoxComponent sx={{ padding: '20px 10px 50px 10px' }}>
        {renderComponent()}
      </StyledBoxComponent>
    </StyledBox>
  );
};

// Styled components for the Box and Button
const StyledBox = styled(Box)`
  paddingInline: 10px;
  paddingBottom: 50px;
`;

const StyledBoxComponent = styled(Box)`
  alignItems: center,
  justifyContent: center,
`;

const StyledButton = styled(Button)`
// marginRight: '10px',
// paddingInline: '20px',
// '&:hover': {
//     backgroundColor: 'black',
//     borderRadius: '24px',
//     color: 'white',
// },
`;

export default AssociationDetail;
