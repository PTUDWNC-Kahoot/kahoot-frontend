
import { useEffect, useRef, useState} from 'react';
import { Dialog, DialogActions, DialogContent, TextField } from "@mui/material";
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from 'semantic-ui-react';
import '../../../style/DialogCustom.css'
export default function CreatePresentation ({state, setState, setNewPresent}) {
  
    const [isOpen, setIsOpen] = useState (state);
    const [newPresentName, setNewPresentName] = useState('');
    const [createState, setCreateState] = useState(false);
    const didMount = useRef(false);

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
                            id="name"
                            label="Presentation name"
                            fullWidth
                            variant='standard'
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