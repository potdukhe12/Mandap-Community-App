import React from 'react';
import NoticeTile2 from './NoticeTile2';
import { Box } from '@mui/material';

const staticNotices = [
  {
    _id: '659d3073423c9d202cb62eab',
    title: "Sam's Birthday",
    details: 'Community Hall',
    date: '2024-02-10T00:00:00.000+00:00',
    school: '6548ce9221537dc7019bcba0',
    createdAt: '2024-01-09T11:39:31.549+00:00',
    updatedAt: '2024-01-09T11:39:31.549+00:00',
  },
  {
    _id: '659d3073423c9d202cb62eax',
    title: "Samer's Birthday",
    details: 'Hall',
    date: '2024-02-05T00:00:00.000+00:00',
    school: '6548ce9221537dc7019bcba0',
    createdAt: '2024-01-09T11:39:31.549+00:00',
    updatedAt: '2024-01-09T11:39:31.549+00:00',
  },
  {
    _id: '659d3073423c9d202cb62day',
    title: "Geeta's Birthday",
    details: 'Garden',
    date: '2024-02-12T00:00:00.000+00:00',
    school: '6548ce9221537dc7019bcba0',
    createdAt: '2024-01-09T11:39:31.549+00:00',
    updatedAt: '2024-01-09T11:39:31.549+00:00',
  },
  // Add more static notices as needed
];

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

const SeeNotice = () => {
  const filteredEvents = staticEvents
    .filter(event => new Date(event.date) >= new Date().setHours(0, 0, 0, 0))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 6);

  const filteredNotices = staticNotices
    .filter(notice => new Date(notice.date) >= new Date().setHours(0, 0, 0, 0))
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .slice(0, 6);

  return (
    <div style={{ marginTop: '20px', marginBottom: '100px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {filteredEvents.length > 0 && (
        <>
          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
              marginBottom: '20px',
              fontSize: '30px',
              borderBottom: '2px solid #000',
            }}
          >
            Upcoming Events
          </Box>
          {filteredEvents.map(event => (
            <NoticeTile2
              key={event._id}
              columns={[
                { id: 'title' },
                { id: 'details' },
                { id: 'date' },
              ]}
              rows={[event]}
            />
          ))}
        </>
      )}
      {filteredNotices.length > 0 && (
        <>
          <Box
            sx={{
              width: '100%',
              overflow: 'hidden',
              marginBottom: '20px',
              marginTop: '40px',
              fontSize: '30px',
              borderBottom: '2px solid #000',
            }}
          >
            Notifications
          </Box>
          {filteredNotices.map(notice => (
            <NoticeTile2
              key={notice._id}
              columns={[
                { id: 'title' },
                { id: 'details' },
                { id: 'date' },
              ]}
              rows={[notice]}
            />
          ))}
        </>
      )}
      {/* Display a message when there are no events */}
      {filteredEvents.length === 0 && (
        <Box
          sx={{
            width: '100%',
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          No Upcoming Events
        </Box>
      )}

    </div>
  );
};

export default SeeNotice;