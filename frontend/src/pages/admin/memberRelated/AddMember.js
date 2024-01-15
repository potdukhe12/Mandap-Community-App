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

const associationsData = [
    {
      id: 1,
      name: 'Sky-High Association',
    },
    {
      id: 2,
      name: 'Green Oasis Association',
    },
    {
      id: 3,
      name: 'Silver Summit Association',
    },
    {
      id: 4,
      name: 'Royal Heights Association',
    },
    {
      id: 5,
      name: "Nature's Haven Association",
    },
    {
      id: 6,
      name: 'Fitness Fusion Association',
    },
    {
      id: 7,
      name: 'Sunset Serenity Association',
    },
    {
      id: 8,
      name: 'Harmony Haven Association',
    },
    {
      id: 9,
      name: 'Golden Grove Association',
    },
    {
      id: 10,
      name: 'Emerald Enclave Association',
    },
    {
      id: 11,
      name: 'Mystic Meadows Association',
    },
  ];

const AddMember = () => {
  const [memberData, setMemberData] = useState({
    name: '',
    association: '',
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
    setMemberData({
      ...memberData,
      [field]: e.target.value,
    });
  };

  const handleSave = () => {
    // Implement your save logic here
    console.log('Member data to be saved:', memberData);
    // Reset form fields after saving
    setMemberData({
      name: '',
      association: '',
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
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Card elevation={6} 
        sx={{ 
            maxWidth: '650px', 
            minHeight: '250px', 
            background: 'linear-gradient(to bottom, #fcdbbc, #fef5ec)', 
            borderRadius: '30px',
            padding: '26px 26px',
            marginBottom: '50px'  }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                display: 'flex',
                overflow: 'hidden',
                marginBottom: '10px',
              }}
            >
              <Typography sx={{ borderBottom: '2px solid #000', fontSize: '26px' }}>
                Add New Member:
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <TextField
                label="Member Name"
                variant="standard" // Use standard variant
                fullWidth
                value={memberData.name}
                onChange={handleChange('name')}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="association-select">Select Association</InputLabel>
              <Select
                id="association-select"
                value={memberData.association}
                onChange={handleChange('association')}
                label="Select Association"
              >
                <MenuItem value="" disabled>
                  Select Association
                </MenuItem>
                {associationsData.map((association) => (
                  <MenuItem key={association.id} value={association.name}>
                    {association.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <TextField
                label="Email"
                variant="standard" // Use standard variant
                fullWidth
                value={memberData.email}
                onChange={handleChange('email')}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <TextField
                label="Mobile"
                variant="standard" // Use standard variant
                fullWidth
                value={memberData.mobile}
                onChange={handleChange('mobile')}
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
              <TextField
                label="Birthdate"
                variant="standard" // Use standard variant
                fullWidth
                InputLabelProps={{ shrink: true }} // Ensure that the label doesn't overlap
                type="date"
                value={memberData.birthdate}
                onChange={handleChange('birthdate')}
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
              <TextField
                label="Anniversary Date"
                variant="standard" // Use standard variant
                fullWidth
                InputLabelProps={{ shrink: true }} // Ensure that the label doesn't overlap
                type="date"
                value={memberData.anniversaryDate}
                onChange={handleChange('anniversaryDate')}
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
                  value={memberData.state}
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
                  value={memberData.city}
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
            <Box sx={{padding: '2px 20px 8px 20px',borderRadius: '20px', background: 'white', marginBottom: '15px' }}>
              <TextField
                label="Address"
                variant="standard" // Use standard variant
                fullWidth
                value={memberData.address}
                onChange={handleChange('address')}
              />
            </Box>
          </Grid>
          {/* Add more fields as needed */}
          <Grid item container xs={12} sx={{ justifyContent: 'flex-end' }}>
            <Button fullWidth variant="contained" color="primary" onClick={handleSave} sx={{borderRadius: '50px'}}>
              Save
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default AddMember;
