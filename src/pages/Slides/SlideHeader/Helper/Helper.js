import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useRef, useState } from 'react';

export default function Helper({ state, setState }) {
    const [open, setOpen] = useState(state);
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
    };

    return (
        <div>

            <Dialog open={open} onClose={handleClose} maxWidth="xl" >
                <DialogActions>
                    <Button onClick={handleClose}>X</Button>
                </DialogActions>
                <iframe
                    id="video"
                    height={540}
                    width={960}
                    src={"https://player.vimeo.com/video/332646721"}
                    allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </Dialog>

        </div>
    );
}