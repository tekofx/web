import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Popover } from '@mui/material';
import Slide from '@mui/material/Slide';




export default function DenseTable(props) {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(props.label)
        console.log(props.label)
    }


    return (
        <><Chip sx={{ bgcolor: props.bgcolor }} label={props.label} size='small' onClick={handleClick} />
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                TransitionComponent={Slide}
                message="Copied to clipboard"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </>
    )
}
