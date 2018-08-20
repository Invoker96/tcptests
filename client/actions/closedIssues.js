export function addComment(state, payload) {
    return [
      {
        user: payload.author,
        text: payload.comment
      },
      ...state
    ];
  }
  
  export function deleteComment(state, payload) {
    return [
      ...state.slice(0, payload.index),
      ...state.slice(payload.index + 1)
    ];
  }
  