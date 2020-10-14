import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import OrphanagersMap from "./pages/OrphanagersMap";

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/app" component={OrphanagersMap} />
        </Switch>
      </BrowserRouter>
    );
}


export default Routes;