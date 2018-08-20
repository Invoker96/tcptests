import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as commentActions from "../../actionCreator/closedIssues";
import * as postActions from "../../actionCreator/openedIssues";
import Main from "./main";

const actionCreators = {...commentActions, ...postActions}

function mapStateToProps(state) {
  return {
    openedIssues:state.openedIssues,
    closedIssues:state.closedIssues,
    // IssueComment:state.IssueComment
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;