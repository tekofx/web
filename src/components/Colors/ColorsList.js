import * as React from 'react';
import Grid from '@mui/material/Grid';
import ColorSquare from './ColorSquare';

export default function BasicList() {

    return (
        <Grid container spacing={2} sx={{ marginTop: "10" }}>
            <ColorSquare color="#2D2D2D" text="Fur" />
            <ColorSquare color="#A0A0A0" text="Fur2" />
            <ColorSquare color="#F7F7F7" text="Fur3" />
            <ColorSquare color="#2C7DE6" text="Hair1" />
            <ColorSquare color="#00DBFF" text="Hair2/Nails" />
            <ColorSquare color="#F0A19C" text="Paws/Ears" />
            <ColorSquare color="#11B55D" text="Eyes1" />
            <ColorSquare color="#E2E565" text="Eyes2" />
        </Grid>
    );
}
