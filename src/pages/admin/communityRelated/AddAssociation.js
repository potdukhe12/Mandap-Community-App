import React, { useState } from 'react';
import { Typography, TextField, Button, Grid, Box, Card, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const AddAssociation = () => {
  const [associationData, setAssociationData] = useState({
    name: '',
    pincode: '',
    address: '',
    state: '',
    city: '',
    // Add more fields as needed
  });

  const handleChange = (field) => (e) => {
    setAssociationData({
      ...associationData,
      [field]: e.target.value,
    });
  };

  const handleSave = () => {
    // Implement your save logic here
    console.log('Association data to be saved:', associationData);
    // Reset form fields after saving
    setAssociationData({
      name: '',
      pincode: '',
      address: '',
      state: '',
      city: '',
    });
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '50px',
    }}>
      <Card elevation={6} 
        sx={{ 
            maxWidth: '650px', 
            minHeight: '200px', 
            background: 'linear-gradient(to bottom, #fcdbbc, #fef5ec)', 
            borderRadius: '30px',
            padding: '26px 26px',
            marginBottom: '20px'  }}>
        <Box
            sx={{
              display: 'flex',
              overflow: 'hidden',
              marginBottom: '30px',
            }}
          >
          <Typography sx={{ borderBottom: '2px solid #000', fontSize: '26px' }}>
            Add New Association:
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <TextField
                label="Association Name"
                variant="standard" // Use standard variant
                fullWidth
                value={associationData.name}
                onChange={handleChange('name')}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
          <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <TextField
                label="Pincode"
                variant="standard" // Use standard variant
                fullWidth
                value={associationData.pincode}
                onChange={handleChange('pincode')}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                padding: '0px 15px 10px 15px',
                borderRadius: '20px',
                background: 'white',
              }}
            >
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="state-select">Select State</InputLabel>
                <Select
                  id="state-select"
                  value={associationData.state}
                  onChange={handleChange('state')}
                  label="Select State"
                >
                  <MenuItem value="" disabled>
                    Select State
                  </MenuItem>
                  {/* Add your state options here */}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={6} md={6}>
            <Box
              sx={{
                padding: '0px 15px 10px 15px',
                borderRadius: '20px',
                background: 'white',
              }}
            >
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="city-select">Select City</InputLabel>
                <Select
                  id="city-select"
                  value={associationData.city}
                  onChange={handleChange('city')}
                  label="Select City"
                >
                  <MenuItem value="" disabled>
                    Select City
                  </MenuItem>
                  {/* Add your city options here */}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{padding: '2px 20px 8px 20px',borderRadius: '20px', background: 'white', marginBottom: '20px' }}>
              <TextField
                label="Address"
                variant="standard" // Use standard variant
                fullWidth
                value={associationData.address}
                onChange={handleChange('address')}
              />
            </Box>
          </Grid>
          {/* Add more fields as needed */}
          <Grid item xs={12}>
            <Button variant="contained" fullWidth color="primary" onClick={handleSave} sx={{borderRadius: '50px'}}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AddAssociation;
