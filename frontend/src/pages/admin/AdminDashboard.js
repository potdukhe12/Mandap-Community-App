import { useState } from 'react';
// import { useSelector } from 'react-redux';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import 'react-calendar/dist/Calendar.css';
// import '../../components/CalendarStyles.css';

import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar, Drawer } from '../../components/styles';
import SideBar from './SideBar';
import AdminProfile from './AdminProfile';
import AdminHomePage from './AdminHomePage';

// import SeeComplains from './studentRelated/SeeComplains';

import AddNotice from './noticeRelated/AddNotice';
import ShowNotices from './noticeRelated/ShowNotices';

import AddEvent from './eventRelated/AddEvent';
import ShowEvents from './eventRelated/ShowEvents';

import AccountMenu from '../../components/AccountMenu';
import Logout from '../Logout';
import Association from './communityRelated/Association';
import AssociationDetail from './communityRelated/AssociationDetail';
// import AssociationDetailsCard from './communityRelated/AssociationDetailsCard';
import Members from './memberRelated/Members';
import MemberDetails from './memberRelated/MemberDetails';
import AddAssociation from './communityRelated/AddAssociation';
import AddMember from './memberRelated/AddMember';
import MainBOD from './mainBodRelated/MainBOD';
import AddMainBod from './mainBodRelated/AddMainBod';
import MainBodDetails from './mainBodRelated/MainBodDetails';

const AdminDashboard = () => {
    
    // const { currentUser } = useSelector((state) => state.user);

    const [open, setOpen] = useState(window.innerWidth >= 600);
    
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position='fixed' open={open} sx={{
                    background: 'linear-gradient(to right, #fad5ae, #fde8d4, #f9cb9c)',
                }}>
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton
                            edge="start"
                            color="#b3600a"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '39px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color='#b3600a'
                            noWrap
                            sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '28px' }}
                        >
                            Mandap Community
                            {/* {currentUser.schoolName} */}
                        </Typography>
                        <AccountMenu />
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled} style={{backgroundColor:"#b3600a"}} onClick={toggleDrawer}>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="white"
                            noWrap
                            sx={{ flexGrow: 1, marginLeft: '16px', fontWeight: 'bold' }}
                        >
                            Menu
                        </Typography>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon sx={{ color: 'white' }} />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <SideBar />
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Box sx={{ 
                        marginLeft: open ? '240px' : '75px',             
                        '@media (max-width: 600px)': {
                            display: open ? 'none' : 'block',
                            marginLeft: open ? '240px' : '0px',
                        },
                        transition: 'margin-left 0.3s ease',
                    }}>
                        <Toolbar />
                        <Routes>
                            {/* Admin */}
                            <Route path="/" element={<AdminHomePage />} />
                            <Route path='*' element={<Navigate to="/" />} />
                            <Route path="/Admin/dashboard" element={<AdminHomePage />} />
                            <Route path="/Admin/profile" element={<AdminProfile />} />
                            {/* <Route path="/Admin/complains" element={<SeeComplains />} /> */}

                            
                            <Route path="/Admin/association" element={<Association />} />
                            <Route path="/Admin/association/:id" element={<AssociationDetail />} />
                            <Route path="/Admin/addAssociation" element={<AddAssociation />} />
                            
                            
                            <Route path="/Admin/members" element={<Members />} />
                            <Route path="/Admin/members/:id" element={<MemberDetails />} />
                            <Route path="/Admin/addMember" element={<AddMember />} />  
                            
                            <Route path="/Admin/mainBod" element={<MainBOD />} />
                            <Route path="/Admin/mainBod/:id" element={<MainBodDetails />} />
                            <Route path="/Admin/addMainBod" element={<AddMainBod />} /> 

                            {/* Notice */}
                            <Route path="/Admin/addnotice" element={<AddNotice />} />
                            <Route path="/Admin/notices" element={<ShowNotices />} />                            

                            {/* Event */}
                            <Route path="/Admin/addevent" element={<AddEvent />} />
                            <Route path="/Admin/events" element={<ShowEvents />} />

                            <Route path="/logout" element={<Logout />} />
                        </Routes>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

const styles = {
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.white
                : theme.palette.grey[900],
        flexGrow: 1,
        overflow: 'auto',
        margin: '35px 50px 0px 50px',
        '@media (max-width: 600px)': {
            margin: '20px 10px 0px 10px',
        }, 
    },

    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
            zIndex: 0, // Add this line to set zIndex to 0 when the drawer is closed
        },
    },
}

export default AdminDashboard;
