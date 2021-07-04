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
    component: <div>Home</div>,
  },
  {
    path: "/trending",
    component: <div>Trending</div>,
  },
  {
    path: "/latest",
    component: <div>Latest</div>,
  },
  {
    path: "/contact",
    component: <div>Contact</div>,
  },
];

function App() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={() => component} key={key} />
  ));
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
        <Switch>{routeComponents}</Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
