import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import UploadImage from "./UploadImage";
const useStyles = makeStyles((theme) => ({
  form: {
    padding: "1.5rem",
  },
  input: {
    marginBottom: "1rem",
  },
}));
function Admin() {
  const classes = useStyles();
  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [valid, setValid] = React.useState(false);
  const handleUser = (e) => {
    setUser(e.target.value);
  };
  const handlePass = (e) => {
    setPass(e.target.value);
  };
  const handleLogin = () => {
    // if (user.toLowerCase() === "admin" && pass === "Admin@123")
    setValid(true);
  };
  return valid ? (
    <UploadImage />
  ) : (
    <center>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label="Username"
          variant="outlined"
          size="small"
          onChange={handleUser}
        />
        <TextField
          className={classes.input}
          label="Password"
          variant="outlined"
          size="small"
          onChange={handlePass}
        />
        <br />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Log-In
        </Button>
      </form>
    </center>
  );
}

export default Admin;
