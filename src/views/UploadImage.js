import {
  Button,
  FormControl,
  NativeSelect,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  form: {
    padding: "1.5rem",
    margin: theme.spacing(1),
    minWidth: 120,
  },
  input: {
    marginBottom: "1.5rem",
  },
}));
function UploadImage() {
  const classes = useStyles();
  const [fileName, setFileName] = React.useState(null);
  const [formVal, setFormVal] = React.useState({
    name: "",
    hashtags: "",
    cat: "",
  });
  const handleChange = (e) => {
    const name = e.target.name ? e.target.name : e.target.id;
    setFormVal({
      ...formVal,
      [name]: e.target.value,
    });
  };
  const handleImage = (e) => {
    setFileName(e.target?.files[0]?.name);
  };
  return (
    <center>
      <FormControl variant="outlined" className={classes.form}>
        <Typography variant="subtitle2">{fileName}</Typography>
        <Button variant="contained" component="label" className={classes.input}>
          {fileName ? "File Selected" : "Upload File"}
          <input
            accept="image/jpeg"
            className={classes.input}
            style={{ display: "none" }}
            id="image"
            type="file"
            onChange={handleImage}
          />
        </Button>

        <TextField
          className={classes.input}
          id="name"
          label="Image Name"
          variant="outlined"
          size="small"
          onChange={handleChange}
        />
        <NativeSelect
          className={classes.input}
          color="primary"
          value={formVal.cat}
          onChange={handleChange}
          label="Category"
          inputProps={{
            name: "cat",
            id: "filled-age-native-simple",
          }}
        >
          <option id="cat" value="Portrait">
            Portrait
          </option>
          <option id="cat" value="Landscape">
            Landscape
          </option>
          <option id="cat" value="Street">
            Street
          </option>
          <option id="cat" value="Black&White">
            Black&White
          </option>
          <option id="cat" value="Nature">
            Nature
          </option>
        </NativeSelect>
        <TextField
          className={classes.input}
          label="#Hashtags"
          id="hashtags"
          variant="outlined"
          size="small"
          onChange={handleChange}
        />
      </FormControl>
    </center>
  );
}

export default UploadImage;
