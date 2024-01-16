import React, {useState} from 'react';
import { Divider, ListSubheader } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { 
    Home as HomeIcon,        
    ClassOutlined as AssociationIcon,
    PeopleAltOutlined as MembersIcon,
    ContactEmergencyOutlined as BODIcon,
    Newspaper as NoticeIcon,
    Event as EventIcon,
    AssessmentOutlined as AssessmentIcon,
    AccountCircleOutlined as ProfileIcon,
    ExitToApp as LogoutIcon,
} from "@mui/icons-material";
import CustomList from '../../components/CustomList';

const SideBar = () => {
    const location = useLocation();
    const [activeItem, setActiveItem] = useState('');

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    const isItemActive = (path) => location.pathname.startsWith(path);

    return (
        <>
            <React.Fragment>
                <CustomList
                    to="/"
                    onClick={() => handleItemClick('Home')}
                    icon={<HomeIcon />}
                    primaryText="Dashboard"
                    isActive={location.pathname === ("/")}
                />
                <CustomList
                    to="/Admin/association"
                    onClick={() => handleItemClick('Association')}
                    icon={<AssociationIcon />}
                    primaryText="Association List"
                    isActive={isItemActive("/Admin/association")}
                />
                <CustomList
                    to="/Admin/members"
                    onClick={() => handleItemClick('Members')}
                    icon={<MembersIcon />}
                    primaryText="Member List"
                    isActive={isItemActive("/Admin/members")}
                />
                <CustomList
                    to="/Admin/mainBod"
                    onClick={() => handleItemClick('mainBod')}
                    icon={<BODIcon />}
                    primaryText="Main BOD"
                    isActive={isItemActive("/Admin/mainBod")}
                />
                <CustomList
                    to="/Admin/notices"
                    onClick={() => handleItemClick('Notices')}
                    icon={<NoticeIcon />}
                    primaryText="Notification"
                    isActive={isItemActive('/Admin/notices') || activeItem==='Notices'}
                />
                <CustomList
                    to="/Admin/events"
                    onClick={() => handleItemClick('Events')}
                    icon={<EventIcon />}
                    primaryText="Events"
                    isActive={isItemActive('/Admin/events') || activeItem==='Events'}
                />
                <CustomList
                    to="/Admin/report"
                    onClick={() => handleItemClick('Report')}
                    icon={<AssessmentIcon />}
                    primaryText="Report"
                    isActive={isItemActive('/Admin/report') || activeItem==='Report'}
                />
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>
                <CustomList
                    to="/Admin/profile"
                    onClick={() => handleItemClick('/Admin/profile')}
                    icon={<ProfileIcon />}
                    primaryText="Profile"
                    isActive={isItemActive('/Admin/profile')}
                />
                <CustomList
                    to="/logout"
                    onClick={() => handleItemClick('/logout')}
                    icon={<LogoutIcon />}
                    primaryText="Logout"
                    isActive={isItemActive('/logout')}
                />
            </React.Fragment>
        </>
    )
}

export default SideBar;


