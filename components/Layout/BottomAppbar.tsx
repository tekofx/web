import { useState, useEffect } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import routes from "../../routes.json";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import { useRouter } from "next/router";
import { Stack } from "@mui/material";

interface Page {
  id: number;
  page: string;
  navigate: string;
  icon: JSX.Element;
}

export default function SimpleBottomNavigation() {
  const router = useRouter();

  const pages = [
    { id: 0, page: "Home", navigate: routes.home, icon: <HomeIcon /> },
    {
      id: 1,
      page: "Projects",
      navigate: routes.projects,
      icon: <AccountTreeIcon />,
    },
    {
      id: 2,
      page: "Gallery",
      navigate: routes.gallery,
      icon: <CollectionsIcon />,
    },
    { id: 3, page: "Fursona", navigate: routes.fursona, icon: <PetsIcon /> },

    { id: 4, page: "About", navigate: routes.about, icon: <InfoIcon /> },
  ];
  const [value, setValue] = useState<number>(getIdFromPath(router.pathname));

  function getIdFromPath(path: string) {
    // @ts-ignore
    var index = path.indexOf(process.env.PUBLIC_URL);
    var substring = path.substring(index);

    const page = pages.find(
      (page) => substring.includes(page.navigate) && page.navigate !== "/"
    );
    if (page) {
      return page.id;
    }
    return 0;
  }

  const onClick = (page: Page) => {
    setValue(page.id);
    router.push(page.navigate);
  };

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setValue(getIdFromPath(url));
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Stack direction="row" sx={{ width: 500, zIndex: 20 }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          display: "block",
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
      </BottomNavigation>
    </Stack>
  );
}
