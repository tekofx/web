import * as React from "react";
import { Typography, Box, Grid } from "@mui/material";
import Twitter from "../Icons/Twitter";
import Github from "../Icons/Github";
import Mastodon from "../Icons/Mastodon";
import FurAffinity from "../Icons/FurAffinity";
import Deviantart from "../Icons/Deviantart";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginBottom: "2%", marginTop: "2%" }}
    >
      <Grid item lg={6}>

        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
        >
          <Twitter />
          <Mastodon />
          <Github />
          <Deviantart />
          <FurAffinity />
        </Box>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <Grid container justifyContent="flex-end" alignItems="right">

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <a href="https://github.com/tekofx/web" style={{ textDecoration: "none" }}>

              <Typography align="right" variant="body2" >
                &lt;Website source code&gt;
              </Typography>
            </a>

          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography align="right" variant="body2">
              Teko's Tundra {2022 > year ? `${2022}-` : ""}{year}
            </Typography>

          </Grid>

        </Grid>

      </Grid>
    </Grid >

  );
}
