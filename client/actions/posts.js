import C from "../data/constants";

export function increment(index) {
  return {
    type: C.INCREMENT_LIKES,
    payload: { index }
  };
}
