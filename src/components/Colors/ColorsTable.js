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
import ColorChip from './ColorChip';

function createData(part, hex, rgb) {
    return { part, hex, rgb };
}



export default function DenseTable() {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(true)
        navigator.clipboard.writeText(window.location.toString())
    }


    const rows = [
        createData("Fur", <ColorChip label="45, 45, 45" color="#2d2d2d" />, <ColorChip label="#2d2d2d" color="#2d2d2d" />),
        createData("Fur2", <ColorChip label="160, 160, 160" color="#a0a0a0" />, <ColorChip label="#a0a0a0" color="#a0a0a0" />),
        createData("Fur3", <ColorChip label="247, 247, 247" color="#f7f7f" />, <ColorChip label="#f7f7f" color="#f7f7f" />),
        createData("Hair1", <ColorChip label="44, 125, 230" color="#2c7de6" />, <ColorChip label="#2c7de6" color="#2c7de6" />),
        createData("Hair2/Nails", <ColorChip label="0, 219, 255" color="#00dbff" />, <ColorChip label="#00dbff" color="#00dbff" />),
        createData("Paws/Ears", <ColorChip label="240, 161, 156" color="#f0a19c" />, <ColorChip label="#f0a19c" color="#f0a19c" />),
        createData("Eyes1", <ColorChip label="17, 181, 93" color="#11b55d" />, <ColorChip label="#11b55d" color="#11b55d" />),
        createData("Eyes2", <ColorChip label="226, 229, 101" color="#e2e565" />, <ColorChip label="#e2e565" color="#e2e565" />),

    ];


    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Part</TableCell>
                        <TableCell >HEX</TableCell>
                        <TableCell >RGB</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.part}
                            </TableCell>
                            <TableCell >{row.hex}</TableCell>
                            <TableCell >{row.rgb}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
