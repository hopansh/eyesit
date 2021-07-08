import { createMuiTheme } from "@material-ui/core";
export default createMuiTheme({
  palette: {
    primary: {
      main: "#FFA62B",
    },

    secondary: {
      main: "#ffffff",
    },
  },
  typography: {
    h4: {
      fontWeight: 300,
      marginLeft: "0.5rem",
    },
    tab: {
      fontSize: "1rem",
      fontWeight: 400,
      minWidth: 10,
    },
  },
  overrides: {
    MuiBottomNavigation: {
      root: {
        width:"100%",
        position: "absolute",
        bottom: "0",
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: "#custom color",
        "&$checked": {
          color: "black",
        },
      },
    },

    MuiBottomNavigationAction: {
      root: {
        padding: 0,
        color: "black",
        "&$selected": {
          color: "orange",
        },
      },
    },
  },
});
