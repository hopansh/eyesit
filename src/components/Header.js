import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import NavTabs from "./utilityComponents/header/NavTabs";
const useStyles = makeStyles((theme) => ({
  logo: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
}));
function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar disableGutters>
        <Button
          component={Link}
          to="/"
          // onClick={() => setValue(0)}
          disableRipple
        >
          <Typography variant="h4" className={classes.logo}>
            EYES-IT
          </Typography>
        </Button>
        {matches ? null : <NavTabs />}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
