import './KahootOuttro.css'

import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

function KahootOuttro() {
    const navigate = useNavigate();  

    function handleJoinAnother(){
        navigate('/kahootLogin')
    }
    return (
        <div className='kahootViewQA'>
            <div className='kahootQuestion'>
                Thank you for your participation!
            </div>
            <Button onClick={()=>navigate('/register')} style={{ textTransform: 'none' }} variant="contained" className='buttonOuttro' sx={{margin: '10px 0px'}} size="large">Sign up for Kahoot </Button>
            <Button style={{ textTransform: 'none' }} variant="outlined" className='buttonOuttro' sx={{margin: '10px 0px'}} size="large">Send me the results </Button>
            <Button onClick={handleJoinAnother} style={{ textTransform: 'none' }} variant="outlined" className='buttonOuttro' sx={{margin: '10px 0px'}} size="large">Join another presentation </Button>
        </div>
    )

}

export default KahootOuttro;