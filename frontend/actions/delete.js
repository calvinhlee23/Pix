export const DeleteConstants = {
  DELETE_IMAGE: "DELETE_IMAGE",
  DELETE_COMMENT: "DELETE_COMMENT"
};

export const deleteThis = (type, toDelete) => ({
  type,
  toDelete
});
