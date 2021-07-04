import { createMuiTheme } from "@material-ui/core";
export default createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    h4: {
      fontWeight: 300,
      marginLeft:"0.5rem",
    },
    tab:{
        fontSize:"1rem",
        fontWeight:400,
        minWidth:10,
    }
  },
//   tab: {
//     root: {
//       fontWeight: 300,
//     },
//   },
});
