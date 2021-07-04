import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
// import { SwipeableDrawer, IconButton } from "@material-ui/core";
// import MenuIcon from "@material-ui/icons/Menu";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
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
  // const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  // const list = (
  //   <List aria-labelledby="nested-list-subheader" style={{ width: "70vw" }}>
  //     <ListItem button component={Link} to="/">
  //       <ListItemIcon>
  //         <Home />
  //       </ListItemIcon>
  //       <ListItemText primary="Home" />
  //     </ListItem>
  //     <ListItem button component={Link} to="trending">
  //       <ListItemIcon>
  //         <TrendingUp />
  //       </ListItemIcon>
  //       <ListItemText primary="Trending" />
  //     </ListItem>
  //     <ListItem button component={Link} to="latest">
  //       <ListItemIcon>
  //         <NewReleases />
  //       </ListItemIcon>
  //       <ListItemText primary="Latest" />
  //     </ListItem>
  //     <ListItem button component={Link} to="contact">
  //       <ListItemIcon>
  //         <AccountCircle />
  //       </ListItemIcon>
  //       <ListItemText primary="Contact" />
  //     </ListItem>
  //   </List>
  // );
  // const drawer = (
  //   <React.Fragment>
  //     <SwipeableDrawer
  //       disableBackdropTransition={iOS}
  //       disableDiscovery={iOS}
  //       open={openDrawer}
  //       onClose={() => setOpenDrawer(false)}
  //       onOpen={() => setOpenDrawer(true)}
  //     >
  //       {list}
  //     </SwipeableDrawer>
  //     <IconButton
  //       aria-label=""
  //       onClick={() => setOpenDrawer(!openDrawer)}
  //       className={classes.tabContainer}
  //     >
  //       <MenuIcon />
  //     </IconButton>
  //   </React.Fragment>
  // );

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default Header;
