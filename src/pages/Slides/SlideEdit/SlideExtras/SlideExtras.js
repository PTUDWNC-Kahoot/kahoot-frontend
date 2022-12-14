import './SlideExtras.css'
import { Tooltip } from '@mui/material'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Switch, { SwitchProps } from '@mui/material/Switch';
import { useState } from 'react';

export default function SlideExtras() {
    const [checkedShowCorrectAnswer, setCheckedShowCorrectAnswer] = useState(false);
    const [checkedShowResultPercentage, setCheckedShowResultPercentage] = useState(false);
    const [checkedChooseMultiOption, setCheckedChooseMultiOption] = useState(false);

    const handleChangeShowCorrectAnswer = (event) => {
        setCheckedShowCorrectAnswer(event.target.checked);
    };

    const handleChangeShowResultPercentage = (event) => {
        setCheckedShowResultPercentage(event.target.checked);
    };

    const handleChangeChooseMultiOption = (event) => {
        setCheckedChooseMultiOption(event.target.checked);
    };

    return (
        <div className='extrasSetting'>
            <div className='extrasSettingTitle'>
                Extras
            </div>
            <div className='extrasOptions'>
                <div className='extrasOption'>
                    <div className='extrasOptionContent'>
                        Show correct answers
                        <Tooltip title="Choose one and more options as correct, and reveal them when presenting">
                            <HelpOutlineIcon sx={{ marginLeft: '10px' }}></HelpOutlineIcon>
                        </Tooltip>
                    </div>
                    <Switch
                        checked={checkedShowCorrectAnswer}
                        onChange={handleChangeShowCorrectAnswer}
                    />
                </div>

                <div className='extrasOption'>
                    <div className='extrasOptionContent'>
                        Show results in percentage
                        <Tooltip title="You can also switch when click the chart when presenting">
                            <HelpOutlineIcon sx={{ marginLeft: '10px' }}></HelpOutlineIcon>
                        </Tooltip>
                    </div>
                    <Switch
                        checked={checkedShowResultPercentage}
                        onChange={handleChangeShowResultPercentage}
                    />
                </div>

                <div className='extrasOption'>
                    <div className='extrasOptionContent'>
                        Let participants choose multiple options
                        
                    </div>
                    <Switch
                        checked={checkedChooseMultiOption}
                        onChange={handleChangeChooseMultiOption}
                    />
                </div>
            </div>


        </div>
    )
}