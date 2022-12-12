import './SlideEdit.css'
import { Box, FormControl, Select, InputLabel, Menu, MenuItem, Tab, Tabs, TextField, Button } from '@mui/material';
import { useState } from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import Divider from '@mui/material/Divider';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';

function SlideEdit() {
    const [type, setType] = useState('');
    const [value, setValue] = useState(0);
    const [questionLength, setQuestionLength] = useState(150);

    const handleChange = (event) => {
        setType(event.target.value);
    };
    return (
        <div className='slideEdit'>

            <div className='slideType'>
                <div className='slideTypeTitle'>
                    Slide type
                </div>
                <div className='slideTypeDropbox'>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={type}
                                label="Type"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>
                                    <div className='typeChoice'>
                                        < BarChartIcon sx={{ margin: '0px 10px' }} />
                                        Multiple Question
                                    </div>
                                </MenuItem>
                                <MenuItem value={20}>
                                    <div className='typeChoice'>
                                        < ChatBubbleIcon sx={{ margin: '0px 10px' }} />
                                        Q&A
                                    </div>
                                </MenuItem>
                                <MenuItem value={30}>
                                    <div className='typeChoice'>
                                        < AlignHorizontalLeftIcon sx={{ margin: '0px 10px' }} />
                                        Ranking
                                    </div></MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </div>
                <Divider orientation="horizontal" flexItem />
                <Tabs
                    TabIndicatorProps={{ style: { background: 'blue', color: 'blue' } }}
                    sx={{ display: 'flex', flexDirection: 'row' }}
                    indicatorColor="primary"
                    textColor="primary"
                    value={value}
                    onChange={(value) => setValue(value)}
                >
                    <Tab label="Content" className='tab' style={{ flex: 1, fontWeight: "bold", color: value === 0 ? 'blue' : '' }} />
                    <Tab label="Customize" className='tab' style={{ flex: 1, fontWeight: "bold", color: value === 1 ? 'blue' : '' }} />
                </Tabs>

                <div className='questionBox'>
                    <div className='slideTypeTitle'>
                        Your question
                        <HelpOutlineIcon sx={{ marginLeft: '10px' }}></HelpOutlineIcon>
                    </div>
                    <TextField id="outlined-basic" label="Question  " variant="outlined" inputProps={{ maxLength: 150 }}
                        fullWidth onChange={(value) => setQuestionLength(150 - (value.target.value.length))} InputProps={{
                            endAdornment: <div className='questionLen'>{questionLength}</div>
                        }}>
                    </TextField>
                </div>
                <div className='optionBox'>
                    <div className='optionBoxTitle'>
                        Options
                        <HelpOutlineIcon sx={{ marginLeft: '10px' }}></HelpOutlineIcon>
                    </div>
                    <div className='optionQuestion'>
                        <TextField sx={{ margin: '10px 0px', marginRight: '10px  ' }} id="outlined-basic" label="Option 1" variant="outlined" inputProps={{ maxLength: 150 }}
                            fullWidth onChange={(value) => setQuestionLength(150 - (value.target.value.length))}>
                        </TextField>
                        <DeleteForeverIcon fontSize='large'></DeleteForeverIcon>
                    </div>
                    <div className='optionQuestion'>
                        <TextField sx={{ margin: '10px 0px', marginRight: '10px  ' }} id="outlined-basic" label="Option 2" variant="outlined" inputProps={{ maxLength: 150 }}
                            fullWidth onChange={(value) => setQuestionLength(150 - (value.target.value.length))}>
                        </TextField>
                        <DeleteForeverIcon fontSize='large'></DeleteForeverIcon>
                    </div>
                    <div className='optionQuestion'>
                        <TextField sx={{ margin: '10px 0px', marginRight: '10px  ' }} id="outlined-basic" label="Option 3" variant="outlined" inputProps={{ maxLength: 150 }}
                            fullWidth onChange={(value) => setQuestionLength(150 - (value.target.value.length))}>
                        </TextField>
                        <DeleteForeverIcon fontSize='large'></DeleteForeverIcon>
                    </div>
                    <Button variant="contained" disableElevation fullWidth sx={{marginTop: '10px'}}>
                        <AddIcon></AddIcon>
                        <div className='addOptionText'>
                            Add option
                        </div>
                    </Button>

                </div>

                <div className='resultLayout'>
                    <div className='resultLayoutTitle'>
                        Result layout
                        <HelpOutlineIcon sx={{ marginLeft: '10px' }}></HelpOutlineIcon>
                    </div>
                   
                </div>
            </div>
        </div>

    )

}

export default SlideEdit;