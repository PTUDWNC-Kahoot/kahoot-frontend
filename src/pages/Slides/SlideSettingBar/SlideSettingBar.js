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
import Slide from '../../../models/Slide';

const OptionsTemp =[new Option (0,'', false), new Option (1,'', false)]

function SlideSettingBar({slides, setSlides, currentSlide}) {
   function createNewSlide(){
        const newSlide = new Slide(slides[slides.length-1].id +1,'MultiChoice','',OptionsTemp)
        console.log(newSlide)
        var slideList = slides.slice();
        slideList.push(newSlide);
        setSlides(slideList);
        currentSlide(newSlide)
   }

    return (
        <div className="settingBar">
            <div className="settingBarLeftFunc">
                <Button sx={{ marginLeft: "0", whiteSpace: 'nowrap', height: '3em' }} variant="contained" onClick={createNewSlide}>
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

export default SlideSettingBar;