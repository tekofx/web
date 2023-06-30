import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import routes from "../../routes.json";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import LanguageSelector from "../Language/LanguageSelector";
import { useRouter } from "next/router";
import getLang from "../Language/Lang";

export default function SimpleBottomNavigation() {
  const t = getLang().pages;

  const router = useRouter();
  const pages = [
    { id: 0, page: t.home, navigate: routes.home, icon: <HomeIcon /> },
    {
      id: 1,
      page: t.projects,
      navigate: routes.projects,
      icon: <AccountTreeIcon />,
    },
    {
      id: 2,
      page: t.gallery,
      navigate: routes.gallery,
      icon: <CollectionsIcon />,
    },
    { id: 3, page: "Fursona", navigate: routes.fursona, icon: <PetsIcon /> },

    { id: 4, page: t.about, navigate: routes.about, icon: <InfoIcon /> },
  ];

  const [value, setValue] = useState(getIdFromPath(router.pathname));

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

  const onClick = (page) => {
    setValue(page.id);
    router.push(page.navigate);
  };


  useEffect(() => {
    const handleRouteChange = (url) => {
      var id = getIdFromPath(url);
      setValue(getIdFromPath(url));
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Box sx={{ width: 500, zIndex: 20 }}>
      <BottomNavigation
        showLabels
        value={value}

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
            onClick={() => onClick(page)}

          />
        ))}
        <LanguageSelector />
      </BottomNavigation>
    </Box>
  );
}
