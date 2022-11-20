import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import ColorsTable from "./Colors/ColorsTable";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Dialog } from "@mui/material";
import Slide from "@mui/material/Slide";
import ColorPalette from "./Colors/ColorPalette";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Reference() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <br />
        <Typography variant="h2">Reference</Typography>
        <Typography variant="body1">{t("aboutText5")}</Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={7} lg={8} xl={8}>
        <img
          align="left"
          src="ref-small.jpg"
          alt=""
          width={"100%"}
          onClick={toggleOpen}
        />
        <Dialog fullScreen TransitionComponent={Transition} open={open}>
          <img align="left" src="ref.png" alt="" onClick={toggleOpen} />
        </Dialog>
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
