import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import routes from "../../routes.json";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import LanguageSelector from "../Language/LanguageSelector";
import { useRouter } from "next/router";
import getLang from "../Language/Lang";
import { motion } from "framer-motion";
import { Stack } from "@mui/material";

const ResponsiveAppBar = () => {
  const router = useRouter();
  const t = getLang().pages;

  const pages = [
    { page: t.home, navigate: routes.home, icon: <HomeIcon /> },
    {
      page: t.projects,
      navigate: routes.projects,
      icon: <AccountTreeIcon />,
    },
    {
      page: t.gallery,
      navigate: routes.gallery,
      icon: <CollectionsIcon />,
    },
    { page: "Fursona", navigate: routes.fursona, icon: <PetsIcon /> },

    { page: t.about, navigate: routes.about, icon: <InfoIcon /> },
  ];

  return (
    <AppBar
      position="sticky"
      sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block" } }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/*Desktop Menu*/}
          <Avatar src={process.env.PUBLIC_URL + "img/logo.png"} />

          <Stack
            direction="row"
            sx={{
              paddingLeft: 1,
              flexGrow: 1,
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                // @ts-ignore
                component={motion.div}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                key={page.page}
                size="small"
                sx={{
                  marginRight: 2,
                  backgroundColor:
                    router.asPath === page.navigate
                      ? "rgba(255,255,255)"
                      : "rgb(255, 255, 255, 0)",
                  color:
                    router.asPath === page.navigate
                      ? "rgb(0,0,0)"
                      : "rgba(255,255,255)",
                  "&:hover": {
                    backgroundColor: "white",
                    color: "black",
                  },
                }}
                onClick={() => router.push(page.navigate)}
                startIcon={page.icon}
              >
                {page.page}
              </Button>
            ))}
          </Stack>

          <LanguageSelector />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
