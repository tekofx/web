import { Typography, Stack } from "@mui/material";
import Twitter from "../Icons/Twitter";
import Github from "../Icons/Github";
import Mastodon from "../Icons/Mastodon";
import { AnimatedFuraffinity } from "../Icons/FurAffinity";
import Deviantart from "../Icons/Deviantart";
import { useState } from "react";

function FooterText() {
  const [year] = useState<number>(new Date().getFullYear());
  return (
    <Stack spacing={1} alignItems="center">
      <a
        href="https://github.com/tekofx/web"
        style={{ textDecoration: "none" }}
      >
        <Typography variant="body1">&lt;Website source code&gt;</Typography>
      </a>
      <Typography variant="body1">Teko&apos;s Tundra 2022 - {year}</Typography>
    </Stack>
  );
}

export default function Footer() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ paddingTop: 2, paddingBottom: 10 }}
    >
      <Stack
        direction="row"
        sx={{
          display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
        }}
      >
        <Twitter />
        <Mastodon />
        <Github />
        <Deviantart />
        <AnimatedFuraffinity />
      </Stack>
      <FooterText />
    </Stack>
  );
}
