import React from "react";
import Planets from "./components/planets/Planets";
import PlanetsDetails from "./components/planetsDetails/PlanetsDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>StarWars</h1>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Planets} />
          <Route path="/details" component={PlanetsDetails} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
