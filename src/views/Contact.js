import React from "react";
import { useDispatch } from "react-redux";
function Contact() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({
      type: "SHOW_NAV",
      payload: false,
    });
  }, []);
  return <div>This is a contact page</div>;
}

export default Contact;
