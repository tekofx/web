import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, ThemeProvider, Grid, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";

import Theme from "../../src/theme";

export default function AnimatedCard(props) {
  return (
    <ThemeProvider theme={Theme}>

      <Card component={motion.div}
        onClick={() => window.open(props.url)}
        whileHover={{ scale: 1.080, backgroundColor: "white", color: "black" }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        sx={{ bgcolor: Theme.palette.background.paper, width: "100%", padding: 1, cursor: "pointer" }}
      >

        <Grid container spacing={1}>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <SvgIcon>{props.icon}</SvgIcon>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <b>
              <p style={{ padding: 0, margin: 0 }}>{props.content}</p>
            </b>
            <p style={{ padding: 0, margin: 0, fontSize: "70%" }}>
              {props.subContent}
            </p>
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            lg={2}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <ArrowForwardIcon />
          </Grid>
        </Grid>
      </Card>
    </ThemeProvider>
  );
}
