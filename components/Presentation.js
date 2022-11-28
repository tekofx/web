import { Grid, Avatar, Chip, Typography, Box, Stack } from "@mui/material";


export default function Presentation() {
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
                        <Chip label="Recent Blog Posts" />
                        <Chip label="My Fursona" />
                    </Stack>
                </Box>
            </Grid>



        </Grid>
    )

}