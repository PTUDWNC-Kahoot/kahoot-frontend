
import { useEffect, useRef, useState} from 'react';
import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from 'semantic-ui-react';
import "../../../../style/DialogCustom.css"
import ServiceGroupCreateNewPresentation from '../../../../service/ServiceGroupCreateNewPresentation';
export default function GroupCreatePresentation ({group, token, state, setState, createNewPresentation}) {
  
 
    const [isOpen, setIsOpen] = useState (state);
    const [newPresentName, setNewPresentName] = useState("");
    const [createState, setCreateState] = useState(false);
    const [errorMess, setErrorMess] = useState("");
    const [myPresentID, setMyPresentID] = useState("");
    const [myPresentName, setMyPresentName] = useState ("");
    const [myPresentOwner, setMyPresentOwner] = useState("");
    // const [myPresentModifiedDay, setMyPresentModifiedDay] = useState("");
    // const [myPresentCreatedDay, setMyPresentCreatedDay] = useState("");

    // const date = new Date();
    // const currentYear  = `${date.getFullYear()}`; 
    // const currentMonth= `${date.getMonth() + 1 }`;
    // const currentDay = `${date.getDate()}`;
    // const currentHour = `${date.getHours()}`;
    // const currentMinute = `${date.getMinutes()}`;
    // const currentSecond = `${date.getSeconds()}`;
    // const currentDate =    `${currentYear}/${currentMonth}/${currentDay} ${currentHour}:${currentMinute}:${currentSecond}`


    //console.log(currentDate);
    const didMount = useRef(false);
    const isCreated = useRef(false);

    useEffect (()=> {
        if (newPresentName.length == 0 && errorMess) {
          }
    },[newPresentName,errorMess]);

    useEffect (() => {
        if(didMount.current)
            setIsOpen(state);
        else 
            didMount.current = true;
    }, [state]);

 
    const handleCancel = () => {
        setIsOpen(false);
        setState(false);
    };

    const handleSubmit = () => {
     
        ServiceGroupCreateNewPresentation(group, token,newPresentName, setCreateState, createNewPresentation);
        // setMyPresentOwner("asc");
        // setMyPresentModifiedDay("12/12/2002");
        // setMyPresentCreatedDay(currentDate);
       // setNewPresent({myPresentID,myPresentName,myPresentOwner, currentDate});
        
        setIsOpen(false);
        setState(false);

        // const token = localStorage.getItem("token");
        // await axios.post(
        //     `${API_URL}presentation/create`,
        //     { name: newPresentName, created_at: currentDate, group_id: group_id },
        //     {
        //       headers: {
        //         Authorization: `Bearer ${token}`
        //       }
        //     }
        //   );
      
        // window.location.reload();

    }

    return (
       
        <div>
           
            <Dialog open={isOpen}>
                  <DialogTitle className='dialog__tilte'>Create new presentation</DialogTitle>
                  <DialogContent>
                        <TextField className='dialog__textField'
                            
                            autoFocus
                            margin='dense'
                            id="myname"
                            label="Presentation name"
                            fullWidth
                            variant='standard'
                            helperText={errorMess} 
                            onChange={(value) => setNewPresentName(value.target.value)}
                        />
                        
                    <DialogActions>
                        <Button className='dialog__Btn dialog__cancleBtn' onClick={handleCancel}>Cancel </Button> 
                        <Button  className='dialog__Btn dialog__SubmitBtn' onClick={handleSubmit}> Create Presentation</Button>
                    </DialogActions>                        
                  </DialogContent>
            </Dialog>

           
          

        </div>
    )
}