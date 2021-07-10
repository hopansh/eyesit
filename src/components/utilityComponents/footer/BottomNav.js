import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Home from "@material-ui/icons/Home";
import NewReleases from "@material-ui/icons/NewReleases";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useDispatch } from "react-redux";
function BottomNav() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    let page = "HOME";
    switch (newValue) {
      case 0:
        page = "HOME";
        break;
      case 1:
        page = "TRENDING";
        break;
      case 2:
        page = "LATEST";
        break;
      case 3:
        page = "CONTACT";
        break;
      default:
        break;
    }
    dispatch({
      type: "PAGE",
      payload: page,
    });
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleChange(event, newValue)}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Latest" icon={<NewReleases />} />
      <BottomNavigationAction label="Contact" icon={<AccountCircle />} />
    </BottomNavigation>
  );
}

export default BottomNav;
