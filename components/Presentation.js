import { Grid, Avatar, Typography, Box, Stack } from "@mui/material";
import Chip from "./Chip";
import { useRouter } from "next/router";

export default function Presentation() {
    const router = useRouter();

    return (
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

                    <Avatar sx={{ width: 400, height: 400 }} src="img/avatar.jpg" />
                </Box>
                <Typography align="center" variant="h2">Hello, I'm Teko an arctic foxxo</Typography>
                <Typography align="center" variant="h3">I love waffles</Typography>



            </Grid>
            <Grid item lg={12}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack direction="row" spacing={7}

                    >
                        <Chip text="Recent Blog Posts" onClick={() => router.push("/blog")} />
                        <Chip text="My Fursona" onClick={() => router.push("/fursona")} />

                    </Stack>
                </Box>
            </Grid>



        </Grid>
    )

}