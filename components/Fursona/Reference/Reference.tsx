import React from "react";
import { Typography } from "@mui/material";
import { Grid, Paper } from "@mui/material";
import { useState } from "react";
import ColorPalette from "./ColorPalette";
import { useRouter } from "next/router";
import Canvas from "./Canvas";

interface Color {
  name: string;
  hex: string;
}
export default function Reference() {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState<Color>({
    name: "",
    hex: "",
  });

  return (
    <Paper sx={{ p: 2 }}>
      <Grid id="reference" container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2" textAlign="center">
            Teko Fresnes Xaiden
          </Typography>
          <Typography variant="body1" textAlign="center">
            Arctic Fox
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          {selectedColor.name == "" ? (
            <img
              src={process.env.PUBLIC_URL + "img/ref/ref.png"}
              width="100%"
            />
          ) : (
            <Canvas
              src={process.env.PUBLIC_URL + "img/ref/ref-views.png"}
              onClick={() => router.push("img/ref.png")}
              selectedColor={selectedColor}
            />
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <ColorPalette
            setSelectedColor={setSelectedColor}
            selectedColor={selectedColor}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}