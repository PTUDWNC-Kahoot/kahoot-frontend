import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useRef } from 'react';
export default function FormDialog({ state, setState }) {
  const [open, setOpen] = React.useState(state);
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) setOpen(state);
    else didMount.current = true;
  }, [state]);

  const handleClose = () => {
    setOpen(false);
    setState(false)
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
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}