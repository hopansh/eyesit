import React from "react";
import Cateogary from "../components/utilityComponents/body/Cateogary";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: "SHOW_NAV",
      payload: false,
    });
  }, []);
  return (
    <div>
      <Cateogary />
    </div>
  );
}

export default Home;
