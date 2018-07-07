import React from "react";
import App from "./App";
import Single from "../single/Single";
import PhotoGrid from "../gallery/grid/PhotoGrid";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const Routes = () => (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
);

export default Routes;
