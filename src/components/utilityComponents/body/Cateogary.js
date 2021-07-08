import React from "react";
import { makeStyles } from "@material-ui/core";
import { Card, Checkbox, FormControlLabel } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    background: "#FFA62B",
    flexWrap: "wrap",
  },
  card: {
    padding: "0.2rem 0.8rem 0.2rem 0.8rem",
    margin: "0.6rem",
    borderRadius: "0",
  },
}));
const cat = ["Landscapes", "B&W", "Portraits", "Nature", "Abstract", "Street"];
function Cateogary() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState([...cat]);
  const handleChange = (e) => {
    const value = e.target.defaultValue;
    const index = selected.indexOf(value);
    if (index > -1) {
      setSelected([
        ...selected.filter(function (item) {
          return item !== value;
        }),
      ]);
    } else {
      setSelected([...selected, value]);
    }
  };
  return (
    <div className={classes.root}>
      {cat.map((value, index) => {
        return (
          <Card className={classes.card} key={index}>
            <FormControlLabel
              label={value}
              control={
                <Checkbox
                  value={value}
                  checked={selected.includes(value)}
                  onChange={handleChange}
                  color="primary"
                />
              }
            />
          </Card>
        );
      })}
    </div>
  );
}

export default Cateogary;
