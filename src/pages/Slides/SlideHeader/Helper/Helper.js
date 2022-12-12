import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

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

    return (
        <div>
            <Dialog open={open} onClose={handleClose} maxWidth="xl" >
                <DialogActions>
                    <IconButton onClick={handleClose}>
                        <CloseIcon fontSize='large'></CloseIcon>
                    </IconButton>
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