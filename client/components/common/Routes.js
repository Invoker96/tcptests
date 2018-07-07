import React from "react";
import App from "./App";
import Single from "../single/Single";
import PhotoGrid from "../gallery/grid/PhotoGrid";
import Home from "../gallery/Home";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

const Routes = () => (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/view" component={PhotoGrid} />
        <Route path="/view/:postId" component={Single} />
      </Route>
    </Router>
);

export default Routes;
