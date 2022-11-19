import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
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
  const [anchorElNav, setAnchorElNav] = React.useState(null);
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

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
            <Avatar src="logo.png" />

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
                    display: "block",
                    "&:hover": {
                      background: "#a8a8a8",
                    },
                  }}
                >
                  <IconButton sx={{ color: "white" }}>{page.icon}</IconButton>
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
