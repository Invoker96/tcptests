import C from "../data/constants";
import { addComment, deleteComment } from "../actions/closedIssues";

function closedIssues(state = [], action) {
  switch (action.type) {
    case C.ADD_COMMENT:
      return addComment(state, action.payload);
    case C.REMOVE_COMMENT:
      return deleteComment(state, action.payload);
    default:
      return state;
  }
  return state;
}

// function comments(state = [], action) {
//   if (action.payload) {
//     return {
//       ...state,
//       [action.payload.postId]: closedIssues(
//         state[action.payload.postId],
//         action
//       )
//     };k8
//   }
//   return state;
// }

export default closedIssues;
