export const like = (imageId, success, error) => {
  $.ajax({
    method: "POST",
    url: "/api/likes",
    data: {like: {image_id: imageId}},
    success,
    error
  });
};

export const unlike = (imageId, success, error) => {
  var url = `/api/likes/${imageId}`;
  $.ajax({
    method: "DELETE",
    url,
    success,
    error
  });
};
