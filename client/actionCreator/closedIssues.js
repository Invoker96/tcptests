import C from "../data/constants";

export function addComment(IssueId, author, comment) {
  return {
    type: C.ADD_COMMENT,
    payload: {
      IssueId,
      author,
      comment
    }
  };
}

export function removeComment(IssueId, index) {
  return {
    type: C.REMOVE_COMMENT,
    payload: {
      index,
      IssueId
    }
  };
}