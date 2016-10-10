export const CommentConstants = {
  POST_COMMENT: "POST_COMMENT",
  RECEIVE_A_COMMENT: "RECEIVE_A_COMMENT"
};

export const postComment = (imageId, commentBody) => ({
  type: CommentConstants.POST_COMMENT,
  imageId,
  commentBody
});

export const receiveAComment = (comment) => ({
  type: CommentConstants.RECEIVE_A_COMMENT,
  comment
});
