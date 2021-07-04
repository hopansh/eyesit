import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { SwipeableDrawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import TrendingUp from "@material-ui/icons/TrendingUp";
import NewReleases from "@material-ui/icons/NewReleases";
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
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const [value, setValue] = React.useState(0);
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/trending" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/latest" && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === "/contact" && value !== 3) {
      setValue(3);
    }
  }, [value]);

  const tabs = (
    <React.Fragment>
      <Tabs
        variant="scrollable"
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
      >
        <Tab className={classes.tab} label="Home" component={Link} to="/" />
        <Tab
          className={classes.tab}
          label="Trending"
          component={Link}
          to="trending"
        />
        <Tab
          className={classes.tab}
          label="Latest"
          component={Link}
          to="latest"
        />
        <Tab
          className={classes.tab}
          label="Contact"
          component={Link}
          to="contact"
        />
      </Tabs>
    </React.Fragment>
  );
  const list = (
    <List aria-labelledby="nested-list-subheader" style={{width:"70vw"}}>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="trending">
        <ListItemIcon>
          <TrendingUp />
        </ListItemIcon>
        <ListItemText primary="Trending" />
      </ListItem>
      <ListItem button component={Link} to="latest">
        <ListItemIcon>
          <NewReleases />
        </ListItemIcon>
        <ListItemText primary="Latest" />
      </ListItem>
      <ListItem button component={Link} to="contact">
        <ListItemIcon>
          <AccountCircle />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );
  const drawer = (
    <React.Fragment>
      <SwipeableDrawer
        disableBackdropTransition={iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
      >
        {list}
      </SwipeableDrawer>
      <IconButton
        aria-label=""
        onClick={() => setOpenDrawer(!openDrawer)}
        className={classes.tabContainer}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <AppBar position="sticky" color="primary">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            onClick={() => setValue(0)}
            disableRipple
          >
            <Typography variant="h4" className={classes.logo}>
              EYES-IT
            </Typography>
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
