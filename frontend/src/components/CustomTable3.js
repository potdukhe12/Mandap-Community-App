// CustomTable3.js
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import { Edit as EditIcon, Visibility as VisibilityIcon, Delete as DeleteIcon } from '@mui/icons-material';
import styled from 'styled-components';

const CustomTable3 = ({ mainBOD, onRowClick, onEdit, onView, onDelete }) => {
  
    const [confirmationDialog, setConfirmationDialog] = useState({
        open: false,
        memberId: null,
        newMemberData: null,
      });
    
      const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
          case 'active':
            return 'green';
          case 'pending':
            return 'blue';
          case 'rejected':
            return 'red';
          default:
            return 'inherit';
        }
      };
    
      const handleEdit = (id, newMemberData) => {
        setConfirmationDialog({
          open: true,
          memberId: id,
          newMemberData,
        });
      };
    
      const handleConfirmEdit = () => {
        onEdit(confirmationDialog.memberId, confirmationDialog.newMemberData);
        setConfirmationDialog({
          open: false,
          memberId: null,
          newMemberData: null,
        });
      };
    
      const handleCancelEdit = () => {
        setConfirmationDialog({
          open: false,
          memberId: null,
          newMemberData: null,
        });
      };
    
      const handleDelete = (id) => {
        setConfirmationDialog({
          open: true,
          memberId: id,
          newMemberData: null,
        });
      };
    
      const handleConfirmDelete = () => {
        // onDelete(confirmationDialog.memberId);
        setConfirmationDialog({
          open: false,
          memberId: null,
          newMemberData: null,
        });
      };
    
      const handleCancelDelete = () => {
        setConfirmationDialog({
          open: false,
          memberId: null,
          newMemberData: null,
        });
      };

  return (
    <CustomTableContainer>
      <Table style={{ borderCollapse: 'separate', cursor: 'pointer' }}>
        <TableHeadStyled>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell style={{ minWidth: '240px' }}>Name</TableCell>
            <TableCell style={{ textAlign: 'center', minWidth: '110px' }}>Role</TableCell>
            <TableCell style={{ textAlign: 'center' }}>Status</TableCell>
            <TableCell style={{  }}>Address</TableCell>
            <TableCell style={{ minWidth: '140px', textAlign: 'center' }}>Joining Date</TableCell>
            <TableCell style={{ textAlign: 'center', minWidth: '140px' }}>Actions</TableCell>
          </TableRow>
        </TableHeadStyled>
        <TableBody>
          {mainBOD.map((member) => (
            <TableRowStyled key={member.id}>
              <TableCell>{member.id}</TableCell>
              <TableCell
                style={{ fontWeight: 'bold' }}
                onClick={() => onRowClick(member)}
              >
                {member.name}
              </TableCell>
              <TableCell style={{ textAlign: 'center' }}>{member.role}</TableCell>
              <TableCell
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  color: getStatusColor(member.status),
                }}
              >
                <Select
                  value={member.status}
                  size="small"
                  fullWidth
                  onChange={(e) => handleEdit(member.id, { ...member, status: e.target.value })}
                  style={{
                    minWidth: '100px',
                    fontWeight: 'bold',
                    color: getStatusColor(member.status),
                  }}
                >
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                </Select>
              </TableCell>
              <TableCell style={{ minWidth: '240px' }}>{member.address}</TableCell>
              <TableCell style={{ textAlign: 'center' }}>{member.dateOfJoining}</TableCell>
              <TableCell style={{ textAlign: 'center', minWidth: '176px' }}>
                <IconButton onClick={() => onEdit(member.id)}>
                  <Tooltip title="Edit">
                    <EditIcon />
                  </Tooltip>
                </IconButton>
                <IconButton onClick={() => onView(member.id)}>
                  <Tooltip title="View">
                    <VisibilityIcon />
                  </Tooltip>
                </IconButton>
                <IconButton onClick={() => handleDelete(member.id)}>
                  <Tooltip title="Delete">
                    <DeleteIcon color="error" />
                  </Tooltip>
                </IconButton>
              </TableCell>
            </TableRowStyled>
          ))}
        </TableBody>
      </Table>

      {/* Confirmation dialog */}
      <Dialog open={confirmationDialog.open} onClose={handleCancelEdit}>
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          Are you sure you want to perform this action?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </CustomTableContainer>
  );
};

export default CustomTable3;

const CustomTableContainer = styled(TableContainer)`
  border: 2px solid #000;
  border-radius: 14px 14px 0px 14px;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.5);
  max-height: 430px;
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

