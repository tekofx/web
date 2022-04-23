import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import "./Colors.css"
import { Stack } from '@mui/material';

class Colors extends React.Component {
    constructor(props) {
        super();
    }

    render() {

        return (
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: "1%",
                        width: "80%",
                        height: "20%",
                    },
                }}
            >
                <Paper sx={{ backgroundColor: "#2d2d2d", justifyContent: "center" }} component={Stack} elevation={0} >
                    <p className='var'>Fur</p>
                </Paper>
                <Paper sx={{ backgroundColor: "#a0a0a0", justifyContent: "center" }} component={Stack} elevation={0} >
                    <p className='var'>Fur</p>
                </Paper>
                <Paper sx={{ backgroundColor: "#f7f7f7", justifyContent: "center" }} component={Stack} elevation={0} >
                    <p className='var'>Fur</p>
                </Paper>
                <Paper sx={{ backgroundColor: "#2c7de6", justifyContent: "center" }} component={Stack} elevation={0} >
                    <p className='var'>Hair</p>
                </Paper>
                <Paper sx={{ backgroundColor: "#00dbff", justifyContent: "center" }} component={Stack} elevation={0} >
                    <p className='var'>Hair/Nails</p>
                </Paper>
                <Paper sx={{ backgroundColor: "#f0a19c", justifyContent: "center" }} component={Stack} elevation={0} >
                    <p className='var'>Paws/Ears</p>
                </Paper>
                <Paper sx={{ backgroundColor: "#11b55d", justifyContent: "center" }} component={Stack} elevation={0} >
                    <p className='var'>Eyes</p>
                </Paper>
                <Paper sx={{ backgroundColor: "#e2e565", justifyContent: "center" }} component={Stack} elevation={0} >
                    <p className='var'>Eyes</p>
                </Paper>
            </Box >
        );

    }
}



export default Colors;