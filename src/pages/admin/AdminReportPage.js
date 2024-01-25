import React, { useEffect } from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CountUp from 'react-countup';
import MembersIcon from '../../assets/members2.png';
import AssociationIcon from '../../assets/association2.png';
import EventsIcon from '../../assets/events2.png';

const AdminReportPage = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const adminID = currentUser._id;

  useEffect(() => {
    // Fetch necessary data here if needed
  }, [adminID]);

  const numberOfStudents = 20;
  const numberOfClasses = 15;
  const numberOfTeachers = 5;

  const handleCardClick = (path) => {
    navigate(`/Admin${path}`);
  };

  return (
    <StyledContainer maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StyledCard onClick={() => handleCardClick('/members')}>
            <CardImage src={MembersIcon} alt="Members" />
            <CardContent>
              <Title>Total Members</Title>
              <Data start={0} end={numberOfStudents} duration={2.5} />
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard onClick={() => handleCardClick('/association')}>
            <CardImage src={AssociationIcon} alt="Association" />
            <CardContent>
              <Title>Total Associations</Title>
              <Data start={0} end={numberOfClasses} duration={5} />
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={4}>
          <StyledCard onClick={() => handleCardClick('/events')}>
            <CardImage src={EventsIcon} alt="Events" />
            <CardContent>
              <Title>Total Events</Title>
              <Data start={0} end={numberOfTeachers} duration={2.5} />
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  margin-top: 30px;
  margin-bottom: 100px;
`;

const StyledCard = styled(Paper)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
//   background: #fff;
background: linear-gradient(to bottom, #fad5ae, #fde8d4, #f7b887); 
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled(Typography)`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Data = styled(CountUp)`
  font-size: 2.5rem;
  color: #3498db;
`;

export default AdminReportPage;
