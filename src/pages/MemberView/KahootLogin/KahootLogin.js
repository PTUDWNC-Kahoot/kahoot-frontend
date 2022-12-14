import './KahootLogin.css'
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


function KahootLogin() {
    const [codeRoom, setcodeRoom] = useState();
    const navigate = useNavigate();  

    function handleSubmit(){
        navigate("/kahoot");  
    }
    return (
        <div className='kahootLoginContent'>
            <img src={require('../../../assets/img/logo.png')} className='KahootLogo' alt='logo'></img>
            <div className='enterCodeText'>Please enter the code</div>
            <TextField type="number" sx={{ width: '30%', justifyContent: 'center' }} id="outlined-basic" label="Game Pin" variant="outlined" onChange={(value) => { setcodeRoom(value.target.value) }} > </TextField>
            <Button sx={{margin: '20px'}}variant="contained" className='buttonSubmitCode' onClick={handleSubmit}>Enter </Button>
        </div>
    )

}

export default KahootLogin;