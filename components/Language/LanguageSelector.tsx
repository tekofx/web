import { IconButton, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";
import CheckIcon from "@mui/icons-material/Check";
export default function BasicMenu() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguageHandler = (value: string) => {
    const cookies = new Cookies();
    cookies.set("lang", value);
    i18n.changeLanguage(value);
  };

  return (
    <div>
      <IconButton
        onMouseOver={(e) => handleClick(e)}
        onMouseLeave={() => handleClose}
      >
        <LanguageIcon color="primary" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            changeLanguageHandler("es");
          }}
        >
          Español {i18n.language === "es" ? <CheckIcon /> : ""}
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            changeLanguageHandler("en");
          }}
        >
          English{i18n.language === "en" ? <CheckIcon /> : ""}
        </MenuItem>
      </Menu>
    </div>
  );
}
