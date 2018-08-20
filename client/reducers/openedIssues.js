import {incrementLikes} from "../actions/openedIssues"
import C from "../data/constants"

function openedIssues(state = [], action) {
  switch (action.type) {
    case C.INCREMENT_LIKES:
      return incrementLikes(state, action.payload);
    default:
      return state;
  }
}

export default openedIssues;
