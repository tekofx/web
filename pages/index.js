import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import { useTranslation } from "next-i18next";
export default function Index() {
  const { t } = useTranslation("common");
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {t("title")}
        </Typography>
        <Link href="/about" color="secondary">
          {t("text")}
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
