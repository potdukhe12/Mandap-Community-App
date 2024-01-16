import React, { useState, useEffect } from 'react';
import {
  Box, IconButton, Button, Tooltip, Grid, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from 'react-router-dom';
// import { getAllNotices } from '../../../redux/noticeRelated/noticeHandle';
import { deleteUser } from '../../../redux/userRelated/userHandle';
// import { useDispatch, useSelector } from 'react-redux';
import NoticeTile2 from '../../../components/NoticeTile2';

// Define your static notices data here
const staticNotices = [
  {
    _id: '659d3073423c9d202cb62eab',
    title: "Important Notice",
    details: 'This is an important notice with some details.',
    date: '2024-02-15T00:00:00.000+00:00',
    school: '6548ce9221537dc7019bcba0',
    createdAt: '2024-01-09T11:39:31.549+00:00',
    updatedAt: '2024-01-09T11:39:31.549+00:00',
  },
  {
    _id: '659d3073423c9d202cb62eax',
    title: "Urgent Notice",
    details: 'This is an urgent notice with some details.',
    date: '2024-02-20T00:00:00.000+00:00',
    school: '6548ce9221537dc7019bcba0',
    createdAt: '2024-01-09T11:39:31.549+00:00',
    updatedAt: '2024-01-09T11:39:31.549+00:00',
  },
  // Add more static notices as needed
];

const ShowNotices = () => {
  const navigate = useNavigate();
  
  // const dispatch = useDispatch();

  // Replace eventsList with staticEvents
  const noticesList = staticNotices;

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [noticeToDelete, setNoticeToDelete] = useState(null);

  // useEffect(() => {
  //   dispatch(getAllNotices(currentUser._id, "Notice"));
  // }, [currentUser._id, dispatch]);

  // if (error) {
  //   console.log(error);
  // }

  const handleDeleteDialogOpen = (noticeId) => {
    setNoticeToDelete(noticeId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setNoticeToDelete(null);
    setDeleteDialogOpen(false);
  };

  const handleDeleteNotice = () => {
    if (noticeToDelete) {
      dispatch(deleteUser(noticeToDelete, "Notice"))
        .then(() => {
          dispatch(getAllNotices(currentUser._id, "Notice"));
          handleDeleteDialogClose();
        });
    }
  };


    const deleteHandler = (deleteID, address) => {
        dispatch(deleteUser(deleteID, address))
            .then(() => {
                dispatch(getAllNotices(currentUser._id, "Notice"));
            })
    }

    const noticeColumns = [
        { id: 'title', label: 'Title', minWidth: 120 },
        { id: 'details', label: 'Details', minWidth: 150 },
        { id: 'date', label: 'Date', minWidth: 170, align: 'center' },
    ];

    const noticeRows = noticesList && noticesList.length > 0 && noticesList.map((notice) => {
        const date = new Date(notice.date);
        const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
        return {
            title: notice.title,
            details: notice.details,
            date: dateString,
            id: notice._id,
        };
    });

    const sortedNoticeRows = noticeRows && noticeRows.length > 0
    ? noticeRows.slice().sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        const currentDate = new Date();

        // Check if notices are today
        const isTodayA = dateA.toDateString() === currentDate.toDateString();
        const isTodayB = dateB.toDateString() === currentDate.toDateString();

        // Check if notices are tomorrow
        const isTomorrowA = new Date(dateA.getTime() + 86400000).toDateString() === new Date(currentDate.getTime() + 86400000).toDateString();
        const isTomorrowB = new Date(dateB.getTime() + 86400000).toDateString() === new Date(currentDate.getTime() + 86400000).toDateString();

        // Check if notices are expired
        const isExpiredA = dateA < currentDate;
        const isExpiredB = dateB < currentDate;

        // Sort by Today, Tomorrow, Upcoming, and then Expired
        if (isTodayA && !isTodayB) return -1;
        if (!isTodayA && isTodayB) return 1;

        if (isTomorrowA && !isTomorrowB) return -1;
        if (!isTomorrowA && isTomorrowB) return 1;

        if (!isExpiredA && isExpiredB) return -1;
        if (isExpiredA && !isExpiredB) return 1;

        // If both are in the same category, sort by date
        if (dateA < dateB) return -1;
        if (dateA > dateB) return 1;

        return 0;
      })
    : [];

    const NoticeButtonHaver = ({ row }) => {
        return (
          <>
            <Tooltip title="Delete">
              <IconButton onClick={() => handleDeleteDialogOpen(row.id)}>
                <DeleteIcon sx={{ fontSize: '1em' }} color="white" />
              </IconButton>
            </Tooltip>
          </>
        );
      };

    return (
        <>
            {/* {loading ?
                <div>Loading...</div>
                : */}
                <>
                  <Box sx={{ width: '100%', overflow: 'hidden' }}>
                      <Grid container spacing={2}>
                          {Array.isArray(sortedNoticeRows) && sortedNoticeRows.length > 0 && (
                              <NoticeTile2 buttonHaver={NoticeButtonHaver} columns={noticeColumns} rows={sortedNoticeRows} />
                          )}
                      </Grid>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: '16px' }}>
                      <Button variant="contained" onClick={() => navigate("/Admin/addnotice")}>
                          <NoteAddIcon sx={{ marginRight: '5px' }} />
                          Add New Notice
                      </Button>
                      {/* {!response && ( */}
                        <Button
                          variant="contained"
                          color="error"
                          sx={{ marginLeft: "12px" }}
                          onClick={() => deleteHandler(currentUser._id, "Notices")}
                        >
                          <DeleteIcon sx={{ marginRight: '5px' }} />
                          Delete All Notices
                        </Button>
                      {/* )} */}
                  </Box>

                  <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
                      <DialogTitle>Confirm Delete</DialogTitle>
                      <DialogContent>
                          Are you sure you want to delete this notice?
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={handleDeleteDialogClose} color="primary">
                              Cancel
                          </Button>
                          <Button onClick={handleDeleteNotice} color="error">
                              Delete
                          </Button>
                      </DialogActions>
                  </Dialog>
                </>
            {/* } */}
        </>
    );
};

export default ShowNotices;
