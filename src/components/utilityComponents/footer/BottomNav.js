import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Home from "@material-ui/icons/Home";
import NewReleases from "@material-ui/icons/NewReleases";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import { useDispatch } from "react-redux";
function BottomNav() {
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const handleChange = (event, newValue) => {
    let show = "all";
    switch (newValue) {
      case 0:
        show = "all";
        break;
      case 1:
        show = "trending";
        break;
      case 2:
        show = "latest";
        break;
      default:
        show = "all";
        break;
    }
    dispatch({
      type: "SHOW",
      payload: show,
    });
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => handleChange(event, newValue)}
      showLabels
    >
      <BottomNavigationAction label="All" icon={<Home />} />
      <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
      <BottomNavigationAction label="Latest" icon={<NewReleases />} />
    </BottomNavigation>
  );
}

export default BottomNav;
