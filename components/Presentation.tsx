import { Grid, Avatar, Typography, Stack, Paper, Theme } from "@mui/material";
import Chip from "./Chip";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";

export default function Presentation() {
  const router = useRouter();
  const largeScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.up("md")
  );

  return (
    <Paper sx={{ paddingLeft: 2, paddingRight: 2, paddingBottom: 2 }}>
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={7} lg={4}>
          <Stack display="flex" justifyContent="center" alignItems="center">
            <Avatar
              sx={{ width: "100%", height: "auto" }}
              src={process.env.PUBLIC_URL + "img/liss.png"}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Typography align="center" variant="h2">
            Hello, I'm Teko and arctic foxxo
          </Typography>
          <Typography align="center" variant="h3">
            I love waffles, photography and programming
          </Typography>
        </Grid>
        <Grid item>
          <Stack direction={largeScreen ? "row" : "column"} spacing={2}>
            <Chip text="Projects" onClick={() => router.push("/projects")} />
            <Chip text="Fursona info" onClick={() => router.push("/fursona")} />
          </Stack>
        </Grid>
      </Grid>
    </Paper>
  );
}
