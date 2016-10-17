export const DeleteConstants = {
  DELETE_IMAGE: "DELETE_IMAGE",
  DELETE_COMMENT: "DELETE_COMMENT",
  REMOVE_IMAGE: "REMOVE_IMAGE",
  REMOVE_COMMENT: "REMOVE_COMMENT"
};

export const deleteThis = (type, toDelete) => ({
  type,
  toDelete
});

export const removeImage = (imgId) => ({
 type: DeleteConstants.REMOVE_IMAGE,
 imgId
});

export const removeComment = (comment) => ({
  type: DeleteConstants.REMOVE_COMMENT,
  comment
});
