import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Paper, ThemeProvider, Grid, SvgIcon } from "@mui/material";
import { motion } from "framer-motion";

import Theme from "../../src/theme";

interface AnimatedCardProps {
  icon: any;
  content: string;
  subcontent: string;
  url: string;
}
export default function AnimatedCard({
  icon,
  content,
  subcontent,
  url,
}: AnimatedCardProps) {
  return (
    <ThemeProvider theme={Theme}>
      <Paper
        // @ts-ignore
        component={motion.div}
        onClick={() => window.open(url)}
        whileHover={{ scale: 1.08, backgroundColor: "white", color: "black" }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        sx={{
          bgcolor: Theme.palette.background.paper,
          width: "100%",
          padding: 1,
          cursor: "pointer",
        }}
      >
        <Grid container spacing={1} sx={{ paddingLeft: "2px" }}>
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
            <SvgIcon sx={{ marginLeft: "5%" }}>{icon}</SvgIcon>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}>
            <b>
              <p style={{ padding: 0, margin: 0 }}>{content}</p>
            </b>
            <p style={{ padding: 0, margin: 0, fontSize: "70%" }}>
              {subcontent}
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
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              paddingRight: "2%",
            }}
          >
            <ArrowForwardIcon />
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}
