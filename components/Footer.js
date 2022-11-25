import * as React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";
import routes from "../routes.json";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingBottom: "2%", paddingTop: "2%" }}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography display="inline" variant="body2">
          T
        </Typography>
        <Link href="/experimental">
          <Typography display="inline" variant="body2">
            e
          </Typography>
        </Link>
        <Typography display="inline" variant="body2">
          ko's Tundra {year}{" "}
        </Typography>
      </Grid>
    </Grid>
  );
}
