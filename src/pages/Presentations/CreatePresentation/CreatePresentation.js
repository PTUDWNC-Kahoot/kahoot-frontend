
import { useEffect, useRef, useState} from 'react';
import { Dialog, DialogActions, DialogContent, Snackbar, TextField } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from 'semantic-ui-react';
import '../../../style/DialogCustom.css'
export default function CreatePresentation ({state, setState, setNewPresent}) {
  
    const [isOpen, setIsOpen] = useState (state);
    const [newPresentName, setNewPresentName] = useState("");
    const [createState, setCreateState] = useState(false);
    const [errorMess, setErrorMess] = useState("");
    const [myPresentID, setMyPresentID] = useState("");
    const [myPresentName, setMyPresentName] = useState ("");
    const [myPresentOwner, setMyPresentOwner] = useState("");
    const [myPresentModifiedDay, setMyPresentModifiedDay] = useState("");
    const [myPresentCreatedDay, setMyPresentCreatedDay] = useState("");

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
     
       
        setMyPresentID("12");
        setMyPresentName(newPresentName);
        setMyPresentOwner("asc");
        setMyPresentModifiedDay("12/12/2002");
        setMyPresentCreatedDay("20/12/2021");
        setNewPresent({myPresentID,myPresentName,myPresentOwner,myPresentCreatedDay,myPresentModifiedDay});
        
        setIsOpen(false);
        setState(false);

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