import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./components/Theme";
import BlackWhite from "./views/BlackWhite";
import Street from "./views/Street";
import Landscapes from "./views/Landscapes";
import Nature from "./views/Nature";
import Portraits from "./views/Portraits";
import "./App.css";
import Contact from "./views/Contact";

const routes = [
  {
    path: "/",
    component: <Body />,
  },
  {
    path: "/contact",
    component: <Contact />,
  },
  {
    path: "/nature",
    component: <Nature />,
  },
  {
    path: "/blackandwhite",
    component: <BlackWhite />,
  },
  {
    path: "/street",
    component: <Street />,
  },
  {
    path: "/landscapes",
    component: <Landscapes />,
  },
  {
    path: "/portraits",
    component: <Portraits />,
  },
];

function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={() => component} key={key} />
  ));
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header style={{ height: "9vh", width: "100vw" }} />
        <Switch>{routeComponents}</Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
