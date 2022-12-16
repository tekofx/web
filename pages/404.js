import { Box, Grid, Typography, Alert, Avatar } from "@mui/material"
import { motion } from "framer-motion"

export default function FourOhfour() {
    return (
        <Box height="1000px">
            <Grid container justifyContent="center" alignItems="center" spacing={2}>

                <Grid item xs={10} sm={10} md={8} lg={3}>
                    <Avatar
                        component={motion.div}
                        alt="Remy Sharp"
                        src={process.env.PUBLIC_URL + "img/logo-color.png"}
                        sx={{ width: "100%", height: "auto" }}
                        animate={{
                            rotate: [0, 0, 360, 360, 0],
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 1],
                            repeat: Infinity,
                            repeatDelay: 1
                        }}
                    />


                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10}>
                    <Alert variant="filled" severity="error">This page could not be found.</Alert>
                </Grid>
            </Grid>
        </Box >
    )
}