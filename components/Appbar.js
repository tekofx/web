import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { ThemeProvider } from "@mui/material";
import Theme from "../src/theme";
import { useTranslation } from "react-i18next";
import Twitter from "./Animated/Icons/Twitter";
import Mastodon from "./Animated/Icons/Mastodon";
import Github from "./Animated/Icons/Github";
import routes from "../routes.json";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";
import { useRouter } from "next/router";

const ResponsiveAppBar = () => {
  const router = useRouter();

  const { t } = useTranslation("pages");
  const pages = [
    { page: t("home"), navigate: routes.home, icon: <HomeIcon /> },
    {
      page: t("projects"),
      navigate: routes.projects,
      icon: <AccountTreeIcon />,
    },
    {
      page: t("gallery"),
      navigate: routes.gallery,
      icon: <CollectionsIcon />,
    },
    { page: "Fursona", navigate: routes.fursona, icon: <PetsIcon /> },

    { page: t("about"), navigate: routes.about, icon: <InfoIcon /> },
  ];

  return (
    <ThemeProvider theme={Theme}>
      <AppBar
        position="sticky"
        sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/*Desktop Menu*/}
            <Avatar src="img/logo.png" />

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.page}
                  size="small"
                  sx={{
                    color: "white",
                    marginRight: "1%",
                    "&:hover": {
                      background: "#a8a8a8",
                    },
                  }}
                  onClick={() => router.push(page.navigate)}
                  startIcon={page.icon}
                >
                  {page.page}
                </Button>
              ))}
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
              }}
            >
              <Twitter />
              <Mastodon />
              <Github />
            </Box>

            <LanguageSelector />
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
