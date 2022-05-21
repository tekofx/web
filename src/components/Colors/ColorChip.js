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




export default function DenseTable(props) {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(window.location.toString())
    }
    const label = props.label
    const color = props.color


    return (
        <><Chip sx={{ bgcolor: color }} label={props.label} size='small' onClick={handleClick} />
            <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={2000}
                message="Copied to clipboard"
            /></>
    )
}
