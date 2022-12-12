import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {
    Button,
    ButtonGroup
} from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import './SlideSettingBar.css'
import AddIcon from '@mui/icons-material/Add';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import SettingsIcon from '@mui/icons-material/Settings';

function SlideHeader() {
    const navigate = useNavigate();
    const handleClickPreview = () => {
        navigate("/editprofile");
    }

    return (
        <div className="settingBar">
            <div className="settingBarLeftFunc">
                <Button sx={{ marginLeft: "0", whiteSpace: 'nowrap', height: '3em' }} variant="contained" >
                    <AddIcon sx={{ marginRight: "10px" }} />
                    New slide
                </Button>
            </div>

            <div className="settingBarRightFunc">
                <Button style={{ textTransform: 'none' }} sx={{ marginLeft: "0", whiteSpace: 'nowrap', height: '3em' }} variant="text" >
                    <LightbulbOutlinedIcon sx={{ marginRight: "10px" }} />
                    Example
                </Button>

                <Button style={{ textTransform: 'none' }} sx={{ marginLeft: "10px", whiteSpace: 'nowrap', height: '3em' }} variant="text" >
                    <InvertColorsIcon sx={{ marginRight: "10px" }} />
                    Themes
                </Button>

                <Button style={{ textTransform: 'none' }} sx={{ marginLeft: "10px", whiteSpace: 'nowrap', height: '3em' }} variant="text" >
                    <SettingsIcon sx={{ marginRight: "10px" }} />
                    Settings
                </Button>
            </div>
        </div >
    )
}

export default SlideHeader;