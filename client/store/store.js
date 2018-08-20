import { createStore, compose } from "redux";
import { syncHistoryWithStore } from "react-router-redux";
import { browserHistory } from "react-router";
// import { syncHistoryWithStore } from "C:/Users/PRIYATANDON/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-redux";
// import { browserHistory } from "C:/Users/PRIYATANDON/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router";
import rootReducer from "../reducers/index";
import openedIssues from "../data/openedIssues";
import closedIssues from "../data/closedIssues"
// import IssueComment from "../data/IssueComment";

const defaultState={
   openedIssues,
   closedIssues,
  //  IssueComment
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept("../reducers/", () => {
    const nextRootReducer = require("../reducers/index").default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
