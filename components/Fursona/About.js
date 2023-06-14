import { Paper, Typography } from "@mui/material";
import { RiPlantFill } from "react-icons/ri";
import { GrPersonalComputer } from "react-icons/gr";
import getLang from "../Language/Lang";


export default function About() {
    const t = getLang().fursona;
    return (
        <Paper sx={{ p: 2, height: "100%" }}>
            <Typography variant="h2">About</Typography>
            <Typography variant="body1" >

                {t.about}
            </Typography>

        </Paper>
    )
}