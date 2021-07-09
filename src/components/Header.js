import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useDispatch } from "react-redux";
const useStyles = makeStyles((theme) => ({
  logo: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2rem",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    marginRight: "0.5rem",
  },
  button: {
    borderRadius: "2rem",
    textTransform: "none",
  },
}));
function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    dispatch({
      type: "PAGE",
      payload: event.target.outerText,
    });
    setValue(newValue);
  };

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar disableGutters>
        <Button
          component={Link}
          to="/"
          onClick={() => handleChange({target:{outerText:"HOME"}},0)}
          disableRipple
        >
          <Typography variant="h4" className={classes.logo}>
            Vista
          </Typography>
        </Button>
        {matches ? null : (
          <Tabs
            variant="scrollable"
            className={classes.tabContainer}
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
          >
            <Tab className={classes.tab} label="Home" />
            <Tab className={classes.tab} label="Trending" />
            <Tab className={classes.tab} label="Latest" />
            <Tab className={classes.tab} label="Contact" />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
