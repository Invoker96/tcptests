import C from "../data/constants";

export function addComment(postId, author, comment) {
  return {
    type: C.ADD_COMMENT,
    payload: {
      postId,
      author,
      comment
    }
  };
}

export function removeComment(postId, index) {
  return {
    type: C.REMOVE_COMMENT,
    payload: {
      index,
      postId
    }
  };
}