import React from "react";
import { makeStyles } from "@material-ui/core";
import Cateogary from "./utilityComponents/body/Cateogary";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("md")]: {
        height: "91vh",
    },
    [theme.breakpoints.down("xs")]: {
        height: "82vh",
    },
    // overflowY: "scroll",
  },
}));
function Body({ page }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Cateogary />
    </div>
  );
}

export default Body;
