import { Grid, Avatar, Typography, Box, Stack, Paper } from "@mui/material";
import Chip from "./Chip";
import { useRouter } from "next/router";
import Snow from "./Snow";
import getLang from "./Language/Lang";

export default function Presentation() {
    const router = useRouter();
    const t = getLang().presentation;


    return (
        <Paper sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 2 }} >
            <Grid container spacing={4}
                direction="row"
                alignItems="center"
                justifyContent="center" >

                <Grid item lg={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >

                        <Avatar sx={{ width: 400, height: 400 }} src={process.env.PUBLIC_URL + "img/avatar.jpg"} />
                    </Box>
                    <Typography align="center" variant="h2">{t.title}</Typography>
                    <Typography align="center" variant="h3">{t.text}</Typography>



                </Grid>
                <Grid item lg={12}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Stack direction="row" spacing={7}

                        >
                            <Chip text={t.projects} onClick={() => router.push("/projects")} />
                            <Chip text={t.fursona} onClick={() => router.push("/fursona")} />

                        </Stack>
                    </Box>
                </Grid>



            </Grid>
        </Paper>
    )

}