import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import routes from "../routes.json";
import { useTranslation } from "react-i18next";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import LanguageSelector from "./LanguageSelector";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SimpleBottomNavigation() {
  const { t } = useTranslation("pages");
  const router = useRouter();
  const pages = [
    { id: 0, page: t("home"), process.env.BACKEND_URL + navigate: routes.home, icon: <HomeIcon /> },
    {
      id: 1,
      page: t("projects"),
      process.env.BACKEND_URL + navigate: routes.projects,
      icon: <AccountTreeIcon />,
    },
    {
      id: 2,
      page: t("gallery"),
      process.env.BACKEND_URL + navigate: routes.gallery,
      icon: <CollectionsIcon />,
    },
    { id: 3, page: "Fursona", process.env.BACKEND_URL + navigate: routes.fursona, icon: <PetsIcon /> },

    { id: 4, page: t("about"), process.env.BACKEND_URL + navigate: routes.about, icon: <InfoIcon /> },
  ];

  const [value, setValue] = React.useState(getIdFromPath(router.pathname));

  function getIdFromPath(path) {
    var array = pages.filter(function (page) {
      return page.navigate === path;
    });
    if (array.length !== 0) {
      array = array[0];
      return array.id;
    } else {
      return 0;
    }
  }

  return (
    <Box sx={{ width: 500, zIndex: 20 }}>
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
          display: { sx: "block", md: "none", lg: "none" },
        }}
      >
        {pages.map((page, key) => (
          <BottomNavigationAction
            key={key}
            label={page.page}
            icon={page.icon}
            onClick={() => router.push(page.navigate)}
          />
        ))}
        <LanguageSelector />
      </BottomNavigation>
    </Box>
  );
}
