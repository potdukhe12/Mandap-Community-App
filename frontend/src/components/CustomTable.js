import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Tooltip } from '@mui/material';
import { Edit as EditIcon, Visibility as VisibilityIcon, Delete as DeleteIcon } from '@mui/icons-material';
import styled from 'styled-components';

const CustomTable = ({ associations, onEdit, onView, onDelete }) => {
  return (
    <CustomTableContainer>
      <Table style={{ borderCollapse: 'separate', cursor: 'pointer' }}>
        <TableHeadStyled>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell style={{ minWidth: '240px' }}>Name</TableCell>
            <TableCell style={{ minWidth: '240px' }}>Address</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Pincode</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Members</TableCell>
            <TableCell style={{ textAlign: 'center', minWidth: '140px' }}>Creation Day</TableCell>
            <TableCell style={{ textAlign: 'center', minWidth: '155px' }}>Actions</TableCell>
          </TableRow>
        </TableHeadStyled>
        <TableBody>
          {associations.map((association) => (
            <TableRowStyled
              key={association.id}
              onClick={() => onView(association.id)}
            >
              <TableCell>{association.id}</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>{association.name}</TableCell>
              <TableCell>{association.address}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{association.pincode}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{association.totalMembers}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{association.dateOfCreation}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>
                <IconButton onClick={() => onEdit(association.id)}>
                  <Tooltip title="Edit">
                    <EditIcon />
                  </Tooltip>
                </IconButton>
                <IconButton onClick={() => onView(association.id)}>
                  <Tooltip title="View">
                    <VisibilityIcon />
                  </Tooltip>
                </IconButton>
                <IconButton onClick={() => onDelete(association.id)}>
                  <Tooltip title="Delete">
                    <DeleteIcon color="error" />
                  </Tooltip>
                </IconButton>
              </TableCell>
            </TableRowStyled>
          ))}
        </TableBody>
      </Table>
    </CustomTableContainer>
  );
};

export default CustomTable;

const CustomTableContainer = styled(TableContainer)`
  border: 2px solid #000;
  border-radius: 14px 14px 0px 14px;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.5);
  max-height: 470px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 6px;
    margin-top: 70px;
    margin-bottom: 20px;
    margin-inline: 20px;
    border-radius: 6px;
  }
`;

const TableHeadStyled = styled(TableHead)`
  & .MuiTableCell-root {
    font-weight: bold;
    font-size: 1.05rem;
    color: white;
  }

  border-bottom: 3px solid #000;
  background-color: #b3600a;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const TableRowStyled = styled(TableRow)`
  & .MuiTableCell-root {
    font-size: 1rem;
  }

  border-bottom: 1px solid #000;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(to bottom, #fef5ec, #fde8d4);
  }
`;