import React from "react";
import { makeStyles } from "@material-ui/core";
import { Card, Checkbox, FormControlLabel } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    background: "orange",
    flexWrap:"wrap"
  },
  card:{
      padding:"0.2rem 0.8rem 0.2rem 0.8rem",
      margin:"1rem",
      borderRadius:"0"
      
  }
}));
function Cateogary() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <FormControlLabel
          label="Portraits"
          control={
            <Checkbox
              value=""
              checked={true}
              //   onChange={}
              color="primary"
            />
          }
        />
      </Card>
      <Card className={classes.card}>
        <FormControlLabel
          label="Landscapes"
          control={
            <Checkbox
              value=""
              checked={true}
              //   onChange={}
              color="primary"
            />
          }
        />
      </Card>
      <Card className={classes.card}>
        <FormControlLabel
          label="Nature"
          control={
            <Checkbox
              value=""
              checked={true}
              //   onChange={}
              color="primary"
            />
          }
        />
      </Card>
      <Card className={classes.card}>
        <FormControlLabel
          label="Abstract"
          control={
            <Checkbox
              value=""
              checked={true}
              //   onChange={}
              color="primary"
            />
          }
        />
      </Card>
      <Card className={classes.card}>
        <FormControlLabel
          label="Street"
          control={
            <Checkbox
              value=""
              checked={true}
              //   onChange={}
              color="primary"
            />
          }
        />
      </Card>
    </div>
  );
}

export default Cateogary;
