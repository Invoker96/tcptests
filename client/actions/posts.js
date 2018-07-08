export function incrementLikes(state, payload) {
  return [
    ...state.slice(0, payload.index),
    {
      ...state[payload.index],
      likes: state[payload.index].likes + 1
    },
    ...state.slice(payload.index + 1)
  ];
}
