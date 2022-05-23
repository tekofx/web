import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Typography } from '@mui/material';

export default function BasicList(props) {
    const [hover, setHover] = useState(false);

    function toggleHover() {
        setHover(!hover);
    }


    return (
        <Grid xs={12} sm={12} md={12} lg={12} xl={12} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            {hover ?
                <Paper sx={{
                    width: "90%",
                    marginLeft: "5%",
                    marginRight: "5%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    height: 40,
                    backgroundColor: '#4a5359',
                }} >
                    <Typography variant="colorSquareText" sx={{ color: props.color }}>{props.text}</Typography>
                </Paper>
                :

                <Paper sx={{
                    width: "90%",
                    marginLeft: "5%",
                    marginRight: "5%",

                    height: 40,
                    backgroundColor: props.color,
                }} />
            }

        </Grid>
    );
}
