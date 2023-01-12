import './SlideListBar.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Img from '../../../assets/img/multiChoice.png'
import { Tab, Tabs } from '@mui/material';

import { useState, useEffect } from 'react';
function SlideListBar({ slides, setSlides, currentSlide, setCurrentSlide }) {
    const [value, setValue] = useState(currentSlide.id);

    useEffect(() => {
        setCurrentSlide(slides[value]);
    }, [value]);

    useEffect(() => {
        if (currentSlide.id !== value)
            setValue(currentSlide.id)
    }, [currentSlide]);

    return (
        <div className='slideListBarContent'>
            {slides.map((slide, index) => {
                return (
                    <div key= {index} className='slideOverview' onClick={() => setValue(index)} style={value === index ? { backgroundColor: '#D1E2FF' } : undefined}>
                        <div className='slideOverviewOption'>
                            <div className='slideOverviewOptionTop'>
                                <div className='sildeIndex'>
                                    {index + 1}
                                </div>
                                <PlayArrowIcon />
                            </div>
                            <div className='slideOverviewOptionBottom'>
                                <MoreVertIcon />
                            </div>
                        </div>
                        <div className='slideOverviewScreen'>
                            <img src={Img} width={200} ></img>
                        </div>
                    </div>
                )
            })}
        </div>

    )

}

export default SlideListBar;