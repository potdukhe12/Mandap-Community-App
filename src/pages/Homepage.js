import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/students.svg";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        <StyledContainer>
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <img src={Students} alt="students" style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={12} md={1}>
                
                </Grid>
                <Grid item xs={12} md={5}>
                    <StyledPaper elevation={3}>
                        <StyledTitle>
                            Welcome to
                            <br />
                            Mandap Community
                            <br />
                            System
                        </StyledTitle>
                        <StyledText>
                            Mandap Community Application serves as a digital hub for like-minded individuals, 
                            mirroring the spirit of a Rotary Club in a virtual space. <br/><br/>
                            Connect, collaborate, and contribute to meaningful initiatives within this vibrant 
                            online community fostering shared values and impactful social engagement.
                        </StyledText>
                        <StyledBox>
                            <StyledLink to="/Adminlogin">
                                <LightPurpleButton variant="contained" fullWidth sx={{ fontSize: "1.8rem" }}>
                                    Login
                                </LightPurpleButton>
                            </StyledLink>
                            {/* <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText> */}
                        </StyledBox>
                    </StyledPaper>
                </Grid>
            </Grid>
        </StyledContainer>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media (max-width: 600px) {
    padding-top: 0;
  }
`;

const StyledPaper = styled.div`
  padding: 0px 18px 18px 18px;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 2.8rem;
  color: #252525;
//   font-family: "Manrope"; 
  font-weight: bold;
`;

const StyledText = styled.p`
  margin-top: 10px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
