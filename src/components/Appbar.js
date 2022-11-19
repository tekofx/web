import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { ThemeProvider } from "@mui/material";
import Theme from "../Theme";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import Twitter from "./Animated/Icons/Twitter";
import Mastodon from "./Animated/Icons/Mastodon";
import Github from "./Animated/Icons/Github";
import routes from "../routes.json";
import Cookies from "universal-cookie";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";

const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const pages = [
    { page: t("pageHome"), navigate: routes.home, icon: <HomeIcon /> },
    {
      page: t("pageProjects"),
      navigate: routes.projects,
      icon: <AccountTreeIcon />,
    },
    {
      page: t("pageGallery"),
      navigate: routes.gallery,
      icon: <CollectionsIcon />,
    },
    { page: "Fursona", navigate: routes.fursona, icon: <PetsIcon /> },

    { page: t("pageAbout"), navigate: routes.about, icon: <InfoIcon /> },
  ];

  const changeLanguageHandler = (value) => {
    const cookies = new Cookies();
    cookies.set("lang", value);
    i18n.changeLanguage(value);
  };

  return (
    <ThemeProvider theme={Theme}>
      <AppBar
        position="sticky"
        sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/*Desktop Menu*/}
            <Avatar src="logo.png" sx={{ paddingRight: "2%" }} />

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "flex", md: "flex" },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.page}
                  onClick={function (event) {
                    navigate(page.navigate);
                  }}
                  size="small"
                  sx={{
                    color: "white",
                    marginRight: "1%",
                    "&:hover": {
                      background: "#a8a8a8",
                    },
                  }}
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

            <Box
              sx={{
                display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
              }}
            >
              <Button onClick={() => changeLanguageHandler("es")}>ESP</Button>
              <Button onClick={() => changeLanguageHandler("en")}>ENG</Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;
