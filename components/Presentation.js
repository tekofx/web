import { Grid, Avatar, Typography, Box, Stack, Paper } from "@mui/material";
import Chip from "./Chip";
import { useRouter } from "next/router";
import getLang from "./Language/Lang";
import { useMediaQuery } from "@mui/material";

export default function Presentation() {
    const router = useRouter();
    const t = getLang().presentation;
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'))


    return (
        <Paper sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 2 }} >
            <Grid container spacing={4}
                direction="row"
                alignItems="center"
                justifyContent="center" >

                <Grid item sx={7} lg={4}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Avatar sx={{ width: "100%", height: "auto" }} src={process.env.PUBLIC_URL + "img/avatar.jpg"} />
                    </Box>




                </Grid>
                <Grid item sx={12} lg={12}>
                    <Typography align="center" variant="h2">{t.title}</Typography>
                    <Typography align="center" variant="h3">{t.text}</Typography>
                </Grid>
                <Grid item>

                    <Stack direction={largeScreen ? "row" : "column"} spacing={2}>
                        <Chip text={t.projects} onClick={() => router.push("/projects")} />
                        <Chip text={t.fursona} onClick={() => router.push("/fursona")} />
                    </Stack>
                </Grid>




            </Grid>
        </Paper>
    )

}