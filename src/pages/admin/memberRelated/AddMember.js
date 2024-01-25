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

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

const associationsData = [
    { id: 1, name: 'Sky-High Association' },
    { id: 2, name: 'Green Oasis Association' },
    { id: 3, name: 'Silver Summit Association' },
    { id: 4, name: 'Royal Heights Association' },
    { id: 5, name: "Nature's Haven Association" },
    { id: 6, name: 'Fitness Fusion Association' },
    { id: 7, name: 'Sunset Serenity Association' },
    { id: 8, name: 'Harmony Haven Association' },
    { id: 9, name: 'Golden Grove Association' },
    { id: 10, name: 'Emerald Enclave Association' },
    { id: 11, name: 'Mystic Meadows Association' },
  ];

const AddMember = () => {
  const [memberData, setMemberData] = useState({
    name: '',
    association: '',
    email: '',
    mobile: '',
    aadhaar: '',
    pancard: '',
    blood_group: '',
    image_link: '',
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
      aadhaar: '',
      pancard: '',
      blood_group: '',
      image_link: '',
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
      justifyContent: 'center',
      padding: '14px 26px',
    }}>
      <Card elevation={6} 
        sx={{ 
            // maxWidth: '650px', 
            minHeight: '250px', 
            background: 'linear-gradient(to bottom, #fcdbbc, #fef5ec)', 
            borderRadius: '30px',
            padding: '26px 26px',
            marginBottom: '50px'  }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Box
              sx={{
                display: 'flex',
                overflow: 'hidden',
                marginBottom: '0px',
              }}
            >
              <Typography sx={{ borderBottom: '2px solid #000', fontSize: '26px' }}>
                Add New Member:
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} xl={8}>
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
          <Grid item xs={12} md={6} xl={4}>
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
          <Grid item xs={12} md={6} xl={4}>
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
          <Grid item xs={12} md={6} xl={4}>
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
          <Grid item xs={12} md={6} xl={4}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <TextField
                label="Aadhaar Number"
                variant="standard" // Use standard variant
                fullWidth
                value={memberData.aadhaar}
                onChange={handleChange('aadhaar')}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6} xl={4}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <TextField
                label="Pancard Number"
                variant="standard" // Use standard variant
                fullWidth
                value={memberData.pancard}
                onChange={handleChange('pancard')}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={6} xl={4}>
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
          <Grid item xs={6} md={6} xl={4}>
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
          <Grid item xs={12} md={6} xl={4}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <TextField
                label="Profile Image Link"
                variant="standard" // Use standard variant
                fullWidth
                value={memberData.image_link}
                onChange={handleChange('image_link')}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} xl={2}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="blood-group-select">Blood Group</InputLabel>
                <Select
                  id="blood-group-select"
                  value={memberData.blood_group}
                  onChange={handleChange('blood_group')}
                  label="Blood Group"
                >
                  <MenuItem value="" disabled>
                    Select Blood Group
                  </MenuItem>
                  {bloodGroups.map((group) => (
                    <MenuItem key={group} value={group}>
                      {group}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} xl={2}>
            <Box sx={{padding: '0px 20px 10px 20px',borderRadius: '20px', background: 'white',}}>
              <TextField
                label="Pincode"
                variant="standard" // Use standard variant
                fullWidth
                value={memberData.image_link}
                onChange={handleChange('image_link')}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={6} xl={4}>
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
          <Grid item xs={6} md={6} xl={4}>
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
          <Grid item xs={12} md={12} xl={8}>
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
