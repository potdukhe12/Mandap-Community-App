import React from 'react';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomList = ({
  to,
  onClick,
  icon,
  primaryText,
  isActive,
}) => {
  return (
    <ListItemButton
      component={Link}
      to={to}
      onClick={onClick}
      sx={{
        background: isActive
          ? 'linear-gradient(to top, #fad5ae, #fef2e6)'
          : 'inherit',
          borderLeft: isActive ? '4px solid #b3600a' : 'none',
          paddingLeft: '20px',
      }}
    >
      <ListItemIcon>
        {React.cloneElement(icon, {
          style: {
            color: isActive ? '#b3600a' : 'inherit',
            fontSize: '26',
          },
        })}
      </ListItemIcon>
      <ListItemText
        primary={primaryText}
        primaryTypographyProps={{
          style: {
            color: isActive ? '#b3600a' : 'inherit',
            fontWeight: isActive ? 'bold' : 'normal',
          },
        }}
      />
    </ListItemButton>
  );
};

export default CustomList;
