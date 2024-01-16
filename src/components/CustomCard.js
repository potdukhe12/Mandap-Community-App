import React from 'react';
import { Card, CardContent, Typography, IconButton, ListItemAvatar, Avatar, CardActions } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';

const AssociationCard = ({ association, onEdit, onView, onDelete }) => {
  return (
    <Card
      sx={{
        background: 'linear-gradient(to bottom, #fcdbbc, #fef5ec)',
        marginBottom: '10px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        minHeight: '120px',
        paddingLeft: '16px',
        transition: 'background 0.3s ease,box-shadow 0.3s ease',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          background: 'linear-gradient(to bottom, #fef5ec, #fde8d4)',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          transition: 'background 0.3s ease,box-shadow 0.3s ease',
        },
      }}
    >
      <ListItemAvatar>
        <Avatar alt="Association Image">{association.name[0]}</Avatar>
      </ListItemAvatar>
      <CardContent>
        <Typography variant="h6" component="div">
          {association.name}
        </Typography>
        <Typography color="text.secondary">{`Pincode: ${association.pincode}`}</Typography>
      </CardContent>
      <CardActions sx={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={() => onEdit(association.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onView(association.id)}>
          <VisibilityIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(association.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default AssociationCard;
