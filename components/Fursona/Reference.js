import React from "react";
import { Typography } from "@mui/material";
import { Grid, Paper } from "@mui/material";
import ColorsTable from "./Colors/ColorsTable";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Slide from "@mui/material/Slide";
import ColorPalette from "./Colors/ColorPalette";
import getLang from "../Language/Lang";
import { useRouter } from "next/router";
import Image from "next/image";
import Canvas from "../Canvas";
import Alert from '@mui/material/Alert';

export default function Reference() {
  const t = getLang().fursona;
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("");


  return (
    <Paper sx={{ paddingLeft: 2, paddingRight: 2 }}>

      <Grid container spacing={2} >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">Reference</Typography>
          <Typography variant="body1">{t.text}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>

          {selectedColor == "" ?
            <img src={process.env.PUBLIC_URL + "img/ref-small.jpg"} width="100%" />
            :
            <Canvas
              align="left"
              src={process.env.PUBLIC_URL + "img/ref-small.jpg"}
              width={"100%"}
              onClick={() => router.push("img/ref.png")}
              selectedColor={selectedColor}
            />
          }


        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
          <Typography variant="h3">Color Reference</Typography>
          <Typography variant="body1">This palette highlights the color on the ref</Typography>
          <Alert severity="warning" variant="filled">Experimental. Could not work</Alert>
          <br />
          <ColorPalette setSelectedColor={setSelectedColor} />
          <ColorsTable />

          <br />
        </Grid>

      </Grid>
    </Paper>
  );
}

