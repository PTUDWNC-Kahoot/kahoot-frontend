import '../../style/Group.css'
import Header from '../../components/Header'
import { useNavigate, useNavigation } from "react-router-dom";
import { useAuth } from '../../context/AuthProvider'
import { Button } from '@mui/material';
import Login from '../Login/Login'
import AcceptInvitation from '../../service/AcceptInvitation';
import { Snackbar } from '@mui/material'
import { useState, useEffect } from 'react';

function Group() {
    const navigate = useNavigate();
    const { token } = useAuth();
    const [acceptState, setAcceptState] = useState();

    function OkInvitation() {
        const url = window.location.href.slice(window.location.href.lastIndexOf('/') + 1)
        AcceptInvitation(token, setAcceptState, url)
    }

    useEffect(() => {
        if (acceptState === true)
            navigate('/home')
    }, [acceptState]);
    if (token)
        return (
            <div >
                <Header page={'GroupInvitation'} >  </Header>
                <div className='contentInvitation'>
                    <Button onClick={OkInvitation} variant='contained' className='invitationButton'> Join Group</Button>
                </div>
                <Snackbar
                    message="Unable to join group"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    autoHideDuration={2000}
                    open={acceptState !== undefined && acceptState === false}
                />
                <Snackbar
                    message="ok"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    autoHideDuration={2000}
                    open={acceptState !== undefined && acceptState === true}
                />
            </div>

        )
    else
        return (
            <Login></Login>
        )

}

export default Group;