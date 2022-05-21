import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(color, part, hex, rgb) {
    return { color, part, hex, rgb };
}

const rows = [
    createData(<Paper sx={{ bgcolor: "green" }}>a</Paper>, 'Fur1', 1, '#f5f5f5'),
    createData(<Paper sx={{ bgcolor: "green" }}>a</Paper>, 'Fur2', 2, '#f5f5f5'),
    createData(<Paper sx={{ bgcolor: "green" }}>a</Paper>, 'Fur3', 3, '#f5f5f5'),
    createData(<Paper sx={{ bgcolor: "green" }}>a</Paper>, 'Hair1', 4, '#f5f5f5'),
    createData(<Paper sx={{ bgcolor: "green" }}>a</Paper>, 'Hair2', 5, '#f5f5f5'),
    createData(<Paper sx={{ bgcolor: "green" }}>a</Paper>, 'Body', 6, '#f5f5f5'),
    createData(<Paper sx={{ bgcolor: "green" }}>a</Paper>, 'Legs', 7, '#f5f5f5'),
    createData(<Paper sx={{ bgcolor: "green" }}>a</Paper>, 'Feet', 8, '#f5f5f5'),

];

export default function DenseTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Color</TableCell>
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
                            <TableCell>{row.color}</TableCell>
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
