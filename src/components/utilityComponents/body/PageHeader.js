import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Footer from "../../Footer"

const useStyles = makeStyles((theme) => ({
  root: {
    // position:"block",
    height: "30vh",
    background: "black",
  },
  image: {
    position: "absolute",
    height: "30vh",
    width: "100%",
    objectFit: "cover",
    opacity:"0.6"
  },
  inner: {
    position: "absolute",
    width: "100%",
    height: "30vh",
    padding: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
function PageHeader({ name, image }) {
  const classes = useStyles();
  return (
      <React.Fragment>
    <div className={classes.root}>
      <img src={image} className={classes.image} alt={name}/>
      <div className={classes.inner}>
        <Typography variant="h2" color="secondary">
          {name}
        </Typography>
      </div>
    </div>
    <Footer />
    </React.Fragment>
  );
}

export default PageHeader;
