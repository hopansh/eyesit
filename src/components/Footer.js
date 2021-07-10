import React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import BottomNav from "./utilityComponents/footer/BottomNav";
function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return <div>
      {matches ? <BottomNav /> : null}
      </div>;
}

export default Footer;
