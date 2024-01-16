import React, { useState, useEffect } from 'react';
import {
  Box, IconButton, Button, Tooltip, Grid, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from 'react-router-dom';
import { deleteUser } from '../../../redux/userRelated/userHandle';
import NoticeTile2 from '../../../components/NoticeTile2';

// Define your static events data here
const staticEvents = [
  {
    _id: '659d309b423c9d202cb62eaf',
    title: 'Cultural Event',
    details: 'A listener indicated an asynchronous response by returning true...',
    date: '2024-03-11T00:00:00.000+00:00',
    school: '6548ce9221537dc7019bcba0',
    createdAt: '2024-01-09T11:40:11.697+00:00',
    updatedAt: '2024-01-09T11:40:11.697+00:00',
  },
  {
    _id: '659d309b423c9d202cb62eag',
    title: 'New Event',
    details: 'A listener indicated an asynchronous response by returning true...',
    date: '2024-02-11T00:00:00.000+00:00',
    school: '6548ce9221537dc7019bcba0',
    createdAt: '2024-01-09T11:40:11.697+00:00',
    updatedAt: '2024-01-09T11:40:11.697+00:00',
  },
  // Add more static events as needed
];

const ShowEvents = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // Replace eventsList with staticEvents
  const eventsList = staticEvents;

  // const { currentUser } = useSelector(state => state.user);

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);

  // useEffect(() => {
  //   // Remove the backend call, since we are using static data
  //   // dispatch(getAllEvents(currentUser._id, "Event"));
  // }, [currentUser._id, dispatch]);

  // if (error) {
  //   console.log(error);
  // }

  const handleDeleteDialogOpen = (eventId) => {
    setEventToDelete(eventId);
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setEventToDelete(null);
    setDeleteDialogOpen(false);
  };

  const handleDeleteEvent = () => {
    if (eventToDelete) {
      dispatch(deleteUser(eventToDelete, "Event"))
        .then(() => {
          dispatch(getAllEvents(currentUser._id, "Event"));
          handleDeleteDialogClose();
        });
    }
  };


    const deleteHandler = (deleteID, address) => {
        dispatch(deleteUser(deleteID, address))
            .then(() => {
                dispatch(getAllEvents(currentUser._id, "Event"));
            })
    }

    const eventColumns = [
        { id: 'title', label: 'Title', minWidth: 120 },
        { id: 'details', label: 'Details', minWidth: 150 },
        { id: 'date', label: 'Date', minWidth: 170, align: 'center' },
    ];

    const eventRows = eventsList && eventsList.length > 0 && eventsList.map((event) => {
        const date = new Date(event.date);
        const dateString = date.toString() !== "Invalid Date" ? date.toISOString().substring(0, 10) : "Invalid Date";
        return {
            title: event.title,
            details: event.details,
            date: dateString,
            id: event._id,
        };
    });

    const sortedEventRows = eventRows && eventRows.length > 0
    ? eventRows.slice().sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        const currentDate = new Date();

        // Check if events are today
        const isTodayA = dateA.toDateString() === currentDate.toDateString();
        const isTodayB = dateB.toDateString() === currentDate.toDateString();

        // Check if events are tomorrow
        const isTomorrowA = new Date(dateA.getTime() + 86400000).toDateString() === new Date(currentDate.getTime() + 86400000).toDateString();
        const isTomorrowB = new Date(dateB.getTime() + 86400000).toDateString() === new Date(currentDate.getTime() + 86400000).toDateString();

        // Check if events are expired
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

    const EventButtonHaver = ({ row }) => {
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
                          {Array.isArray(sortedEventRows) && sortedEventRows.length > 0 && (
                              <NoticeTile2 buttonHaver={EventButtonHaver} columns={eventColumns} rows={sortedEventRows} />
                          )}
                      </Grid>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', margin: '16px' }}>
                      <Button variant="contained" onClick={() => navigate("/Admin/addevent")}>
                          <NoteAddIcon sx={{ marginRight: '5px' }} />
                          Add New Event
                      </Button>
                      {/* {!response && ( */}
                        <Button
                          variant="contained"
                          color="error"
                          sx={{ marginLeft: "12px" }}
                          onClick={() => deleteHandler(currentUser._id, "Events")}
                        >
                          <DeleteIcon sx={{ marginRight: '5px' }} />
                          Delete All Events
                        </Button>
                      {/* )} */}
                  </Box>

                  <Dialog open={deleteDialogOpen} onClose={handleDeleteDialogClose}>
                      <DialogTitle>Confirm Delete</DialogTitle>
                      <DialogContent>
                          Are you sure you want to delete this event?
                      </DialogContent>
                      <DialogActions>
                          <Button onClick={handleDeleteDialogClose} color="primary">
                              Cancel
                          </Button>
                          <Button onClick={handleDeleteEvent} color="error">
                              Delete
                          </Button>
                      </DialogActions>
                  </Dialog>
                </>
            {/* } */}
        </>
    );
};

export default ShowEvents;
