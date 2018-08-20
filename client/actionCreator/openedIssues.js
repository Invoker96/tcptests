import C from "../data/constants";

export function increment(index) {
  return {
    type: C.INCREMENT_LIKES,
    payload: { index }
  };
}
export function editReaction(index){
    return{
        type:C.EDIT_REACTION,
        payload:{index}
    };
}
