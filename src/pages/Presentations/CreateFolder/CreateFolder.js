import {Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import '../../../style/DialogCustom.css'

export default function CreateFolder ({state, setState, setNewFolder}) {
   const [isOpen, setIsOpen] = useState(state);
   const [newFoderName, setNewFolderName] = useState("");
   const [createState, setCreateState] = useState(false);

   const didMount = useRef(false);
   useEffect (() => {
        if (didMount.current)
            setIsOpen(state);
        else    
            didMount.current = true;
   }, [state]);

   const handleCancel = () => {
        setIsOpen(false);
        setState(false);
   }
   const handleSubmit = () => {
        setIsOpen(false);
        setState(false);
   }
    return (
        <div>
            <Dialog open={isOpen}>
                <DialogTitle className="dialog__tiltle">Create New Folder</DialogTitle>
                <DialogContent>
                    <TextField className="dialog__textField"
                        autoFocus
                        margin = "dense"
                        id = "name"
                        label = "Folder name"
                        fullWidth
                        variant = "standard"
                        onChange = {(value) => setNewFolderName(value.target.value)}
                    />
                    <DialogActions>
                        <Button className="dialog__Btn dialog__cancleBtn" onClick={handleCancel}>Cancel</Button>
                        <Button className="dialog__Btn dialog__SubmitBtn" onClick={handleSubmit}>Create Folder </Button> 
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    )
}