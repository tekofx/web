import * as React from "react";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import SocialIcons from "./SocialIcons";
import { useNavigate } from "react-router";
import routes from "../routes.json";

export default function Footer() {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={2}
      sx={{ paddingBottom: "1%", paddingTop: "1%" }}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Typography display="inline" variant="body2">
          T
        </Typography>
        <Typography
          display="inline"
          variant="body2"
          onClick={function (event) {
            navigate(routes.experimental);
          }}
        >
          e
        </Typography>
        <Typography display="inline" variant="body2">
          ko's Tundra {year}{" "}
        </Typography>

        <SocialIcons />
      </Grid>
    </Grid>
  );
}
