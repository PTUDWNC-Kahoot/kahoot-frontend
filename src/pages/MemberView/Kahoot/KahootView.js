import './KahootView.css'
import { useState } from 'react';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import KahootOuttro from './KahootOuttro/KahootOuttro';
import ChatBox from '../../ChatBox/ChatBox';
import { Button } from '@mui/material';

function KahootView() {
    const [value, setValue] = useState(1);
    const [doneState, setDoneState] = useState(false);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event) => {
        setDoneState(true)

    };
    return (
        <div className='kahootViewContent'>
            <img src={require('../../../assets/img/logo.png')} className='KahootLogo' alt='logo'></img>

            {doneState === false?
            <div className='kahootViewWrapper'>
                    <div className='kahootViewQA'>
                        <div className='kahootQuestion'>
                            question here
                        </div>
                        <FormControl className='kahootOptions'>
                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={value}
                                onChange={handleChange}
                            >
                                <FormControlLabel className='kahootOption' value={1} control={<Radio size='large' />} label="Option 1" />
                                <FormControlLabel className='kahootOption' value={2} control={<Radio size='large' />} label="Option 2" />
                                <FormControlLabel className='kahootOption' value={3} control={<Radio size='large' />} label="Option 3" />
                            </RadioGroup>
                            <Button sx={{margin: '0px'}} variant="contained" className='buttonKahootViewSubmit' onClick={handleSubmit}>Submit </Button>

                        </FormControl>
                        
                    </div> 
                    {/* <ChatBox></ChatBox> */}
                </div>
                : <KahootOuttro></KahootOuttro>}

        </div>

    )

}

export default KahootView;