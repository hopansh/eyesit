import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
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

function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
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
  return (
    <React.Fragment>
      <Tabs
        variant="scrollable"
        className={classes.tabContainer}
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
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
}

export default NavTabs;
