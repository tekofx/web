import * as React from 'react';
import { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Chip from '@mui/material/Chip';
import Slide from '@mui/material/Slide';
import Alert from '@mui/material/Alert';


export default function DenseTable(props) {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(props.label)
        console.log(props.label)
    }


    return (
        <><Chip sx={{ bgcolor: props.bgcolor, color: props.color, minWidth: 95 }} label={props.label} size='small' onClick={handleClick} />
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                TransitionComponent={Slide}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
                <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
                    Copied to clipboard
                </Alert>
            </Snackbar>
        </>
    )
}
