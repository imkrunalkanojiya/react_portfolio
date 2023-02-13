import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navigation from "./Navigation";
import Footer from "./Footer";
import Homepage from "./pages/Homepage";
import Projectpage from "./pages/Projectpage";

const App = () => {
  return (
    <BrowserRouter>
      <div id="app-main">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/projects">
            <Projectpage />
          </Route>
          <Route exact path="*">
            <Homepage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
