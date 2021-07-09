import React from "react";
import { makeStyles } from "@material-ui/core";
import Cateogary from "./utilityComponents/body/Cateogary";
import Home from "../views/Home";
import Trending from "../views/Trending";
import Latest from "../views/Latest";
import Contact from "../views/Contact";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
   
  },
}));
const getbody = (page) => {
  switch (page) {
    case "HOME":
      return <Home />;
    case "TRENDING":
      return <Trending />;
    case "LATEST":
      return <Latest />;
    case "CONTACT":
      return <Contact />;
    default:
      return <Home />;
  }
};
function Body() {
  const classes = useStyles();
  const page = useSelector(state => state.page)
  return (
    <div className={classes.root}>
      {page==="CONTACT"?null:<Cateogary />}
      <div>{getbody(page)}</div>
    </div>
  );
}

export default Body;
