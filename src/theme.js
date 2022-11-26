import { Roboto } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const fonts = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ['"Segoe UI"', "Roboto", '"Helvetica Neue"', "Arial"],
});

// Create a theme instance.
var Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0099b2",
    },
    secondary: {
      main: "#edf069",
    },
    background: {
      main: "#303030",
    },
    error: {
      main: "#f0a19c",
    },
    info: {
      main: "#259bf9",
    },
  },
  components: {
    MuiAvatar: {
      variants: [
        {
          props: { variant: "logo" },
          style: {
            width: "10%",
            height: "auto",
            maxWidth: "10%",
            maxHeight: "10%",
          },
        },
      ],
    },
    MuiAppBar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          background: "#2B2B2B",
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: "#383838",
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingBottom: "0px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "white",
          fontWeight: "bold",
          fontSize: "1.2rem",
          textTransform: "none",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: "#e0e0e0",
        },
      },
    },
  },
  typography: {
    fontFamily: fonts,

    appBar: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#fff",
      fontStyle: "italic",
      textDecoration: "none",
    },
  },
});

/* These atrributes overrides the top attributes*/
Theme.typography.h1 = {
  fontSize: "2.5rem",
  color: "#fff",
  paddingBottom: "0.5rem",
  paddingTop: "0.5rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "3rem",
    paddingBottom: "1rem",
    paddingTop: "1rem",
  },
};

Theme.typography.h2 = {
  color: "#fff",

  fontSize: "2rem",
  paddingBottom: "0.1rem",
  paddingTop: "0.1rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "2.5rem",
    paddingBottom: "0.2rem",
    paddingTop: "0.2rem",
  },
};

Theme.typography.h3 = {
  color: "#fff",

  fontSize: "1.5rem",
  paddingBottom: "0.2rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "2rem",
    paddingBottom: "0.4rem",
  },
};

Theme.typography.h4 = {
  color: "#fff",

  fontSize: "1.2rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "1.3rem",
    paddingBottom: "0.0rem",
    paddingTop: "0.0rem",
  },
};

Theme.typography.body1 = {
  color: "#fff",

  fontSize: "1.2rem",
  textAlign: "justify",
  paddingBottom: "0.2rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "1.2rem",
    paddingBottom: "0.4rem",
  },
};

Theme.typography.body2 = {
  color: "#fff",

  fontSize: "1rem",

  "@media (min-width:600px)": {
    fontSize: "0.8rem",
  },
  [Theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

// Presentation Card text
Theme.typography.card_name = {
  color: "#000",

  fontSize: "1.8rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "1.8rem",
  },
};

Theme.typography.card_headline = {
  color: "#889ac5",

  fontSize: "0.8rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "0.8rem",
  },
};

Theme.typography.card_value = {
  color: "#000",

  fontSize: "1rem",

  [Theme.breakpoints.up("md")]: {
    fontSize: "1rem",
  },
};

//Theme = responsiveFontSizes(Theme);

export default Theme;