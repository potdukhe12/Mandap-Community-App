import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CardActions,
  ListItemAvatar,
  Avatar,
  TextField,
  Grid,
  Box,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CustomCard from '../../../components/CustomCard';
import CustomTable from '../../../components/CustomTable';

const Association = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
  
    // const handleAssociationClick = (id) => {
    //   navigate(`/Admin/association/${id}`);
    // };

    const handleEdit = (id) => {
      // Handle edit action
      console.log(`Edit association with ID: ${id}`);
    };
  
    const handleView = (id) => {
      // Handle view action
      navigate(`/Admin/association/${id}`);
      console.log(`View association with ID: ${id}`);
    };
  
    const handleDelete = (id) => {
      // Handle delete action
      console.log(`Delete association with ID: ${id}`);
    };
  
    const associationsData = [
      {
        id: 1,
        pincode: '123456',
        name: 'Sky-High Association',
        totalMembers: 100,
        address: 'Community Hall, 123 Main Street, Cityville',
        dateOfCreation: '2022-01-01',
      },
      {
        id: 2,
        pincode: '789012',
        name: 'Green Oasis Association',
        totalMembers: 150,
        address: 'Clubhouse, 456 Oak Avenue, Townsville',
        dateOfCreation: '2022-02-15',
      },
      {
        id: 3,
        pincode: '567890',
        name: 'Silver Summit Association',
        totalMembers: 120,
        address: 'Conference Room, 789 Pine Road, Villageland',
        dateOfCreation: '2022-03-20',
      },
      {
        id: 4,
        pincode: '456789',
        name: 'Royal Heights Association',
        totalMembers: 80,
        address: 'Auditorium, 101 Maple Street, Hamlet City',
        dateOfCreation: '2022-04-10',
      },
      {
        id: 5,
        pincode: '234567',
        name: "Nature's Haven Association",
        totalMembers: 200,
        address: 'Outdoor Park, 555 Forest Lane, Greenburg',
        dateOfCreation: '2022-05-05',
      },
      {
        id: 6,
        pincode: '345678',
        name: 'Fitness Fusion Association',
        totalMembers: 90,
        address: 'Gymnasium, 777 Fitness Avenue, Workout City',
        dateOfCreation: '2022-06-30',
      },
      {
        id: 7,
        pincode: '678901',
        name: 'Sunset Serenity Association',
        totalMembers: 180,
        address: 'Community Center, 999 Serene Road, Sunsetville',
        dateOfCreation: '2022-07-18',
      },
      {
        id: 8,
        pincode: '890123',
        name: 'Harmony Haven Association',
        totalMembers: 130,
        address: 'Music Room, 333 Melody Street, Harmonytown',
        dateOfCreation: '2022-08-22',
      },
      {
        id: 9,
        pincode: '901234',
        name: 'Golden Grove Association',
        totalMembers: 160,
        address: 'Garden Pavilion, 222 Bloom Lane, Goldenville',
        dateOfCreation: '2022-09-12',
      },
      {
        id: 10,
        pincode: '123789',
        name: 'Emerald Enclave Association',
        totalMembers: 110,
        address: 'Nature Preserve, 444 Evergreen Road, Emerald City',
        dateOfCreation: '2022-10-05',
      },
      {
        id: 11,
        pincode: '456012',
        name: 'Mystic Meadows Association',
        totalMembers: 90,
        address: 'Meditation Room, 666 Tranquil Street, Mysticville',
        dateOfCreation: '2022-11-15',
      },
      // Add more associations as needed
    ];

    const filteredAssociations = associationsData.filter((association) =>
        association.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    );
  
    return (
      <div>
        <Grid container spacing={2} sx={{padding: '0 10px'}}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <Typography sx={{ borderBottom: '2px solid #000',
                                fontSize: '26px' }} >
                List of Associations:
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <TextField
                label="Search Associations"
                variant="outlined"
                style={{ 
                    marginBottom: '20px',
                    alignItems: 'center', 
                }}
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            </Grid>
          </Grid>
          {/* <Grid container spacing={2} sx={{padding: '0 10px 0 10px'}}>
            {filteredAssociations.map((association) => (
              <Grid item xs={12} md={6} lg={4} key={association.id}>
                <CustomCard
                  association={association}
                  handleAssociationClick={handleAssociationClick}
                />
              </Grid>
            ))}
          </Grid> */}
          <Grid container spacing={2} sx={{padding: '20px 10px 50px 20px'}}>
            <CustomTable
              associations={filteredAssociations}
              onEdit={handleEdit}
              onView={handleView}
              onDelete={handleDelete}
              sx={{ marginBottom: '50px' }}
            />
          </Grid>
        </div>
      );
    };
    
    
  export default Association;
  