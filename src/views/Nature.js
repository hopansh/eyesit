import React from "react";
import image from "../assets/Nature_1.jpg";
import PageHeader from '../components/utilityComponents/body/PageHeader'
function Nature() {
  return (
    <div>
      <PageHeader name="Nature" image={image} />
    </div>
  );
}

export default Nature;
