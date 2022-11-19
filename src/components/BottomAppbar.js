import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import routes from "../routes.json";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import LanguageSelector from "./LanguageSelector";

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
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

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          display: { md: "none", lg: "none" },
        }}
      >
        {pages.map((page, key) => (
          <BottomNavigationAction
            key={key}
            label={page.page}
            onClick={function (event) {
              navigate(page.navigate);
            }}
            icon={page.icon}
          />
        ))}
        <LanguageSelector />
      </BottomNavigation>
    </Box>
  );
}
