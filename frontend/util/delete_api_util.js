export const deleteImage = (img, success, error) => {
  $.ajax({
    method: "DELETE",
    url:  `/api/images/${img.id}`,
    success,
    error
  });
};

export const deleteComment = (cmt, success, error) => {
  $.ajax({
    method: "DELETE",
    url: `/api/comments/${cmt.id}`,
    success,
    error
  });
};
