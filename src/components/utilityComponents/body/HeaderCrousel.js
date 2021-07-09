import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@material-ui/core";
import Pic1 from "../../../assets/Portrait_1.jpg";
import Pic2 from "../../../assets/Landscape_1.jpg";
import Pic3 from "../../../assets/Street_1.jpg";
import Pic4 from "../../../assets/Nature_1.jpg";
import Pic5 from "../../../assets/BW_1.jpg";

export default function HeaderCrousel() {
  var items = [
    {
      name: "Portraits",
      src: Pic1,
    },
    {
      name: "Landscapes",
      src: Pic2,
    },
    {
      name: "Street",
      src: Pic3,
    },
    {
      name: "Nature",
      src: Pic4,
    },
    {
      name: "Black&White",
      src: Pic5,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}
function Item(props) {
  return (
    <Paper>
      <img
        src={props.item.src}
        alt="Image Here"
        style={{ height: "45vh", width: "100vw", objectFit: "cover" }}
      />
      <Typography variant="h5" align="center">
        {props.item.name}
      </Typography>
    </Paper>
  );
}
