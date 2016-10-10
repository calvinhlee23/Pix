export const postAComment = (success, action) => {
  $.ajax({
    url: "api/comments",
    method: "POST",
    data: {comment:
            {image_id: action.imageId,
             body: action.commentBody}
          },
    success
  });
};
