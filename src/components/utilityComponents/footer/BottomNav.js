import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import NewReleases from "@material-ui/icons/NewReleases";
import WhatshotIcon from "@material-ui/icons/Whatshot";
function BottomNav() {
  //   const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      
      // className={classes.root}
    >
      <BottomNavigationAction
        label="Home"
        icon={<Home />}
        component={Link}
        to="/"
      />
      <BottomNavigationAction
        label="Trending"
        icon={<WhatshotIcon />}
        component={Link}
        to="trending"
      />
      <BottomNavigationAction
        label="Latest"
        icon={<NewReleases />}
        component={Link}
        to="latest"
      />
      <BottomNavigationAction
        label="Contact"
        icon={<AccountCircle />}
        component={Link}
        to="contact"
      />
    </BottomNavigation>
  );
}

export default BottomNav;
