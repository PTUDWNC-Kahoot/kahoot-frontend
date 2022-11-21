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
    useTheme,
} from "@mui/material";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
        <AppBar sx={{ background: '#fff' }}>
            <Toolbar>
                <img src={require('../assets/img/logo.png')} className='logo' alt='logo'></img>
                {isMatch ? (
                    <>
                        <Typography sx={{ fontSize: "2rem", paddingLeft: "10%", }}>
                            Shoppee
                        </Typography>
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
                            <Tab icon={<HomeIcon />} iconPosition="start" label="Home" className='tab' style={{ fontWeight: "bold", color: value === 0 ? '#FB2576' : '' }} />
                            <Tab icon={<HomeIcon />} iconPosition="start" label="Discover" className='tab' style={{ fontWeight: "bold", color: value === 1 ? '#FB2576' : '' }} />
                            <Tab icon={<HomeIcon />} iconPosition="start" label="Library" className='tab' style={{ fontWeight: "bold", color: value === 2 ? '#FB2576' : '' }} />
                            <Tab icon={<HomeIcon />} iconPosition="start" label="Reports" className='tab' style={{ fontWeight: "bold", color: value === 3 ? '#FB2576' : '' }} />
                        </Tabs>

                    </>
                )}
                <Button sx={{ marginLeft: "auto" }} variant="contained">
                    Create
                </Button>


                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <div variant="contained" {...bindTrigger(popupState)}>
                                <AccountCircleIcon sx={{ marginLeft: "10px", color: '#000' }} color="action" fontSize="large" />
                            </div>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem onClick={popupState.close}>View profile</MenuItem>
                                <MenuItem onClick={popupState.close}>Profile settings</MenuItem>
                                <MenuItem onClick={popupState.close}>
                                    <LogoutIcon sx={{marginRight: '10px'}} />
                                    Sign out
                                </MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>

            </Toolbar>
        </AppBar>
    );
};

export default Header;