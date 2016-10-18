export const LikeConstants = {
  LIKE: "Like",
  UNLIKE: "Unlike",
  PROCESS_LIKE: "PROCESS_LIKE",
  RECEIVE_LIKE: "RECEIVE_LIKE"
};

export const processLike = (likeAbility, imageId) => ({
  type: LikeConstants.PROCESS_LIKE,
  likeAbility,
  imageId
});

// for reducer
export const receiveLike = (likeAbility, like) => ({
  type: LikeConstants.RECEIVE_LIKE,
  likeAbility,
  like
});
