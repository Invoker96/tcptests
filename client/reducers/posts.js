import {incrementLikes} from "../actions/posts"

function posts(state = [], action) {
  switch (action.type) {
    case "INCREMENT_LIKES":
      return incrementLikes(state, action.payload);
    default:
      return state;
  }
}

export default posts;
