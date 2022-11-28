import * as React from "react";
import { Typography, Box, Grid } from "@mui/material";
import routes from "../routes.json";
import Link from "next/link";
import Twitter from "./Animated/Icons/Twitter";
import Github from "./Animated/Icons/Github";
import Mastodon from "./Animated/Icons/Mastodon";
import FurAffinity from "./Animated/Icons/FurAffinity";
import Deviantart from "./Animated/Icons/Deviantart";

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
            <a href="google.es" style={{ textDecoration: "none" }}>

              <Typography align="right" variant="body2" >
                Website source code
              </Typography>
            </a>

          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography align="right" variant="body2">
              Teko's Tundra {year}{" "}
              {/**TODO: Add first commit year */}
            </Typography>

          </Grid>

        </Grid>

      </Grid>
    </Grid >

  );
}
