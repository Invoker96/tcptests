import React from "react";
import App from "./App";
import { Router, IndexRoute, Route, browserHistory } from "react-router";
import C from "../../data/constants";
import IssueDescriptionPage from "./IssueDescriptionPage";
import { IssueListingPage } from "./IssueListingPage";


// { An <IndexRoute> allows you to provide
//  a default "child" to a parent route when visitor is at the URL of the parent. */}


const Routes = () => (
  <Router history={browserHistory}>

    <Route path={C.LINK_TO_HOME} component={App}>
      <IndexRoute component={IssueListingPage} />
      <Route path={`${C.LINK_TO_DESCRIPTION_PAGE}/:postId`} component={IssueDescriptionPage} />
    </Route>
  </Router>
);

export default Routes;