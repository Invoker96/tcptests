import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as commentActions from "../../actionCreator/comments";
import * as postActions from "../../actionCreator/posts";
import Main from "./Main";

const actionCreators = {...commentActions, ...postActions}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
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