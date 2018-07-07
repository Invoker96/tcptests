import constants from './../data/constant';

export function addComment(postId, author, comment) {
  return {
    type: constants.ADD_COMMENT,
    postId,
    author,
    comment
  };
}

export function removeComment(postId, i) {
  return {
    type: constants.REMOVE_COMMENT,
    i,
    postId
  };
}
export function updateComment(postId, i) {
  return {
    type: constants.UPDATE_COMMENT,
    i,
    postId
  };
}

