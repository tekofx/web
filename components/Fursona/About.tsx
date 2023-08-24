import { Paper, Typography } from "@mui/material";

export default function About() {
  return (
    <Paper sx={{ p: 2, height: "100%" }}>
      <Typography variant="h2">About</Typography>
      <Typography variant="body1">
        Teko is an arctic fox who enjoys computers, plants and animals. Since he
        is an arctic fox he cannot stand high temperatures, but thanks to his
        ice powers, he can make it throught the summer.
      </Typography>
    </Paper>
  );
}
