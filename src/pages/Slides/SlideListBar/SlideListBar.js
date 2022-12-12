import './SlideListBar.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Img from '../../../assets/img/multiChoice.png'
import { Tab, Tabs } from '@mui/material';

import { useState } from 'react';
function SlideListBar() {
    const [value, setValue] = useState(1);



    return (
        <div className='slideListBarContent'>
            <div className='slideOverview' onClick={()=>setValue(1)} style={value === 1?{ backgroundColor: '#D1E2FF'}:undefined}>
                <div className='slideOverviewOption'>
                    <div className='slideOverviewOptionTop'>
                        <div className='sildeIndex'>
                            1
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
            <div className='slideOverview' onClick={()=>setValue(2)}  style={value === 2?{ backgroundColor: '#D1E2FF'}:undefined}>
                <div className='slideOverviewOption'>
                    <div className='slideOverviewOptionTop'>
                        <div className='sildeIndex'>
                            2
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
            <div className='slideOverview' onClick={()=>setValue(3)}  style={value === 3?{ backgroundColor: '#D1E2FF'}:undefined}>
                <div className='slideOverviewOption'>
                    <div className='slideOverviewOptionTop'>
                        <div className='sildeIndex'>
                            3
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
        </div>

    )

}

export default SlideListBar;