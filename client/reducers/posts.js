import {incrementLikes} from "../actions/posts"
import C from "../data/constants"

function posts(state = [], action) {
  switch (action.type) {
    case C.INCREMENT_LIKES:
      return incrementLikes(state, action.payload);
    default:
      return state;
  }
}

export default posts;
