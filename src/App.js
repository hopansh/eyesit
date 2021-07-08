import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./components/Theme";

const routes = [
  {
    path: "/",
    component: <Body page={"Home"} />,
  },
  {
    path: "/trending",
    component: <Body page={"Trending"} />,
  },
  {
    path: "/latest",
    component: <Body page={"Latest"} />,
  },
  {
    path: "/contact",
    component: <Body page={"Contact"} />,
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
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
