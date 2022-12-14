import './KahootView.css'
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useRadioGroup } from '@mui/material/RadioGroup';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function KahootView() {
    const [value, setValue] = useState(1);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleSubmit = (event) => {
    };
    return (
        <div className='kahootViewContent'>
            <img src={require('../../../assets/img/logo.png')} className='KahootLogo' alt='logo'></img>

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
                    <Button variant="contained" className='buttonKahootSubmit' onClick={handleSubmit}>Submit </Button>

                </FormControl>

            </div>
        </div>
    )

}

export default KahootView;