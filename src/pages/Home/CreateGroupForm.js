import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useRef, useState} from 'react';
import CreateNewGroup from '../../service/CreateNewGroup';
import { Snackbar } from '@mui/material';
import { useAuth } from '../../context/AuthProvider';

export default function FormDialog({ state, setState, createGroup }) {
  const [open, setOpen] = useState(state);
  const [newGroupName, setNewGroupName] = useState('');
  const didMount = useRef(false);
  const [createState, setCreateState] = useState(false);
  const {token} = useAuth()

  useEffect(() => {
    if (didMount.current) setOpen(state);
    else didMount.current = true;
  }, [state]);



  const handleClose = () => {
    setOpen(false);
    setState(false)
  };

  const handleSubmit = () => {
    setOpen(false);
    setState(false);
    CreateNewGroup(token,newGroupName, setCreateState, createGroup);
  };

  return (
    <div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create new group</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your group will be created and you are the owner.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Group's Name"
            fullWidth
            variant="standard"
            onChange={(value) =>setNewGroupName(value.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
            message="Create group successfully"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            autoHideDuration={2000}
            open={createState}
            onClose={() => setCreateState(false)}
          />
    </div>
  );
}