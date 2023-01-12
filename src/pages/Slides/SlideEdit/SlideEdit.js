import './SlideEdit.css'
import SlideExtras from './SlideExtras/SlideExtras';
import { Box, FormControl, Select, InputLabel, Menu, MenuItem, Tab, Tabs, TextField, Button, Tooltip } from '@mui/material';
import { useState } from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import Divider from '@mui/material/Divider';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import PieChartIcon from '@mui/icons-material/PieChart';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Option from '../../../models/Option';
import Slide from '../../../models/Slide';
import { useEffect } from 'react';
function SlideEdit({ slides, setSlides, currentSlide, setCurrentSlide, setEditState }) {
    const [type, setType] = useState(10);
    const [value, setValue] = useState(0);
    const [question, setQuestion] = useState(currentSlide.question);
    const [options, setOptions] = useState(currentSlide.options);

    const [questionLength, setQuestionLength] = useState(150 - currentSlide.question.length);
    const [resultLayoutChoice, setResultLayoutChoice] = useState(0);

    useEffect(() => {
      setQuestion(currentSlide.question)
      setOptions(currentSlide.options)
    }, [currentSlide]);

    const handleChange = (event) => {
        setType(event.target.value);
    };

    const changeSlideName = (value) => {
        var slideTemp = new Slide(currentSlide.id, currentSlide.type, value, currentSlide.options);
       setCurrentSlide(slideTemp);
        setEditState(true);
    };

    const changeOptionContent = (value, option) => {
        var optionTemp = new Option(option.id, value, option.isCorrect);
        var optionListTemp = options.slice();
        optionListTemp[option.id] = optionTemp;
        setOptions(optionListTemp)
        var slideTemp = new Slide(currentSlide.id, currentSlide.type, currentSlide.question, optionListTemp);
        setCurrentSlide(slideTemp);
        setEditState(true);
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
                    <Tooltip title="Enter the question you'd like to ask your audience">
                        <HelpOutlineIcon sx={{ marginLeft: '10px' }}></HelpOutlineIcon>
                    </Tooltip>
                </div>
                <TextField
                    value={question}
                    id="outlined-basic" label="Question  " variant="outlined" inputProps={{ maxLength: 150 }}
                    fullWidth onChange={(value) => { changeSlideName(value.target.value); setQuestion(value.target.value); setQuestionLength(150 - (value.target.value.length)) }} InputProps={{
                        endAdornment: <div className='questionLen'>{questionLength}</div>
                    }}>
                </TextField>
            </div>
            <div className='optionBox'>
                <div className='optionBoxTitle'>
                    Options
                    <Tooltip title="Enter the options you want your audience to vote on">
                        <HelpOutlineIcon sx={{ marginLeft: '10px' }}></HelpOutlineIcon>
                    </Tooltip>
                </div>
                {options.map((option, index) => {
                    return (
                        <div key={index} className='optionQuestion'>
                            <TextField sx={{ margin: '10px 0px', marginRight: '10px  ' }} id="outlined-basic" label={"Option "+ (index+1) } variant="outlined" inputProps={{ maxLength: 150 }}
                                value={option.content} fullWidth onChange={(value) => { console.log(value.target.value); changeOptionContent(value.target.value, option) }}>
                            </TextField>
                            <DeleteForeverIcon fontSize='large'></DeleteForeverIcon>
                        </div>
                    )
                })

                }

                <Button variant="contained" disableElevation fullWidth sx={{ marginTop: '10px' }}>
                    <AddIcon></AddIcon>
                    <div className='addOptionText'>
                        Add option
                    </div>
                </Button>

            </div>

            <div className='resultLayout'>
                <div className='resultLayoutTitle'>
                    Result layout
                    <Tooltip title="Choose how to display the results">
                        <HelpOutlineIcon sx={{ marginLeft: '10px' }}></HelpOutlineIcon>
                    </Tooltip>
                </div>
                <div className='resultLayoutList'>
                    <div className='resultLayoutChoice' onClick={() => setResultLayoutChoice(0)} style={resultLayoutChoice === 0 ? { backgroundColor: '#176FCB' } : undefined}>
                        <div className='resultLayoutSymbol'>
                            <LeaderboardIcon></LeaderboardIcon>
                        </div>
                        <div className='resultLayoutChoiceText'>
                            Bars
                        </div>
                    </div>

                    <div className='resultLayoutChoice' onClick={() => setResultLayoutChoice(1)} style={resultLayoutChoice === 1 ? { backgroundColor: '#176FCB' } : undefined}>
                        <div className='resultLayoutSymbol'>
                            <DonutLargeIcon></DonutLargeIcon>
                        </div>
                        <div className='resultLayoutChoiceText'>
                            Donuts
                        </div>
                    </div>

                    <div className='resultLayoutChoice ' onClick={() => setResultLayoutChoice(2)} style={resultLayoutChoice === 2 ? { backgroundColor: '#176FCB' } : undefined}>
                        <div className='resultLayoutSymbol'>
                            <PieChartIcon></PieChartIcon>
                        </div>
                        <div className='resultLayoutChoiceText'>
                            Pie
                        </div>
                    </div>

                    <div className='resultLayoutChoice' onClick={() => setResultLayoutChoice(3)} style={resultLayoutChoice === 3 ? { backgroundColor: '#176FCB' } : undefined}>
                        <div className='resultLayoutSymbol'>
                            <WorkspacesIcon></WorkspacesIcon>
                        </div>
                        <div className='resultLayoutChoiceText'>
                            Dots
                        </div>
                    </div>
                </div>
            </div>


            <SlideExtras />

        </div>

    )

}

export default SlideEdit;