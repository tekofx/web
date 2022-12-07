import * as React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import Cookies from "universal-cookie";
import CheckIcon from "@mui/icons-material/Check";
export default function BasicMenu() {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguageHandler = (value) => {
    const cookies = new Cookies();
    cookies.set("lang", value);
    i18n.changeLanguage(value);
  };

  return (
    <div

    >
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
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
          onClick={function (event) {
            handleClose();
            changeLanguageHandler("es");
          }}
        >
          Español {i18n.language === "es" ? <CheckIcon /> : ""}
        </MenuItem>
        <MenuItem
          onClick={function (event) {
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
