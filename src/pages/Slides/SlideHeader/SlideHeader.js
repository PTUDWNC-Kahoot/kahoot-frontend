import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './SlideHeader.css'
import PresentOption from './PresentOption/PresentOption';
import Helper from './Helper/Helper'

import { useState } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import {
    Button,
    ButtonGroup
} from "@mui/material";
import Divider from '@mui/material/Divider';
import ShareIcon from '@mui/icons-material/Share';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { Tooltip, IconButton } from '@mui/material';

function SlideHeader() {
    const navigate = useNavigate();
    const [videoHelper, setvideoHelper] = useState(false);
    const handleClickPreview = () => {
        navigate("/kahootLogin");
    }
    const options = [
        {
            icon: (
                <PhoneAndroidIcon />
            ),
            title: 'Preview Kahoot',
            content: 'Test and interact with your kahoot',
            onclick: handleClickPreview

        },
        {
            icon: (
                <PhoneAndroidIcon />
            ),
            title: 'Preview Kahoot 2    ',
            content: 'Test and interact with your kahoot',
            onclick: handleClickPreview
        },
    ]

    const handleClickViewProfile = () => {
        navigate("/editprofile");
    }

    return (
            <div className="headerContent" >
                <div className="leftFunc">
                    <IconButton  className="backButton" onClick={() => navigate('-1')}>
                        <ArrowBackIcon>
                        </ArrowBackIcon>
                    </IconButton>
                  
                    <div className="slideInfo">
                        <div className='slideName'>
                            <div className='slideNameText'>
                                My kahoot
                            </div>
                        </div>
                        <div className='slideOwner'>
                            <div className='sildeOwnerText'>
                                Created by Duc Minh
                            </div>
                        </div>
                    </div>

                </div>
                <Helper state={videoHelper} setState={setvideoHelper}></Helper>

                <div className="rightFunc">
                    <div className='checkSave'>
                        <CheckIcon color='success'>
                        </CheckIcon>

                        <div className='checkSaveText'>
                            Saved
                        </div>
                    </div>
                    <Divider orientation="vertical" flexItem />

                    <div className='helpOut' onClick={() => setvideoHelper(true)}>
                        <Tooltip title="Get help">
                            <IconButton>
                                <HelpOutlineIcon fontSize='large' />
                            </IconButton>
                        </Tooltip>
                    </div>
                    <Divider orientation="vertical" flexItem />

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <div>
                                <div variant="contained" {...bindTrigger(popupState)}>
                                    <AccountCircleIcon sx={{ marginX: "20px", color: '#000' }} color="action" fontSize="large" />
                                </div>
                                <Menu {...bindMenu(popupState)}>

                                    <MenuItem onClick={handleClickViewProfile}>View profile</MenuItem>
                                    <MenuItem onClick={popupState.close}>Profile settings</MenuItem>
                                    <MenuItem onClick={popupState.close}>
                                        <LogoutIcon sx={{ marginRight: '10px' }} />
                                        Sign out
                                    </MenuItem>
                                </Menu>
                            </div>
                        )}
                    </PopupState>

                    <Button sx={{ marginLeft: "0", whiteSpace: 'nowrap', height: '3em' }} variant="outlined" >
                        <ShareIcon sx={{ marginRight: "10px" }} />
                        Share
                    </Button>

                    <PopupState variant="popover" popupId="demo-popup-menu">
                        {(popupState) => (
                            <>
                                <ButtonGroup variant="contained" aria-label="outlined primary button group" disableElevation>
                                    <Button sx={{ marginLeft: "10px", height: '3em' }} disableElevation >
                                        <PlayArrowIcon ></PlayArrowIcon>
                                        Present
                                    </Button>
                                    <Button sx={{ height: '3em' }} disableElevation {...bindTrigger(popupState)} >
                                        <ExpandMoreIcon ></ExpandMoreIcon>
                                    </Button>
                                </ButtonGroup>
                                <Menu {...bindMenu(popupState)}>
                                    {options.map((option) => {
                                        return (
                                            <MenuItem onClick={option.onclick}>
                                                <PresentOption title={option.title} icon={option.icon} content={option.content}></PresentOption>
                                            </MenuItem>
                                        )
                                    })}
                                </Menu>
                            </>
                        )}
                    </PopupState>
                </div>
            </div >
    )
}

export default SlideHeader;