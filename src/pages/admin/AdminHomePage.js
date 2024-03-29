import { Container, Grid, Paper } from '@mui/material'
import SeeNotice from '../../components/SeeNotice';
import Members from "../../assets/members2.png";
import Association from "../../assets/association2.png";
import Events from "../../assets/events2.png";
// import Fees from "../../assets/img4.png";
import styled from 'styled-components';
import CountUp from 'react-countup';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { getAllSclasses } from '../../redux/sclassRelated/sclassHandle';
// import { getAllStudents } from '../../redux/studentRelated/studentHandle';
// import { getAllTeachers } from '../../redux/teacherRelated/teacherHandle';
import { useNavigate } from 'react-router-dom';

const AdminHomePage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const { studentsList } = useSelector((state) => state.student);
    // const { sclassesList } = useSelector((state) => state.sclass);
    // const { teachersList } = useSelector((state) => state.teacher);

    const { currentUser } = useSelector(state => state.user)

    const adminID = currentUser._id

    useEffect(() => {
        // dispatch(getAllStudents(adminID));
        // dispatch(getAllSclasses(adminID, "Sclass"));
        // dispatch(getAllTeachers(adminID));
    }, [adminID, dispatch]);

    // const numberOfStudents = studentsList && studentsList.length;
    // const numberOfClasses = sclassesList && sclassesList.length;
    // const numberOfTeachers = teachersList && teachersList.length; 

    const numberOfMembers = 20;
    const numberOfAssociations = 15;
    const numberOfEvents = 5;   

    return (
        <>
            <Container maxWidth="lg" sx={{ mt: 0, mb: 0 }}>
                <Grid container spacing={3}>
                    <Grid item xs={6} md={6} lg={4}>
                        <StyledPaper 
                            onClick={() => navigate(`/Admin/members`)} 
                            sx={{                
                                '@media (max-width: 820px)': {
                                    flexDirection: 'column',
                                },
                            }}>
                            <img src={Members} alt="Members" />
                            <Title>Total Members</Title>
                            <Data start={0} end={numberOfMembers} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={6} md={6} lg={4}>
                        <StyledPaper 
                            onClick={() => navigate(`/Admin/association`)}
                            sx={{                
                                '@media (max-width: 820px)': {
                                    flexDirection: 'column',
                                },
                            }}>
                            <img src={Association} alt="Association" />
                            <Title>
                                Total Associations
                            </Title>
                            <Data start={0} end={numberOfAssociations} duration={5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4}>
                        <StyledPaper onClick={() => navigate(`/Admin/events`)}>
                            <img src={Events} alt="Events" />
                            <Title>
                                Total Events
                            </Title>
                            <Data start={0} end={numberOfEvents} duration={2.5} />
                        </StyledPaper>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <div sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <SeeNotice />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};


const StyledPaper = styled(Paper)`
padding: 16px;
display: flex;
min-height: 140px;
justify-content: space-around;
align-items: center;
text-align: center;
background: linear-gradient(to bottom, #fad5ae, #fde8d4, #fde8d4, #fde8d4, #f7b877); 
cursor: pointer; 

&:hover {
    background: linear-gradient(to bottom, #fef2e6, #fad5ae);
    border-radius: 15px;
    transition: background 0.5s ease, border-radius 0.3s ease;
}
transition: background 0.5s ease, border-radius 0.3s ease;
`;

const Title = styled.p`
  font-size: 1.1rem;
`;

const Data = styled(CountUp)`
  font-size: calc(2.4rem + .6vw);
  color: #b3600a;
`;

export default AdminHomePage