import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import routes from "../routes.json";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";

export default function SimpleBottomNavigation() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  const { t, i18n } = useTranslation();

  const pages = [
    { page: t("pageHome"), navigate: routes.home, icon: "" },
    { page: t("pageProjects"), navigate: routes.projects },
    { page: t("pageGallery"), navigate: routes.gallery },
    { page: "Fursona", navigate: routes.fursona },

    { page: t("pageAbout"), navigate: routes.about },
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
        {pages.map((page) => (
          <BottomNavigationAction
            label={page.page}
            onClick={function (event) {
              navigate(page.navigate);
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}
