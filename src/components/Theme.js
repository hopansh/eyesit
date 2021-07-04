import { createMuiTheme } from "@material-ui/core";
export default createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
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
        justifyContent:"space-evenly",
        alignItems:"center",
        height:"9vh",
      },
    },
    MuiBottomNavigationAction: {
      root: {
        padding:0,
        color:"black",
        "&$selected": {
          color:"orange"
        },
      },
    },
  },
});
