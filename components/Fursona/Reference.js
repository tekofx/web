import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ColorsTable from "./Colors/ColorsTable";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import ColorPalette from "./Colors/ColorPalette";
import getLang from "../Language/Lang";
import { useRouter } from "next/router";


export default function Reference() {
  const t = getLang().fursona;
  const router = useRouter();


  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <br />
        <Typography variant="h2">Reference</Typography>
        <Typography variant="body1">{t.text}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
        <img
          align="left"
          src="img/ref-small.jpg"
          alt=""
          width={"100%"}
          onClick={() => router.push("img/ref.png")}
        />

      </Grid>
      <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
        <Typography variant="h3">Color Reference</Typography>
        <ColorPalette />
        <ColorsTable />
        <br />
      </Grid>
    </Grid>
  );
}
