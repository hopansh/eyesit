import React from "react";
import { makeStyles } from "@material-ui/core";
import Cateogary from "./utilityComponents/body/Cateogary";
import Home from "../views/Home";
import Trending from "../views/Trending";
import Latest from "../views/Latest";
import Contact from "../views/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
      // height: "91vh",
    },
    [theme.breakpoints.down("xs")]: {
      // height: "82vh",
    },
    // overflowY: "scroll",
  },
}));
const getbody = (page) => {
  switch (page) {
    case "Home":
      return <Home />;
    case "Trending":
      return <Trending />;
    case "Latest":
      return <Latest />;
    case "Contact":
      return <Contact />;
    default:
      return <Home />;
  }
};
function Body({ page }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {page==="Contact"?null:<Cateogary />}
      <div>{getbody(page)}</div>
    </div>
  );
}

export default Body;
