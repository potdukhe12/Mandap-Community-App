import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Grid,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
} from '@mui/material';

const AddMainBod = () => {
  const [mainBodData, setMainBodData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    birthdate: '',
    anniversaryDate: '',
    state: '',
    city: '',
    // Add more fields as needed
  });

  const handleChange = (field) => (e) => {
    setMainBodData({
      ...mainBodData,
      [field]: e.target.value,
    });
  };

  const handleSave = () => {
    // Implement your save logic here
    console.log('Main BOD data to be saved:', mainBodData);
    // Reset form fields after saving
    setMainBodData({
      name: '',
      email: '',
      mobile: '',
      address: '',
      birthdate: '',
      anniversaryDate: '',
      state: '',
      city: '',
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Card
        elevation={6}
        sx={{
          maxWidth: '650px',
          minHeight: '400px',
          background: 'linear-gradient(to bottom, #fcdbbc, #fef5ec)',
          borderRadius: '30px',
          padding: '26px 26px',
          marginBottom: '50px',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                display: 'flex',
                overflow: 'hidden',
                marginBottom: '10px',
              }}
            >
              <Typography sx={{ borderBottom: '2px solid #000', fontSize: '26px' }}>
                Add New Main B.O.D. :
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                padding: '0px 20px 10px 20px',
                borderRadius: '20px',
                background: 'white',
              }}
            >
              <TextField
                label="Member Name"
                variant="standard" // Use standard variant
                fullWidth
                value={mainBodData.name}
                onChange={handleChange('name')}
                required
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '0px 20px 10px 20px',
                borderRadius: '20px',
                background: 'white',
              }}
            >
              <TextField
                label="Email"
                variant="standard" // Use standard variant
                fullWidth
                value={mainBodData.email}
                onChange={handleChange('email')}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '0px 20px 10px 20px',
                borderRadius: '20px',
                background: 'white',
              }}
            >
              <TextField
                label="Mobile"
                variant="standard" // Use standard variant
                fullWidth
                value={mainBodData.mobile}
                onChange={handleChange('mobile')}
                required
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '0px 20px 10px 20px',
                borderRadius: '20px',
                background: 'white',
              }}
            >
              <TextField
                label="Birthdate"
                variant="standard" // Use standard variant
                fullWidth
                InputLabelProps={{ shrink: true }} // Ensure that the label doesn't overlap
                type="date"
                value={mainBodData.birthdate}
                onChange={handleChange('birthdate')}
                required
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '0px 20px 10px 20px',
                borderRadius: '20px',
                background: 'white',
              }}
            >
              <TextField
                label="Anniversary Date"
                variant="standard" // Use standard variant
                fullWidth
                InputLabelProps={{ shrink: true }} // Ensure that the label doesn't overlap
                type="date"
                value={mainBodData.anniversaryDate}
                onChange={handleChange('anniversaryDate')}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '0px 20px 10px 20px',
                borderRadius: '20px',
                background: 'white',
              }}
            >
              <FormControl variant="standard" fullWidth required>
                <InputLabel htmlFor="state-select">Select State</InputLabel>
                <Select
                  id="state-select"
                  value={mainBodData.state}
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
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                padding: '0px 20px 10px 20px',
                borderRadius: '20px',
                background: 'white',
              }}
            >
              <FormControl variant="standard" fullWidth required>
                <InputLabel htmlFor="city-select">Select City</InputLabel>
                <Select
                  id="city-select"
                  value={mainBodData.city}
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
            <Box
              sx={{
                padding: '2px 20px 8px 20px',
                borderRadius: '20px',
                background: 'white',
                marginBottom: '10px',
              }}
            >
              <TextField
                label="Address"
                variant="standard" // Use standard variant
                fullWidth
                value={mainBodData.address}
                onChange={handleChange('address')}
              />
            </Box>
          </Grid>
          {/* Add more fields as needed */}
          <Grid item container xs={12} sx={{ justifyContent: 'flex-end' }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleSave}
              sx={{ borderRadius: '50px' }}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AddMainBod;
