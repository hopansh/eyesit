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
  //   tab: {
  //     root: {
  //       fontWeight: 300,
  //     },
  //   },
});
