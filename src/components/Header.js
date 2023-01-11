import '../style/Header.css'

import React, { useState } from "react";
import {
    AppBar,
    Button,
    Tab,
    Tabs,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useNavigate } from "react-router-dom";
import Popover from '@mui/material/Popover';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Home from "../pages/Home/Home"
// "./pages/Home/Home";
import { useAuth } from '../context/AuthProvider';

export default function Header({ page, group, add }) {
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [copyState, setCopyState] = useState(false);
    const navigate = useNavigate();
    const { signOut } = useAuth();

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const handleClickInviteButton = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseButton = () => {
        setAnchorEl(null);
    };

    const handleClickCopy = (link) => {
        setCopyState(true);
        navigator.clipboard.writeText(link);
    };
    const handleClickViewProfile = () => {
        navigate("/editprofile");
    }

    const handleSignOut = () => {
        signOut()
    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <AppBar sx={{ background: '#fff' }}>
            <Toolbar>
                <Button onClick={() => navigate('/home')} >
                    <img src={require('../assets/img/logo.png')} className='logo' alt='logo' ></img>
                </Button>
                {page !== "GroupInvitation" &&
                    <>
                        {isMatch ? (
                            <>

                            </>
                        ) : (
                            <>
                                <Tabs
                                    TabIndicatorProps={{ style: { background: '#FB2576', color: '#FB2576' } }}
                                    sx={{ marginLeft: "20px" }}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    value={value}
                                    onChange={(e, value) => setValue(value)}
                                >
                                    <Tab icon={<HomeIcon />} href="/home" iconPosition="start" label="Home" className='tab' style={{ fontWeight: "bold", color: value === 0 ? '#FB2576' : '' }} />
                                    <Tab icon={<HomeIcon />} href="/presentation" iconPosition="start" label="Presentation" className='tab' style={{ fontWeight: "bold", color: value === 1 ? '#FB2576' : '' }} />
                                    <Tab icon={<HomeIcon />} iconPosition="start" label="Library" className='tab' style={{ fontWeight: "bold", color: value === 2 ? '#FB2576' : '' }} />
                                    <Tab icon={<HomeIcon />} iconPosition="start" label="Reports" className='tab' style={{ fontWeight: "bold", color: value === 3 ? '#FB2576' : '' }} />
                                </Tabs>




                            </>
                        )}
                        <div className="functionButton">
                            {page === 'GroupPage' ? <Button sx={{ marginLeft: "auto", marginRight: '20px', flex: 1 }} variant="contained" onClick={handleClickInviteButton}>
                                Invite
                            </Button> : undefined}
                            {page === 'HomePage' ?
                                <>
                                    <Button sx={{ marginLeft: "0", whiteSpace: 'nowrap' }} variant="contained" onClick={() => add(true)} >
                                        Create Group
                                    </Button>

                                    <Button sx={{ marginLeft: "10px", flex: 1, }} variant="contained" >
                                        Create Kahoot
                                    </Button>
                                </>
                                : undefined
                            }
                        </div>
                        {page === 'GroupPage' ?
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleCloseButton}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <div className="shareFrame">
                                    <div className="shareTitle">
                                        Link mời thành viên
                                    </div>
                                    <div className='copyFrame'>
                                        <div className='linkInvited'>
                                            {group.invitationLink}
                                        </div>
                                        <ContentCopyIcon sx={{ padding: '2px', "&:hover": { borderRadius: '100px', backgroundColor: "#7F7F7F" } }}
                                            onClick={() => handleClickCopy(group.invitationLink)}
                                        ></ContentCopyIcon>

                                    </div>
                                    <Snackbar
                                        message="Copied to clibboard"
                                        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                        autoHideDuration={2000}
                                        onClose={() => setCopyState(false)}
                                        open={copyState}
                                    />
                                </div>
                            </Popover>
                            : undefined}
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <div variant="contained" {...bindTrigger(popupState)}>
                                        <AccountCircleIcon sx={{ marginLeft: "10px", color: '#000' }} color="action" fontSize="large" />
                                    </div>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={handleClickViewProfile}>View profile</MenuItem>
                                        <MenuItem onClick={popupState.close}>Profile settings</MenuItem>
                                        <MenuItem onClick={handleSignOut}>
                                            <LogoutIcon sx={{ marginRight: '10px' }} />
                                            Sign out
                                        </MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </>}
            </Toolbar>
        </AppBar >
    );
};

