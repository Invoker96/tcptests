import React from "react";
import App from "./App";
import Single from "../single/Single";
import PhotoGrid from "../gallery/grid/PhotoGrid";
import Home from "../gallery/Home";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import C from "../../data/constants";

const Routes = () => (
  <Router history={browserHistory}>
    <Route path={C.LINK_TO_HOME} component={App}>
      <IndexRoute component={Home} />
      <Route path={C.LINK_TO_GALLERY} component={PhotoGrid} />
      <Route path={`${C.LINK_TO_GALLERY}/:postId`} component={Single} />
    </Route>
  </Router>
);

export default Routes;
