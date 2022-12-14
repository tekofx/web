import { Paper, Typography } from "@mui/material"
export default function Curiosities() {
    return (
        <Paper sx={{ paddingLeft: 2, paddingRight: 2 }}>
            <Typography variant="h2">Curiosities</Typography>

            <ul>
                <Typography variant="body1">Curiosity 1</Typography>
                <Typography variant="body1">Fugiat voluptate eiusmod ullamco irure minim deserunt nulla eiusmod nisi tempor nostrud.</Typography>
                <Typography variant="body1">Curiosity 3</Typography>
                <Typography variant="body1">Curiosity 4</Typography>
            </ul>
        </Paper>
    )
}