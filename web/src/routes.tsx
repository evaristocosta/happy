import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateOrphanage from "./pages/CreateOrphanage";
import Landing from "./pages/Landing";
import Orphanage from "./pages/Orphanage";
import OrphanagersMap from "./pages/OrphanagersMap";

function Routes() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/app" component={OrphanagersMap} />
          <Route path="/orphanages/create" component={CreateOrphanage} />
          <Route path="/orphanages/:id" component={Orphanage} />
        </Switch>
      </BrowserRouter>
    );
}


export default Routes;