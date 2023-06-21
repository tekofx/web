import React from "react";
import { Typography } from "@mui/material";
import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import ColorPalette from "./ColorPalette";
import getLang from "../../Language/Lang";
import { useRouter } from "next/router";
import Canvas from "../../Canvas";
import ColorDetails from "./ColorDetails";
export default function Reference() {
  const t = getLang().fursona;
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("");


  return (
    <Paper sx={{ p: 2 }}>

      <Grid id="reference" container spacing={2} >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2" textAlign="center">Teko Fresnes Xaiden</Typography>
          <Typography variant="body1" textAlign="center">{t.text}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>

          {selectedColor == "" ?
            <img src={process.env.PUBLIC_URL + "img/ref/ref.png"} width="100%" />
            :
            <Canvas
              align="left"
              src={process.env.PUBLIC_URL + "img/ref/ref-views.png"}
              width={"100%"}
              onClick={() => router.push("img/ref.png")}
              selectedColor={selectedColor}
            />
          }


        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ColorPalette setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        </Grid>

        {/*  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ColorDetails selectedColor={selectedColor} />
        </Grid> */}

      </Grid>
    </Paper>
  );
}

