import C from "../data/constants"

function postComments(state = [], action) {
  switch (action.type) {
    case C.ADD_COMMENT:
      return [
        {
          user: action.payload.author,
          text: action.payload.comment
        },
        ...state
      ];
    case C.REMOVE_COMMENT:
      return [...state.slice(0, action.payload.index), ...state.slice(action.payload.index + 1)];
    default:
      return state;
  }
  return state;
}

function comments(state = [], action) {
  if (action.payload) {
    return {
      ...state,
      [action.payload.postId]: postComments(state[action.payload.postId], action)
    };
  }
  return state;
}

export default comments;
