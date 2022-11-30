import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useRef, useEffect } from 'react';

export default function AlertDialog({state, setState, confirmDelete}) {
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

  const handleSubmit = () => {
    setOpen(false);
    setState(false);
    confirmDelete(true)
  };


  return (
    <div>
     
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to permanently delete this group?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Delete this group will delete all members and all kahoots of group.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
          <Button onClick={handleSubmit} >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}